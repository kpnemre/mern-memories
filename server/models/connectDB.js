const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// BAĞLANIP bağlanmadığının kontrolü
const connectDB = async()=>{
// promise dönecek.
try {
    console.log(process.env.MONGODB_URI)
    // 'mongodb+srv://dbUser:emre@cluster0.1u7ik.mongodb.net/TestDatabase'
       await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true}) 
       console.log("succesfully connect to DB")
   } catch (error) {
       console.log("error connecting DB", error)
   }
   mongoose.set('useFindAndModify', false);
}

module.exports= connectDB;