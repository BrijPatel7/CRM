const Transporter = require("../models/Transporter");
const { body, validationResult } = require("express-validator");

exports.createTransporter = (req, res) => {
  const data = req.body;
  
//   validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  //   function
  Transporter.create(data, (err, doc) => {
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

exports.getTransporter = (req, res) => {
  Transporter.find({}, (err, docs) => {
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

exports.updateTransporter = (req, res) => {
  const { id } = req.body;

  Transporter.updateOne({ _id: id }, { $set: req.body }, (err, doc) => {
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

exports.deleteTransporter = (req, res) => {
  const { id } = req.body;

  Transporter.deleteOne({ _id: id }, (err) => {
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
