const express = require("express");

const router = express.Router();
const { body, validationResult } = require("express-validator");
const { createLR, getLR, updateLR, deleteLR } = require("../controllers/LRControllers");


router.post("/create-LR", body("email").isEmail(), createLR);
router.get("/get-LR", getLR);
router.put("/update-LR", updateLR);
router.delete("/delete-LR", deleteLR);

module.exports = router;
