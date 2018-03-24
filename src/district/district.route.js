const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/list', (req, res) => {
  res.sendFile(path.resolve('./src/district/mock/list.json'));
});

module.exports = router;
