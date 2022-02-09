const mongoose = require('mongoose');

const connection = () => {
    mongoose.connect('mongodb://localhost:27017/weatherdata').then(() => {
        console.log('Database Connected...');
    }).catch((error) => {
        console.log('Failed to connect to database', error);
    })
}

module.exports = connection;