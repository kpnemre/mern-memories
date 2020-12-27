
const express = require("express");
require("dotenv").config();
const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

const connectDB = require("./models/connectDB.js");
connectDB();

const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

const port = process.env.PORT || 5000;
app.listen((port), ()=>{
    console.log(`I am listening on port ${port}`)
});