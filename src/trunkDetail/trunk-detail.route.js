const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/list', (req, res) => {
  res.sendFile(path.resolve('./src/trunkDetail/mock/detail.json'));
});

module.exports = router;
