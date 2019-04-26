let test = require("../Modules/tests");


exports.getAllTests = (req, res) => findAllTests((result => res.send(result) ));




/**
 * find all tests
 */

findAllTests = (callback) => searchInTestsDb({}, callback);


/**
 * 
 * @param query , cb 
 */
searchInTestsDb = (query, cb) =>{

    test.find(query).exec((e, result)=>{

        if(e) throw e;

        if(!result) {

            return "Sorry we don't find any test with this name";
        }

         cb(result);

    })
}