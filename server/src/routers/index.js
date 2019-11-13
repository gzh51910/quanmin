const express = require('express');

let Router = express.Router();

let loginRouter = require('./login');
let goodsRouter = require('./goods');
let userRouter = require('./user');
let regRouter = require('./reg');