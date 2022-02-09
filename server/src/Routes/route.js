const express = require('express');
const Router = express.Router();
const registerController = require('../Controller/signupSystem');
const authentication = require('../Middlewares/authentication');

Router.post('/user/register', registerController.registerUser);
Router.post('/user/login', registerController.loginUser);
Router.post('/admin/login', registerController.loginAdmin);
Router.post('/admin/register', registerController.registerUser);
Router.get('/dashboard/:id', authentication, registerController.getUser);
Router.get('/logout', authentication, registerController.logoutUser);

module.exports = Router;