const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({
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

const Rental = mongoose.model("Rental", RentalSchema);

module.exports = Rental;
