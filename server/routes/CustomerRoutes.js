const express = require("express");
const {
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/CustomerControllers");
const router = express.Router();
const { body, validationResult } = require("express-validator");


router.post("/create-customer", body("email").isEmail(), createCustomer);
router.get("/get-customer", getCustomer);
router.put("/update-customer", updateCustomer);
router.delete("/delete-customer", deleteCustomer);

module.exports = router;
