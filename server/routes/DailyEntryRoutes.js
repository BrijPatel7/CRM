const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { createDailyEntry, getDailyEntry, updateDailyEntry, deleteDailyEntry } = require("../controllers/DailyEntryControllers");


router.post("/create-DailyEntry", createDailyEntry);
router.get("/get-DailyEntry", getDailyEntry);
router.put("/update-DailyEntry", updateDailyEntry);
router.delete("/delete-DailyEntry", deleteDailyEntry);

module.exports = router;
