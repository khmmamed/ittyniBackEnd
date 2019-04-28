var  express        = require('express'),
     App            = express(),
     mongoose       = require('mongoose');


const  Port =  8000;

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

const uri = "mongodb://localhost:27017/MPAPP";




require('./routes')(App);



App.listen(Port);


console.log("API running on Port :"+ Port)
