const express = require('express');
const { userLogin, registerUser, adminLogin } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/login', userLogin);
userRouter.post('/register', registerUser);
userRouter.post('/admin', adminLogin);

module.exports = userRouter;