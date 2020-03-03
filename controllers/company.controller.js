// jshint esversion:6
require('dotenv').config({ path: __dirname + './../.env' });

//====================================== requiring modules ===========================================//
// node modules


// custom models
const company = require(`./../models/company.model`);


//================================== creating HTTP handler methods ==================================//
// creating new companyEntry.
exports.createNewCompanyEntry = (req, res) => {
    company.create({
        name: req.params.companyName,
        category: req.params.category ,
        founders: req.params.founders ,
        foundOn: req.params.foundOn ,
        numberOfEmployees: req.params.numberOfEmployees ,
        minWage: req.params.minWage ,
        maxWage: req.params.maxWage ,
        email: req.params.email ,
        phone: req.params.phone ,
        postalAddress: req.params.postalAddress ,
    }).then(() => {
        res.send({msg: `Company's data, stored successfully. `});
    }).catch((err) => {
        console.log(err);
        res.send({msg: `Storing company's data, failed.`});
    });
};

exports.getAllCompanyEntries = (req, res) => {
    company.find({}, (err, results) => {
        if(err){
            res.send({msg: `Failed to retrieve, company entries.`});
        }else{
            res.send({results: results});
        }
    });
};