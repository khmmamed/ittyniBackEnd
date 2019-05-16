
exports.Test = (nameEn) =>  {

    this.nameEn = nameEn;
    
}

Test.proptype.getTestByname = () => CoreFindTestsByName(this.nameEn)