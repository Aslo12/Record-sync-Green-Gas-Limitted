const express = require('express');
const { model } = require('mongoose');
const adminModel = require('../Models/adminModel');
const adminRouter = express.Router();


// 🔸 Get All Admins
adminRouter.get('/', async (req, res) => {
    try {
        const admins = await adminModel.find();
        return res.json(admins);
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
});

// 🔸 Create Admin
adminRouter.post('/',async (req, res) => {
    
   try{
        console.log(req.body);
        const admin = await adminModel.create(req.body);
        console.log(admin);
        return res.json({ 'msg': "Admin created successfully", admin });
    } catch (err) {
        return res.json({ msg: err.message });
    }
});



adminRouter.post('/log', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        admin = await adminModel.findOne({ email });
        console.log(admin);
        if (admin.password === password) {
            res.json({ 'msg': "Success", id:admin._id })
        }

        else {
            res.json({ 'msg': "Failed" });
        }
    }
    catch (error) {
        res.json({ 'msg': error.message });
    }

});




module.exports = adminRouter;





