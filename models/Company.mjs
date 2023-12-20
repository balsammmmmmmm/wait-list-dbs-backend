import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Schema = mongoose.Schema;
const companySchema = new Schema(
  {
    __id: String,
    companyName: String,
    onwnerName: String,
    ownerNumber: Number,
    managerNumber: Number,
    invoiceEmail: String,
    accountingEmail: String,
    managerEmail: String,
    address: String,
    city: String,
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
