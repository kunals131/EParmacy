import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  cart: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        min: 1,
      },
    },
  ],
  savedItems: [Schema.Types.ObjectId],
  addresses: [
    {
      fullName: String,
      pinCode: Number,
      flat: String,
      area: String,
      landmark: String,
      town: String,
      state: String,
      default: {
        Boolean,
        default: false,
      },
    },
  ],
});

export default mongoose.models.USER || mongoose.model("USER", userSchema);
