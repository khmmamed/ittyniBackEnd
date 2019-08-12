let Users = require("./User");

/**
 * SupAdmin list user table
 *  @returns array data
 */
exports.supAdminListUsers = (req, res, next)=> Users.findAllUsers((result=> res.send(result)));