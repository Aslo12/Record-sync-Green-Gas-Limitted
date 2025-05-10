const express=require('express');
const mongoose=require('mongoose');

var MoveSchema=new mongoose.Schema({
    fromDeptId: {
        type: mongoose.Schema.Types.ObjectId, // yeh foreign key hoga Dept model ka
        ref: 'dept',
    },
    toDeptId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dept',
    },
    moveDate: {
        type: Date,
        default: Date.now
    }
});

var MoveModel=mongoose.model('move', MoveSchema);
module.exports=MoveModel;