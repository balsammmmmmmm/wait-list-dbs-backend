import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Employee from "./models/Employee.mjs";
import Waiter from "./models/Waiter.mjs";
import Company from "./models/Company.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log("DATABASE OK");
  })
  .catch((err) => {
    console.log("CONNECTION ERROR", err);
    process.exit();
  });

//Create a new Waiter
app.post("/waitlist", async (req, res) => {
  try {
    const newWaiter = new Waiter(req.body);
    const savedWaiter = await newWaiter.save();
    res.status(200).json(savedWaiter);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//Get all waiters
app.get("/waitlist/list", async (req, res) => {
  try {
    const waiters = await Waiter.find();
    res.status(200).json(waiters);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//create a new employee
app.post("/employees", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//get all employees
app.get("/employees/list", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//create a new company
app.post("/company", async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    const savedCompany = await newCompany.save();
    res.status(200).json(savedCompany);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//get all companies
app.get("/company/list", async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//Simple route
app.get("/", (req, res) => {
  res.json({ message: "Diamonds Beach Services" });
});

//404 route
app.use((req, res) => {
  res.status(404).json({ message: "404 - Not Found" });
});

//listen for requests
app.listen(PORT, () => {
  console.log("SERVER OK\nPORT:3000");
});
