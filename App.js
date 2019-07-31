var  express        = require('express'),
     App            = express(),
     mongoose       = require('mongoose');


const  Port =  8000;

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

const uri = "mongodb://localhost:27017/MPAPP";
//var uri = "mongodb+srv://khmamed:Projetdeweb1@cluster0-lhitx.gcp.mongodb.net/mpapp?retryWrites=true";
mongoose.connect(uri, { useNewUrlParser: true})
        .then(() => { console.log('MongoDB connected...')})
        .catch(err => console.log(err));



//Enable CORS For Extern WebSite
App.use((req, res, next)=> {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

require('./routes')(App);



App.listen(Port);


console.log("API running on Port :"+ Port)
