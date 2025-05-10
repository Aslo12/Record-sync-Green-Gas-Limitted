const express = require('express');
const { model } = require('mongoose');
const empModel = require('../Models/empModel.js');
const empRouter = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
//registration employee
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // make sure this folder exists
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Registration route
empRouter.post('/register', upload.single('image'), async (req, res) => {
    try {
        const data = req.body;
        if (req.file) {
            data.image = req.file.filename;
        }

        await empModel.create(data);
        return res.json({ msg: "Success" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server Error", error: err.message });
    }
});



//show employee
empRouter.get('/', async (req, res) => {
    emp = await empModel.find().populate('departmentId', 'deptName');
   // console.log(emp);
    const total = await empModel.countDocuments();
    res.json({ 'msg': "Success", 'user': emp, total });
});


empRouter.get('/:id', async (req, res) => {
    try {
        const emp = await empModel.findById(req.params.id).populate('departmentId', 'deptName');
        res.json({ msg: "Success", user: emp });
    } catch (err) {
        res.status(500).json({ msg: "Error", error: err.message });
    }
});


// Update employee

// UPDATE EMPLOYEE PROFILE
empRouter.put('/:id', upload.single('image'), async (req, res) => {
    try {
      const { firstName, lastName, email, dob, gender, address, departmentId, status } = req.body;
  
      const updateData = {
        firstName,
        lastName,
        email,
        dob,
        gender,
        address,
        departmentId,
        status
        
      };
     
  
      // If new image uploaded, include it
      if (req.file) {
        updateData.image = req.file.filename;
      }
  
      const updated = await empModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
  
      if (!updated) {
        return res.status(404).json({ msg: "Employee not found" });
      }
  
      res.json({ msg: "Profile updated successfully", employee: updated });
  
    } catch (error) {
      console.error("Update error:", error);
      res.status(500).json({ msg: "Error updating employee", error });
    }
  });

empRouter.delete('/:id', async (req, res) => {
    emp = await empModel.findByIdAndDelete(req.params.id);
    return res.json({ 'msg': "Deleted" });

});
// login employee

empRouter.post('/log', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        emp = await empModel.findOne({'email' :email });
        if (emp.password === password) {
            res.json({ 'msg': "Success", id:emp._id })
        }

        else {
            res.json({ 'msg': "Failed" });
        }
    }
    catch (error) {
        res.json({ 'msg': error.message });
    }

});


module.exports = empRouter;
