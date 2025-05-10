const express = require('express');
const mongoose = require('mongoose')

var ansSchema = new mongoose.Schema({
    answerText: String,
    answerDate: {
        type: Date,
        default: Date.now
    },
   

    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
    },
    
    status: String
});

var ansModel = mongoose.model('answer', ansSchema);
module.exports = ansModel;
