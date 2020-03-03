// jshint esversion:8
require('dotenv').config({ path: __dirname + './../.env' });

//====================================== requiring modules ===========================================//
// node modules

// custom models
const user = require('../models/company.model').user;
const individual = require('../models/individual.model');

let storedPath, path, absolutePath;

//================================== creating HTTP handler methods ==================================//

// create new election
exports.createNewIndividualEntry = (req, res) => {
    individual.create({
        name: req.params.individualName||null,
        fathersName: req.params.fathersName||null,
        mothersName: req.params.mothersName||null,
        numberOfFamilyMembers : req.params.numberOfFamilyMembers||null,
        dateOfBirth: req.params.dateOfBirth||null,
        age: req.params.age||null,
        nationality : req.params.nationality||null,
        occupation: req.params.occupation||null,
        gender: req.params.gender||null,
        maritalStatus : req.params.maritalStatus||null,
        residentialStatus: req.params.residentialStatus||null,
    }).then(() => {
        res.send({msg: `Individual's data, stored successfully.`});
    }).catch((err) => {
        res.send({msg: `Storing individual's data, failed.`});
    });            
};

// get current vote results
exports.getAllIndividualEntries = (req, res) => {
    election.find({}, (err, results) => {
        if(err){
            res.send({msg: `Can't get election results. Please try again in a minute.`});
        }else{
            res.send({results: results});
        }
    });
};
