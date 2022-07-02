const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { createPayment, getPayment } = require("../controllers/PaymentControllers");


router.post("/create-Payment", createPayment);
router.get("/get-Payment", getPayment);

module.exports = router;
