const mongoose = require("mongoose"); 

const transporterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
  },
  gst:{
      type:String,
  },
  area :{
      type : String,
  },
  vsize:{
      type: Number,
  },
  city:{
      type: String,
      required:true,
  },
  pincode:{
      type: Number,
      required : true,
  },
  state:{
      type: String,
      required : true,
  },
  
});

module.exports = mongoose.model("Transporter", transporterSchema);
