const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./Routes/route');
const Connection = require('./db/conn');
const dotenv = require('dotenv');

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));
dotenv.config();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
Connection();
app.use('/', Router);

app.listen(PORT, () => {
    console.log(`Server is running sucessfully on port number ${PORT}`);
});