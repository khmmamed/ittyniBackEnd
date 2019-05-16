const 	express		= require('express'),
        router  	= express.Router(),
        Tests       = require('./Tests');



/**=========================
 * visitor area
 ===========================*/        

 router.get("/", (req, res)=>res.send("<p><b>Hi from router</b></p>") )

 //get All tests 
 router.get("/tests", Tests.getAllTests);

 //get All tests french
 router.get("/tests/fr", Tests.searchAllTestsOnFrench);


/**=========================
 * Patient area
 ===========================*/ 



/**=========================
 * Professional area
 ===========================*/ 


/**=========================
 * Administrator area
 ===========================*/ 


/**=========================
 * SupAdministrator area
 ===========================*/ 


module.exports =  App =>{
    App.use('/', router)
}
