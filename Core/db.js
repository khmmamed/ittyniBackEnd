'use strict';

const CoreDB = {

}

CoreDB.findByQuery= function(table, query, callback){
    
    table.find(query).exec((e, result)=>{

        if(e) throw e;

        if(!result) {

            return "Sorry we don't find any test with this name";
        }

        callback(result);

    })
}

module.exports = CoreDB;