// jshint esversion:6
// ================================ creating list application route ===================================//
module.exports = app => {
    const individual = require('../controllers/individual.controller');

    //========================================== CRUD routes ============================================//
    // delete current election
    app.route(`/createIndividualEntry/:individualName-:fathersName-:mothersName-:numberOfFamilyMembers-:dateOfBirth-:age-:nationality-:occupation-:gender-:maritalStatus-:residentialStatus`).post(individual.createNewIndividualEntry);
    // sample url to request data from.
    // localhost:8080/createIndividualEntry/Sedem-Godwin%20Amekpewu-Patience%20Dugbenu-16-november-20-ghanaian-engineer-male-single-4 bedroom house

    // app.route('/createIndividualEntry/:individualName-:fathersName-:mothersName-:numberOfFamilyMembers-:dateOfBirth-:age-:nationality-:occupation-:gender-:maritalStatus-:residentialStatus').post(individual.createNewIndividualEntry);

    // // delete all the current election
    // app.route('/remove_all_elections').get(individual.removeAllElection);

    // // updating election results
    // app.route('/update_election').post(individual.updateResults);
    // Sedem-Godwin-Patience Dugbenu-5-november,1999-20-Ghanaian-Male-Single-Madina?individualName
};
