const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const registerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

registerSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.JWT_TOKEN_SECRET);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log('failed to generate token', error);
    }
}

const registerModel = mongoose.model('register-data', registerSchema);

module.exports = registerModel;