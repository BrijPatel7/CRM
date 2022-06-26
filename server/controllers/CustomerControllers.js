const Customer = require("../models/Customer");
const { body, validationResult } = require("express-validator");

exports.createCustomer = (req, res) => {
  const data = req.body;
  
//   validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  //   function
  Customer.create(data, (err, doc) => {
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

exports.getCustomer = (req, res) => {
  Customer.find({}, (err, docs) => {
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

exports.updateCustomer = (req, res) => {
  const { id } = req.body;

  Customer.updateOne({ _id: id }, { $set: req.body }, (err, doc) => {
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

exports.deleteCustomer = (req, res) => {
  const { id } = req.body;

  Customer.deleteOne({ _id: id }, (err) => {
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
