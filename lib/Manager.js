const Employee = require ("./Employee")
// constructor function for manager employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
      
    }
    getRole() {
        return "Manager"
    }
}
// export to index
module.exports = Manager