var express = require('express');
var app = express();

// we start to listen to port 3000
app.set('port', process.env.PORT || 3000);

// using url redirect for static resources (/public)
app.use(express.static(__dirname + '/public'));

// use only test for dev
app.use(function(req,res,next){
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

//require('./handlers/mangoose.js')(app);
require('./handlers/route.js')(app);
require('./handlers/handlebars.js')(app);


//----------------------------------------------------------------------------------
app.listen(app.get('port'), function(){
    console.log('RTChokeServer (' + app.get('env') +
                ') started on port ' + app.get('port'));
});
