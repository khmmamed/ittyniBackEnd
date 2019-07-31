let Users = require("./User");

exports.listAllOurUsers = (req, res, next)=> Users.findAllUsers((result=> res.send(result)));