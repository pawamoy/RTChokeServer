module.exports = function(app){

    var credentials = require('./credentials.js');
    var mongoose = require('mongoose');
    var opts = {
        server: {
            socketOptions: { keepAlive: 1}
        }
    };

    switch (app.get('env')) {
        case 'development':
            mongoose.connect(credentials.mongo.development.connectionString, opts);
        break;
        case 'production':
            mongoose.connect(credentials.mongo.production.connectionString, opts);
        break;
        default:
            throw new Error('Unknown environment:' + app.get('env'));
    }

};