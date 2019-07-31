const 	express		= require('express'),
        router  	= express.Router(),
        Tests       = require('./Tests'),
        Users       = require('./User');

/**=========================
 * example
 ===========================*/ 
router.get("/users/all", Users.listAllOurUsers)

/**=========================
 * visitor area
 ===========================*/        

 router.get("/", (req, res)=>res.send("<p><b>Hi from router</b></p>") )

 //get All tests 
 router.get("/tests", Tests.getAllTests);

 //get All tests french
 router.get("/tests/fr", Tests.searchAllTestsOnFrench);

//VISITOR SEARCH FOR TEST OR TESTS SUUGESTION
router.get("/eLab/search/tests/fr", Tests.searchTestFrench);

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
