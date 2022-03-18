import mongoose from 'mongoose';

const {Schema} = mongoose;

const orderSchema = new Schema({
    customer : {
        type : Schema.Types.ObjectId,
        ref : 'USER',
        required : true
    },
    total : {
        tax : Number,
        delivery : Number,
        items : Number
    },
    status : {
        type : Number,
        default : 0,
        required : true
    },
    paymentMethod : {
        type : String,
        enum : ['COD', 'directTransfer'],
    },
    address : {
        pinCode : Number,
        flat : String,
        area : String,
        landmark : String,
        town : String,
        state : String,
        default : {
            Boolean,
            default : false
        }
    },
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', orderSchema);