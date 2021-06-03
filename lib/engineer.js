const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github){
        super()
        this.github = github;
    }
    getGithub(){
        inquirer
    .prompt([
        {
            type: "input",
            message: "What is your Github account??",
            name: "github",
        },
    ])
    .then((data) => {
        const github = `${data.github}`;
        console.log(`${github}`);
        this.getRole();
    })
    };
    getRole() {
        return Engineer
    }
}
module.exports = Engineer;