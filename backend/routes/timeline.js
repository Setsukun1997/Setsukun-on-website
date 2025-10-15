const express = require('express');
const router = express.Router();
const Timeline = require('../models/Timeline');

router.get('/', async (req, res) => {
  try {
    const items = await Timeline.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const item = new Timeline(req.body);
    await item.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
