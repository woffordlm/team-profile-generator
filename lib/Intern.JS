const Employee = require ("./Employee")
// constructor function for intern employee
class Intern extends Employee {
    constructor(name, id, email, school ) {
        super(name, id, email)
        this.school = school
       
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "intern"
    }

}
// export to index
module.exports = Intern