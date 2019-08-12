class AuthentificationUser {

    constructor(user){

        this.user = user;
    }
}

const auth0 = new AuthentificationUser("mohamed");

const returnText =()=>({ "name.fr" : { $exists: true } })

console.log(returnText());