// jshint esversion:6
require('dotenv').config({ path: __dirname + './../.env' });

//====================================== requiring modules ===========================================//
// node modules

// custom models
const individual = require('../models/individual.model');
const company = require('../models/company.model');


//================================== creating HTTP handler methods ==================================//
// user authentication and logging
exports.login = (req, res) => {   
    if(req.body.password != null && req.body.email_address != null){
        if(req.body.email_address == `sedem.amekpewu.3@gmail.com` && req.body.password == `qwerty`){
            res.redirect('/individual');
        } else {
            res.redirect('/login');
        }
    }else{
        res.send({msg: 'Password and/or email address cannot be null.'});
    }
};

exports.routeToIndividual = (req, res) => {
    individual.find({}, (err, results) => {
        if(err){
            res.send({msg: `Can't get election results. Please try again in a minute.`});
        }else{
            // res.send({results: electionResults});
        res.render(__dirname + './../views/individual.views.ejs', {results: results});
    }
});
};

exports.routeToCompany =  (req, res) => {
    company.find({}, (err, results) => {
        if(err){
            res.send({msg: `Can't get election results. Please try again in a minute.`});
        }else{
            // res.send({results: electionResults});
    res.render(__dirname + './../views/company.views.ejs', {results: results});
    }
});
};