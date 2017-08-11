var mongoose = require('mongoose');
var url = 'mongodb://localhost/test';
var options = {
    server: { poolSize: 100 }
}
var db = mongoose.createConnection(url, options);

db.once('open', function(){
    console.log('MongoDB sonnected successfully');
});

db.on('error', function(err){
    if(err) console.log('db err= ', err);
});

module.exports = db;
