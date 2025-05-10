const express = require('express');
const mongoose = require('mongoose');

var adminSchema=new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    status:String
});

var adminModel= mongoose.model('admin',adminSchema);
module.exports = adminModel;
