
const express = require("express");
require("dotenv").config();
const app = express();
// var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');


const cors = require('cors');

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
const connectDB = require("./models/connectDB.js");
connectDB();




const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
const port = process.env.PORT || 5000;
app.listen((port), ()=>{
    console.log(`I am listening on port ${port}`)
});