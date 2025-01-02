const express = require("express");
const app=express();
const bodyParser=require('body-parser');
const cors = require('cors');
app.use(cors());
const multer = require('multer');
const upload = multer();

require('dotenv').config();
const PORT=process.env.PORT||5000;
require('./models/db');
const EmployeeRouter=require('./Routes/EmployeeRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',(req, res)=>{
    res.send('Employee Mgm server is running');
})
app.use('/api/employees',EmployeeRouter)
app.listen(PORT,()=>{
    console.log('server is running on ${PORT}');
})