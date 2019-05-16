let test = require("../Modules/tests"),
    Core = require("../Core/db")
    __   = require("lodash");



exports.getAllTests = (req, res) => findAllTests((result => res.send(result) ));
exports.searchAllTestsOnFrench= (req, res, next) => findAllFrenchTests((result => {
    var nameMnemonicFinance = [];

    result.forEach(test => {

        nameMnemonicFinance.push({
            nameFr : test.name.fr,
            bcode : typeof test.finance[0] !== 'undefined' ? test.finance[0].Bcode : '',
            mnemonic : test.reference.Mnemonic
        })            
    })
    nameMnemonicFinance = __.sortBy(nameMnemonicFinance, [o => o.mnemonic ])
    res.send(nameMnemonicFinance)
}));

/**
 * find all tests
 */

findAllTests = (callback) => Core.findByQuery(test, {} , callback);
findAllFrenchTests =(callback) => Core.findByQuery(test, { "name.fr": { $exists: true } }, callback);

/**
 * find All french tests
 *
exports.searchAllTestsOnFrench= (req, res, next)=>{

    test.findAllTestMatchQuery({ 
        "name.fr": { $exists: true }
    }, (data)=>{

        var nameMnemonicFinance = [];

        data.forEach(test => {

            nameMnemonicFinance.push({
                nameFr : test.name.fr,
                bcode : typeof test.finance[0] !== 'undefined' ? test.finance[0].Bcode : '',
                mnemonic : test.reference.Mnemonic
            })            
        })
        nameMnemonicFinance = __.sortBy(nameMnemonicFinance, [o => o.mnemonic ])
        res.send(nameMnemonicFinance)
    })

    next();
}*/
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