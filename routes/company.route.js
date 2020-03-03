// jshint esversion:6
// ================================ creating list application route ===================================//
module.exports = app => {
    const company = require('../controllers/company.controller');

    //========================================== app users routes ============================================//
    app.route('/createCompanyEntry/:companyName-:category-:founders-:foundOn-:numberOfEmployees-:minWage-:maxWage-:email-:phone-:postalAddress')
        .post(company.createNewCompanyEntry);


    app.route(`/getCompanyEntries`).post(company.getAllCompanyEntries);

};
