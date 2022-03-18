import mongoose from 'mongoose';

const {Schema} = mongoose;

const categorySchema = new Schema({
    title : {
        type : String,
        required : true
    },
    products :[Schema.Types.ObjectId],
    description : String,
});


export default mongoose.models.Category || mongoose.model('Category', categorySchema);