'use strict';

function CoreDB(tableName){
    this.collection = tableName;
}

//CoreDB.prototype.findOneField(field, query){this.findByQuery({field : query})}
//CoreDB.prototype.changeMultiFields
//CoreDB.prototype.changeOneField
//


CoreDB.prototype.findByQuery= function(query, callback){
    
    this.collection.find(query).exec((e, result)=>{

        if(e) throw e;

        if(!result) {

            return "Sorry we don't find any test with this name";
        }

        callback(result);

    })
}


module.exports = CoreDB;