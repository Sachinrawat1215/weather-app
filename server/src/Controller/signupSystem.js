const registerModel = require('../Schema/register');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const app = require('express')();

app.use(cookieParser());

const registerUser = async (request, response) => {
    try {
        console.log(request.body);
        const email = request.body.email;
        const getUser = await registerModel.findOne({ email: request.body.email });
        if (getUser) {
            response.status(200).json({ status: 'Already Saved' });
        } else {
            const name = request.body.name;
            const tag = request.body.tag;
            let password = request.body.password;
            password = await bcrypt.hash(password, 10);

            const res = await new registerModel({ name, email, password, tag });
            res.save();
            response.status(200).json({ status: 'User register' });
        }
    } catch (error) {
        response.status(500).json({ Status: 'failed to load register' });
    }
};

const loginUser = async (request, response) => {
    try {
        const password = request.body.password;
        const getUser = await registerModel.findOne({ email: request.body.email });
        if (!getUser) {
            response.status(200).json({ status: 'User not found' });
        } else {
            const isMatch = await bcrypt.compare(password, getUser.password);
            if (isMatch) {
                // Genuine Case
                const token = await getUser.generateAuthToken();
                console.log(token);
                response.cookie('authtoken', token, {
                    expires: new Date(Date.now() + 2592000000),
                    httyOnly: true,
                });

                response.status(200).json(getUser);
            } else {
                response.status(200).json({ status: 'Wrong Password' });
            }
        }
    } catch (error) {
        response.status(500).json({ Status: 'failed to load login' });
    }
};

const loginAdmin = async (request, response) => {
    try {
        const password = request.body.password;
        const getUser = await registerModel.findOne({ email: request.body.email });
        if (!getUser) {
            response.status(200).json({ status: 'User not found' });
        } else {
            console.log(getUser.tag);
            if (getUser.tag === 'admin') {
                const isMatch = await bcrypt.compare(password, getUser.password);
                console.log(isMatch);
                if (isMatch) {
                    // Genuine Case
                    const token = await getUser.generateAuthToken();
                    console.log("token", token);
                    response.cookie('authtoken', token, {
                        expires: new Date(Date.now() + 2592000000),
                        httyOnly: true,
                    });

                    response.status(200).json(getUser)
                } else {
                    response.status(200).json({ status: 'Wrong Password' });
                }
            } else {
                response.status(200).json({ status: 'Not Admin' });
            }
        }
    } catch (error) {
        response.status(500).json({ status: 'Login Admin Failed' });
    }
};

const getUser = async (request, response) => {
    try {
        // const id = request.params.id;
        // const user = await registerModel.findById(id);
        // console.log(request.rootUser);

        response.status(200).json(request.rootUser);
    } catch (error) {
        response.status(500).json(error);
    }
}

const logoutUser = async (request, response) => {
    try {
        console.log(request.rootUser);
        request.rootUser.tokens = request.rootUser.tokens.filter((element) => {
            return element.token !== request.token;
        })

        response.clearCookie('authtoken');

        await request.rootUser.save();
        response.status(200).json({status: 'okay'});
    } catch (error) {
        response.status(500).json(error);
    }
}

module.exports = { registerUser, loginUser, loginAdmin, getUser, logoutUser };