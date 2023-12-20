import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Schema = mongoose.Schema;
const employeeSchema = new Schema(
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

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
