const express = require('express');
const deptModel = require('../Models/deptModel');
const deptRouter =express.Router();

//create department
deptRouter.post('/', async (req, res) => {

    try {
        console.log(req.body)
        dept = await deptModel.create(req.body);
        return res.json({ "msg": "Success" });
    }
    catch (err) {
       return res.json({ "msg": err.message });
    }
});
//show department
deptRouter.get('/', async (req, res) => {
    try {
        const departments = await deptModel.find();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//show department by id
deptRouter.get('/:dept_id', async (req, res) => {
    dept=await deptModel.findById(req.params.dept_id);
    res.json({ 'msg': "Success", 'user': dept });
});

deptRouter.put('/:id', async (req, res) => {
    try {
        dept = await deptModel.findByIdAndUpdate(req.params.id, req.body);
        return res.json({ 'msg': "success" });
    } catch (err) {
        return res.json({ 'msg': err.message });
    }
});

deptRouter.delete('/:id', async (req, res) => {
    dept = await deptModel.findByIdAndDelete(req.params.id);
    return res.json({ 'msg': "Deleted" });
});

module.exports = deptRouter;


