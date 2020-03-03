//jshint esversion:6
// ===================================== requiring node modules ===================================== //
const mongoose = require('mongoose');

// ==================================== creating database schema=======================================//
const individualSchema = mongoose.Schema({
    name: String,
    fathersName: String,
    mothersName: String,
    numberOfFamilyMembers : Number,
    dateOfBirth: String,
    age: Number,
    nationality : String,
    occupation: String,
    gender: String,
    maritalStatus : String,
    residentialStatus: String,
});
// ==================================== creating schema model =========================================//
module.exports = mongoose.model('individual', individualSchema);