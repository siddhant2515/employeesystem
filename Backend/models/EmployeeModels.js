const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema=new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    phone:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    profileImage:{
        type:String,
    }
    
});

const EmployeeModels = mongoose.model('employees', EmployeeSchema);
module.exports=EmployeeModels;