const 	express		= require('express'),
        router  	= express.Router(),
        Tests       = require('./Tests');



/**=========================
 * visitor area
 ===========================*/        

 router.get("/", (req, res)=>res.send("<p><b>Hi from router</b></p>") )

 //get All tests 
 router.get("/tests", Tests.getAllTests);










module.exports =  App =>{
    App.use('/', router)
}