const LR = require("../models/LR");
const { body, validationResult } = require("express-validator");

exports.createLR = (req, res) => {
  const data = req.body;
  
//   validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  //   function
  LR.create(data, (err, doc) => {
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

exports.getLR = (req, res) => {
  LR.find({}, (err, docs) => {
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

exports.updateLR = (req, res) => {
  const { id } = req.body;

  LR.updateOne({ _id: id }, { $set: req.body }, (err, doc) => {
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

exports.deleteLR = (req, res) => {
  const { id } = req.body;

  LR.deleteOne({ _id: id }, (err) => {
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
