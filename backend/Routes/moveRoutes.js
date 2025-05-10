const express=require ('express');
const {model}=require ('mongoose');
const moveModel=require ('../Models/moveModel.js')
const moveRouter=express.Router();

moveRouter.post('/', async (req, res) => {
    try {
        move = await moveModel.create(req.body);
        return res.json({ "msg": "Success" });
    }
    catch (err) {
        console.res.json({ "msg": err.message });
    }
});


moveRouter.get('/', async (req, res) => {
    move = await moveModel.find();
    res.json({ 'msg': "Success", 'user': move });
});


moveRouter.get('/:id', async (req, res) => {
    move = await moveModel.findById(req.params.id);
    res.json({ 'msg': "Success", 'user': move });
});



moveRouter.put('/:id', async (req, res) => {
    try {
        move = await moveModel.findByIdAndUpdate(req.params.id, req.body);
        return res.json({ 'msg': "success" });

    } catch (err) {
        return res.json({ 'msg': err.message });

    }
});

moveRouter.delete('/:id', async (req, res) => {
    move = await moveModel.findByIdAndDelete(req.params.id);
    return res.json({ 'msg': "Deleted" });

});


module.exports = moveRouter;