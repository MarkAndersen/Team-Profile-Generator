const Employee = require('./employee');

class Intern extends Employee {
    constructor(school){
        super()
        this.school = school;
    }
    getSchool(){
        inquirer
    .prompt([
        {
            type: "input",
            message: "Where did you attend school?",
            name: "school",
        },
    ])
    .then((data) => {
        const school = `${data.school}`;
        console.log(`${school}`);
        this.getRole();
    })
    };
    getRole(){
        return Intern;
    }

}
module.exports = Intern;