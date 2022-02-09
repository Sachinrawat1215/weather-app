const jwt = require('jsonwebtoken');
const registerSchema = require('../Schema/register');

const authentication = async (request, response, next) => {
    try {
        const tokenObj = request.headers.cookie;
        // console.log(tokenObj)

        if (tokenObj === undefined) {
            response.sendStatus(500);
            return;
        }

        const token = tokenObj.substr(10, tokenObj.length);
        // console.log(token);

        const verifyToken = await jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        // console.log(verifyToken);
        const rootUser = await registerSchema.findOne({ _id: verifyToken._id, 'tokens.token': token });
        // console.log(rootUser);

        if(!rootUser){
            response.sendStatus(500);
            return;
        }

        request.token = token;
        request.rootUser = rootUser;
        request.userId = rootUser._id;

        next();
    } catch (error) {
        response.status(500).json('authentication failed...', error);
    }
};

module.exports = authentication;