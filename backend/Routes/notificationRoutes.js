const express = require('express')
const {model}=require('mongoose')
const notificationModel=require ('../Models/notificationModel');
const notificationRouter=express.Router();

notificationRouter.post('/', async (req, res) => {
    try {
        notification = await notificationModel.create(req.body);
        return res.json({ "msg": "Success" });
    }
    catch (err) {
        console.res.json({ "msg": err.message });
    }
});


notificationRouter.get('/', async (req, res) => {
    notification = await notificationModel.find();
    res.json({ 'msg': "Success", 'user':notification});
});
// Fetch notifications for a specific user
notificationRouter.get('/user/:id', async (req, res) => {
    try {
        const notifications = await notificationModel.find({ employees: req.params.id });
        res.json({ 'msg': "Success", 'user': notifications });
    } catch (err) {
        res.json({ 'msg': err.message });
    }
});

notificationRouter.get('/:id', async (req, res) => {
    notification = await notificationModel.findById(req.params.id);
    res.json({ 'msg': "Success", 'user':notification });
});



notificationRouter.put('/:id', async (req, res) => {
    try {
        notification = await notificationModel.findByIdAndUpdate(req.params.id, req.body);
        return res.json({ 'msg': "success" });

    } catch (err) {
        return res.json({ 'msg': err.message });

    }
});

notificationRouter.delete('/:id', async (req, res) => {
    notification = await notificationModel.findByIdAndDelete(req.params.id);
    return res.json({ 'msg': "Deleted" });

});

module.exports=notificationRouter;