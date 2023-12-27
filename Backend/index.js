const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3001;
const EmpoloyeeModel = require("./model/model");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");


app.get("/register", (req, res) => {
    EmployeeModel.find()
      .then((employee) => res.json(employee))
      .catch((err) => res.json(err));
  });
  

app.post("/register", (req, res) => {
  EmpoloyeeModel.create(req.body)
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
