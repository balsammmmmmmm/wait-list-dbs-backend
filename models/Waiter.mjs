import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Schema = mongoose.Schema;
const waiterSchema = new Schema(
  {
    __id: String,
    firstName: String,
    surname: String,
    gender: String,
    number: Number,
    address: String,
    city: String,
  },
  { timestamps: true }
);

const Waiter = mongoose.model("Waiter", waiterSchema);

export default Waiter;
