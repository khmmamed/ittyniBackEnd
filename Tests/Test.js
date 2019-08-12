let userTable = require("../Modules/tests"),
    __        = require('lodash'), 
    Core = require("../Core/db"),
    Test = new Core(userTable);

/***********************
 * Variables
 * *********************/

/**fr name */
const nameFrField = "name.fr";

/** Procedure Mnemonic  */
const mnemonicField = "reference.Mnemonic";

/*** if french name exists ***/
const frenchNameExists ={ [nameFrField]: { $exists: true } };

/***if fr name match query */




/**********************
 * Methods
***********************/


/**
 * find All Procedures
 */
exports.findAllTests = (callback) => Test.findByQuery({} , callback);

/**
 * find French Procedures
 */
exports.findAllFrenchTests =(callback) => Test.findByQuery(frenchNameExists, callback);

/**
 * search fr name or part of name
 */
exports.findByFrNameOrMnemonic = (q, callback) => Test.findByQuery({$or : [{nameFrField : q}, {mnemonicField : q}]}, callback);
