
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
// import { connectDB } from './models/connectDB'
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
 const connectDB = async()=>{
  // promise dönecek.
  try {
      mongoose.Promise = global.Promise;
      // console.log(process.env.MONGODB_URI)
         await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
          }) 
         console.log("succesfully connect to DB")
     } catch (error) {
         console.log("error connecting DB", error)
     }
     mongoose.set('useFindAndModify', false);
  }
connectDB();

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