const 	express		= require('express'),
        router  	= express.Router(),
        Tests       = require('./Tests'),
        Users       = require('./User');

/**=========================
 * example
 ===========================*/ 
//router.get("/users/all", Users.listAllOurUsers)
//visitor want to authentifying 
router.post("/login",(req, res)=>{
    console.log(req.body);
    res.send({username : "Hmida"})
});

//add new user
//router.post("/signup", Users.createNewUser);
/**=========================
 * visitor area
 ===========================*/        
 //==> Testing Server work
 router.get("/", (req, res)=>res.send("<p><b>WebSite In construction Please visit us Later !!!!!?</b></p>") )

 //==>get All tests 
 router.get("/tests", Tests.getAllTests);

 //==>get All tests french
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


/**========================================================================
 ***************************************** Api router *********************
 ==========================================================================*/
//==> VISITOR SEARCH FOR TEST OR TESTS SUUGESTION
router.get("/eLab/search/tests/fr", Tests.searchTestFrench);


//export module
module.exports =  App =>{
    App.use('/', router)
}
