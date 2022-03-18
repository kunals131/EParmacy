import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    tags : [String],
    price : {
        type : Number,
        required : true,
        min : 0
    },
    quantity : {
        type : Number,
        required : true,
        min : 0
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : 'Category'
    },
    options : [{
        text : String,
        price : Number
    }],
    discount : {
        type :Number,
        min : 0
    },
    description : {
        type : String,
        required : true
    },
    conditions : {
        type : String,
        required : true
    },
    images : {
        type : [String],
        required : true
    },
    isPrescription : {
        type : Boolean,
        default : false
    }
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);