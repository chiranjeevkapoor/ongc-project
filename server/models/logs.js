const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"must provide name"],
        trim:true,
        maxlength: [30, "name cannot be longer than 30 characters"]
    },
    // logintime: {
    //     type: time,
    //     required:[true,"login tiime required"],

    // }

})

module.exports = mongoose.model("logs",logSchema)
