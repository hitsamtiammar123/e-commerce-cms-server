require('dotenv').config();
const express=require('express');
const app=express();
const route=require('./route');
const cors=require('cors');
const fileUpload = require('express-fileupload');

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(fileUpload({
    createParentPath: true
}));

app.use(route);

module.exports=app;

