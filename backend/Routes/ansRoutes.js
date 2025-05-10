const express = require('express');
const ansModel = require('../Models/ansModel');
const questionModel = require('../Models/questionModel');
const ansRouter = express.Router();

// CREATE Answer
ansRouter.post('/', async (req, res) => {
    try {
      const { answerText, questionId, status } = req.body;
      const newAnswer = await ansModel.create({ answerText, questionId, status });
  
      // Update question document to include this answer
      await questionModel.findByIdAndUpdate(questionId, {
        $push: { answers: newAnswer._id },
      });
  
      return res.status(201).json({ msg: "Success", ans: newAnswer });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  });

// READ All Answers
ansRouter.get('/', async (req, res) => {
  try {
    const ans = await ansModel.find();
    return res.status(200).json({ msg: "Success", Ans: ans });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// READ One Answer by ID
ansRouter.get('/:id', async (req, res) => {
  try {
    const ans = await ansModel.findById(req.params.id);
    return res.status(200).json({ msg: "Success", user: ans });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// UPDATE Answer
ansRouter.put('/:id', async (req, res) => {
  try {
    await ansModel.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json({ msg: "Answer updated successfully!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// DELETE Answer
ansRouter.delete('/:id', async (req, res) => {
  try {
    const deleted = await ansModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ msg: "Answer not found" });
    }
    return res.status(200).json({ msg: "Answer deleted successfully!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = ansRouter;
