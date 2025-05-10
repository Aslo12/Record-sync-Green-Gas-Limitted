const express = require('express');
const mongoose = require('mongoose');

const initiateSchema = new mongoose.Schema({
  initiatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'emp', required: true },
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'dept', required: true },
  fileStatus: { type: String, required: true },
  file: { type: String, required: true }, // stores filename
  createdAt: { type: Date, default: Date.now }
});
var initiateModel=mongoose.model('Initiate', initiateSchema);

module.exports = initiateModel; 
