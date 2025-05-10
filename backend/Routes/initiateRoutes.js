const express = require('express');
const { model } = require('mongoose');
const initiateModel = require('../Models/initiateModel.js');
const initiateRouter = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

//use multer to upload file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });
//create a initiate file
initiateRouter.post('/', upload.single('file'), async (req, res) => {
  try {
    // console.log('BODY:', req.body);
    // console.log('FILE:', req.file);
    const { initiatedBy, departmentId, fileStatus } = req.body;
    const filePath = req.file ? req.file.filename : null;

    if (!initiatedBy || !departmentId || !fileStatus || !filePath) {
      return res.json({ message: 'Missing required fields' });
    }

    const initiation = await initiateModel.create({
      initiatedBy: initiatedBy,
      departmentId: departmentId,
      fileStatus: fileStatus,
      file: filePath,
    });

    return res.json({ message: 'Initiation saved', initiation });
  } catch (err) {
    console.error('Error in initiation creation:', err);
    return res.json({ message: 'Server error', error: err.message });
  }
});
// show report api
initiateRouter.get('/reports', async (req, res) => {
  try {
    const total = await initiateModel.countDocuments();
    const completed = await initiateModel.countDocuments({ fileStatus: 'Completed' });
    const pending = await initiateModel.countDocuments({ fileStatus: 'Pending' });
    const processing = await initiateModel.countDocuments({ fileStatus: 'Processing' });
    
    res.json({"total":total, "completed":completed, "pending":pending, "processing":processing });
  } catch (error) {
    console.error(error);
    res.json({ message: "Server error" });
  }
});
// get initiate file
initiateRouter.get('/', async (req, res) => {
  try {
    const initiate = await initiateModel.find().populate('initiatedBy', 'firstName lastName')
    .populate('departmentId', 'deptName');
    // console.log(initiate);
    res.json({ 'msg': "Success", 'user': initiate });
  } catch (err) {
    res.json({ "msg": "Server Error", error:err.message })
  }
});

//get file by employee id
initiateRouter.get('/pending/:empid', async (req, res) => {
try{
  const initiate = await initiateModel.find({fileStatus:"Pending",initiatedBy: req.params.empid }) .populate('initiatedBy', 'firstName lastName')
  .populate('departmentId', 'deptName');

  
  res.json({ 'msg': "Success", 'user':initiate });

}catch(err){
  res.json({"msg":"Server Error", error:err.message})
}
  
});
initiateRouter.get('/:empid', async (req, res) => {
try{
  const initiate = await initiateModel.find({ initiatedBy: req.params.empid }) .populate('initiatedBy', 'firstName lastName')
  .populate('departmentId', 'deptName');

  
  res.json({ 'msg': "Success", 'user':initiate });

}catch(err){
  res.json({"msg":"Server Error", error:err.message})
}
  
});


// update initiated file
// Add multer middleware to the update route
initiateRouter.put('/:id', upload.single('file'), async (req, res) => {
  try {
    const { initiatedBy, departmentId, fileStatus } = req.body;
    const filePath = req.file ? req.file.filename : null;

    const updateData = {
      initiatedBy,
      departmentId,
      fileStatus,
    };

    if (filePath) {
      updateData.file = filePath;
    }

    const updated = await initiateModel.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updated) return res.status(404).json({ message: 'Not found' });

    res.json({ message: 'Success', updated });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

// New route to fetch by _id
initiateRouter.get('/file/:id', async (req, res) => {
  try {
    const file = await initiateModel.findById(req.params.id)
      .populate('initiatedBy', 'firstName lastName')
      .populate('departmentId', 'deptName');
    if (!file) return res.status(404).json({ message: 'Not found' });

    res.json({ message: "Success", user: file });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});


//delete route
initiateRouter.delete('/:id', async (req, res) => {
  try {
    const record = await initiateModel.findById(req.params.id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    const filePath = path.join(__dirname, '../uploads', record.file);

    // Check if file exists before deleting
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    } else {
      console.warn("File does not exist:", filePath);
    }

    // Delete from database
    await initiateModel.findByIdAndDelete(req.params.id);
    return res.json({ msg: "Deleted successfully" });
  } catch (err) {
    console.error("Error during deletion:", err.message);
    return res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

module.exports = initiateRouter;


