const express = require('express');
const router = express.Router();
const { handleBfhlPost } = require('../controllers/bfhl.controller');

router.post('/bfhl', handleBfhlPost);

module.exports = router;
