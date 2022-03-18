import mongoose from 'mongoose';
const dbConnect = ()=>{
    try {
         mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology : true,
            useNewUrlParser : true
        });
    }
    catch(err) {
        console.log(err);
    }
}


export default dbConnect;