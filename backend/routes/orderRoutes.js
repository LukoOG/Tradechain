const express = require('express');
const router = express.Router();

const orderController = require("../controllers/orderControllers")

// Sample order endpoint
router.post("/create", orderController.create_order)

module.exports = router;
