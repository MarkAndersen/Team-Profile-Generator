const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber){
        super()
        this.officeNumber = officeNumber;
    }
    getRandomInt(min, max) {
        min = Math.ceil(1);
        max = Math.floor(100);
        officeNumber = Math.floor(Math.random() * (max - min) + min);
        return officeNumber; //The maximum is exclusive and the minimum is inclusive
      }

    getRole() {
        return Manager;
    }
}
module.exports = Manager;