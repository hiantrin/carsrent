const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegisterSchema = new Schema({
    username: {
        type : String,
        required : true,
        min : 5,
        max : 30,
    },
    email : {
        type : String,
        required : true,
        min : 6,
        max : 255,
    },
    password : {
        type : String,
        required : true,
        min : 8,
        max : 50, 
    },    
    Gender: {
        type : String,
        required : true,
    },
    Name : {
        type : String,
        required : true,
    },
    Lastname : {
        type : String,
        required : true,
    },
    City : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        required : true,
    },
    Birthday : {
        type : String,
        required : true,
    },
    id : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
});

module.exports = mongoose.model("Register", RegisterSchema);
