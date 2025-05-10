const express= require('express')
const {model}=require('mongoose')
const questionModel=require('../Models/questionModel');
const questionRouter=express.Router();
//create question
questionRouter.post('/', async (req, res) => {
    try {
        let {questionText, departmentId, employeeId }=req.body;
        question = await questionModel.create({
            questionText,
            departmentId,
            employeeId,
        });
        return res.json({ "msg": "Success" });
    }
    catch (err) {
        return res.json({ "msg": err.message });
    }
});

//get all question
questionRouter.get('/', async (req, res) => {
    question = await questionModel.find().populate('employeeId', 'firstName lastName').populate('departmentId', 'deptName');
    res.json({ 'msg': "Success", 'user':question});
});


// questionRouter.get('/:id', async (req, res) => {
//     question = await questionModel.findById(req.params.id);
//     res.json({ 'msg': "Success", 'user':question });
// });
questionRouter.get('/emp/:id', async (req, res) => {
    try {
      const questions = await questionModel
        .find({ employeeId: req.params.id })
        .populate('employeeId', 'firstName lastName')
        .populate('answers'); // include answers here
  
      res.json(questions);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  });

questionRouter.get('/emp/:id', async (req, res) => {
    question = await questionModel.find({employeeId:req.params.id});
    res.json({ 'msg': "Success", 'user':question });
});



questionRouter.put('/:id', async (req, res) => {
    try {
        question = await questionModel.findByIdAndUpdate(req.params.id, req.body);
        return res.json({ 'msg': "success" });

    } catch (err) {
        return res.json({ 'msg': err.message });

    }
});

questionRouter.delete('/:id', async (req, res) => {
    question = await questionModel.findByIdAndDelete(req.params.id);
    return res.json({ 'msg': "Deleted" });

});

module.exports=questionRouter;