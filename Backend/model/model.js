const mongoose = require('mongoose');

const  EmployeeSchema= new mongoose.Schema({
    name: String,
    
    gender: String,
    
    nationality:  String,
    
    email:  String,
  
    phoneNumber: String,
   
    address:  String,
    
    message: String
  
});

const EmpoloyeeModel=mongoose.model("employees",EmployeeSchema);
module.exports=EmpoloyeeModel