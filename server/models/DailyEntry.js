const mongoose = require("mongoose");

const dailyentrySchema = new mongoose.Schema({
  cname: {
    type: String,
    required: true,
  },

  tname: {
    type: String,
    required: true,
  },

  LRno: {
      type : String,
      required : true,
  },

  invoice : {
      type : String,
      required : true,
  },

  vehicleno : {
      type : String,
  },
  driverno : {
    type : String,
  },

  Advance : {
    type : String,
  },

  Balance : {
    type : String,
  },

  Loading : {
    type : String,
  },
   unloading : {
    type : String,
  },

  detension : {
    type : String,
  },

  particular : {
    type : String,
  },    

  Qty : {
      type : Number,
  },

  unit : {
    type : String,
  },

  rate : {
    type : Number,
  },

  from : {
    type : String,
  },

  to : {
    type : String,
  },


  remarks : {
    type : String,
  },
 
  state: String,
});

module.exports = mongoose.model("DailyEntry", dailyentrySchema);
