const express=require('express');
const mongoose=require('mongoose');

var NotificationSchema= new mongoose.Schema({
       
        employees:{
           type:mongoose.Schema.Types.ObjectId,
           ref:'emp'
       },
        Notification:String,
        IsRead:Boolean,
        
        notificationDate: {
                type: Date,
                default: Date.now
            },
        Status:String,
})

var NotificationModel=mongoose.model('notification',NotificationSchema);
module.exports=NotificationModel;