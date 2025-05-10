const express = require('express');
const mongoose = require('mongoose');

var deptSchema= new mongoose.Schema({
    deptName:String,
    status:String
});

const deptModel= mongoose.model('dept',deptSchema);

module.exports= deptModel;
