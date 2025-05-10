
const express= require('express');
const mongoose=require('mongoose');

var empSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dept',
      },
    email:String,
    password:String,
    image:String,
    dob:Date,
    gender:String,
    address:String,
    status:String
});

var empModel = mongoose.model('emp',empSchema);

module.exports=empModel;