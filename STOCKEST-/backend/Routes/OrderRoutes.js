// backend/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

// Create a new order
router.post('/', OrderController.createOrder);

// Get all orders
router.get('/', OrderController.getAllOrders);

// Get an order by ID
router.get('/:id', OrderController.getOrderById);

// Update an order
router.put('/:id', OrderController.updateOrder);

// Delete an order
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;
