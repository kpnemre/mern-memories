import mongoose from 'mongoose';
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// BAĞLANIP bağlanmadığının kontrolü
export const connectDB = async()=>{
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


// export default connectDB;