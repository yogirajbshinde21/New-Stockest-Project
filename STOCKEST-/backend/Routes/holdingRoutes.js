const express = require('express');
const { createOrUpdateHolding, getHoldings, deleteHolding } = require('./controllers/holdingController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createOrUpdateHolding);
router.get('/', auth, getHoldings);
router.delete('/:id', auth, deleteHolding);

module.exports = router;

