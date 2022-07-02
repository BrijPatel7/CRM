const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  payment : {
      type : String,
      required : true,
  },
  state: String,
});

module.exports = mongoose.model("Payment", paymentSchema);
