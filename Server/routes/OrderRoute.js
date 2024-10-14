const express = require("express");
const { showOrders, newOrder, order } = require("../controllers/OrderController"); // CommonJS style

const OrderRouter = express.Router();

OrderRouter.get('/show', showOrders);
OrderRouter.post('/newOrder', newOrder);
OrderRouter.get('/order/:id', order);

module.exports = OrderRouter