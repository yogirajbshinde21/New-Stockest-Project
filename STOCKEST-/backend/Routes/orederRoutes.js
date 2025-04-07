const express = require('express');
const { createOrder, getOrders, updateOrder, deleteOrder } = require('../controllers/orderController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createOrder);
router.get('/', auth, getOrders);
router.put('/:id', auth, updateOrder);
router.delete('/:id', auth, deleteOrder);

module.exports = router;
