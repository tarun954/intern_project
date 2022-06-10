const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    ratings:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Players",playerSchema);