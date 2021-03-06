const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/list', (req, res) => {
  res.sendFile(path.resolve('./src/trunk/mock/list.json'));
});

router.get('/detail', (req, res) => {
  res.sendFile(path.resolve('./src/trunk/mock/list.json'));
});

module.exports = router;
