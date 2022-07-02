const express = require("express");  

const router = express.Router();
const { body, validationResult } = require("express-validator");
const { createTransporter, getTransporter, updateTransporter, deleteTransporter } = require("../controllers/TransporterControllers");


router.post("/create-transporter", body("email").isEmail(), createTransporter);
router.get("/get-transporter", getTransporter);
router.put("/update-transporter", updateTransporter);
router.delete("/delete-transporter", deleteTransporter);

module.exports = router;
