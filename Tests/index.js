let Test = require("./Test"),
    __   = require('lodash');


/**
 * send all tests
 */
exports.getAllTests = (req, res) => Test.findAllTests((result => res.send(result) ));

/**
 * send all French tests
 */
exports.searchAllTestsOnFrench= (req, res, next) => Test.findAllFrenchTests((result => {
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
 * send requested french or mnemonic Procedure
 */
exports.searchTestFrench  = (req, res, next)=>{

    var q = req.query.q;

    q = new RegExp(q, 'ig');
  
    
    Test.findByFrNameOrMnemonic(q, (result)=>{

        var nameMnemonicFinance = [];

        result.forEach(test => {

            nameMnemonicFinance.push({
                nameFr : test.name.fr,
                bcode : typeof test.finance[0] !== 'undefined' ? test.finance[0].Bcode : '',
                mnemonic : test.reference.Mnemonic
            })            
        })

        res.send(nameMnemonicFinance)
    })
    
}