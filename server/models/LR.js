const mongoose = require("mongoose");

const LRSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default : Date.now,
    },
    consignerAddress: {
        type: String,
        required: true,
    },
    consigneeAddress: {
        type: String,
        required : true,
    },
    consignerName: {
        type: String,
        required: true,
    },
    consigneeName: {
        type: String,
        required : true,
    },

    LRno : {
        type : String,
    },

    deliveryat : {
        type :String,
    },
    invoiceNo : {
        type :  String,
    },

    email: {
        type: String,
        required: true,
        // unique: true,
    },
    state: String,
});

module.exports = mongoose.model("LR", LRSchema);
