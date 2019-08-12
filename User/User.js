let userTable = require("../Modules/users"),
    Core = require("../Core/db"),
    User = new Core(userTable);


/***********************
 * Variables
 * *********************/


/**********************
 * Methods
***********************/
//create new user
    //get email , password and NotOrPro
    //test if email is exist
    //insert data
    //return Success Or Fail

exports.createNewUser=()=>{};

//==> find all in user table return all fields
exports.findAllUsers=(callback)=>User.findByQuery({}, callback);

//ValiderVisitorInput()
//checkIsUniqEmail()
//insertRecord()
