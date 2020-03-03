// jshint esversion:6
const dotenv = require('dotenv');
require('dotenv').config({ path: '../'});

module.exports = {
    url: `mongodb+srv://SedemQuame:Qwe3Mf6GCKYgPJBk@censusa-gj4bq.mongodb.net/test?retryWrites=true&w=majority`,
    options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }
};