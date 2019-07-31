let userTable = require("../Modules/users"),
    Core = require("../Core/db"),
    User = new Core(userTable);


exports.findAllUsers=(callback)=>User.findByQuery({}, callback);

//exports.findByName = (callback) => Users.findOneField("name", "hmida")