// jshint esversion:6
// ================================ creating list application route ===================================//
module.exports = app => {
    const user = require('../controllers/user.controller');

    //========================================== app users routes ============================================//
    app.route('/user_login')
        .post(user.login);

    app.route('/login').get((req, res) =>{
        res.render(__dirname + './../views/login.views.ejs');
    });

    app.route('/individual').get(user.routeToIndividual);
    app.route('/company').get(user.routeToCompany);

};  
