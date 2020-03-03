//jshint esversion:6
// ===================================== requiring node modules ===================================== //
const mongoose = require('mongoose');

// ==================================== creating database schema=======================================//
const companySchema = mongoose.Schema({
    name: String,
    category: String,
    founders: String,
    foundOn: String,
    numberOfEmployees: Number,
    minWage: Number,
    maxWage: Number,
    email: String,
    phone: String,
    postalAddress: String,
});

// ==================================== creating schema model =========================================//
module.exports = mongoose.model('company', companySchema);
