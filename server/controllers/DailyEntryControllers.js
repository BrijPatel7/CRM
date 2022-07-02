const DailyEntry = require("../models/DailyEntry");
const { body, validationResult } = require("express-validator");

exports.createDailyEntry = (req, res) => {
  const data = req.body;
  
//   validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  //   function
  DailyEntry.create(data, (err, doc) => {
    //   error check
    if (err) {
      console.log(err);
      return res.json({
        success: false,
        error: err.message,
      });
    }

    // response
    return res.json({
      success: true,
      id: doc._id,
    });
  });
};

exports.getDailyEntry = (req, res) => {
    DailyEntry.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      return res.json({
        success: false,
        error: err.message,
      });
    }

    return res.json({
      success: true,
      data: docs,
    });
  });
};

exports.updateDailyEntry = (req, res) => {
  const { id } = req.body;

  DailyEntry.updateOne({ _id: id }, { $set: req.body }, (err, doc) => {
    if (err) {
      console.log(err);
      return res.json({
        success: false,
        error: err.message,
      });
    }

    return res.json({
      success: true,
      id: doc._id,
    });
  });
};

exports.deleteDailyEntry = (req, res) => {
  const { id } = req.body;

  DailyEntry.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      return res.json({
        success: false,
        error: err.message,
      });
    }

    return res.json({
      success: true,
      id: id,
    });
  });
};
