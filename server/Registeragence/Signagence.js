const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AgenceinfosSchema = new Schema({
    agencename: {
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
    Ownername : {
        type : String,
        required : true,
    },
    Ownerlastname : {
        type : String,
        required : true,
    },
    City : {
        type : String,
        required : true,
    },
    Ownerphone : {
        type : String,
        required : true,
    },
    Agencephone : {
        type : String,
        required : true,
    },
    Agencebirthday : {
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
    _enabled:Boolean
});

module.exports = mongoose.model("Agenceinfos", AgenceinfosSchema);

