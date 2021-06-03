const inquirer = require("inquirer");
// const Engineer = require("./engineer")
// const Intern = require("./intern")
// const Manager = require("./manager")

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

getName() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
    ])
    .then((data) => {
        const name = `${data.name}`;
        console.log(`${name}`);
        this.getID();
    })
};
getID() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your ID?",
            name: "id",
        },
    ])
    .then((data) => {
        const id = `${data.id}`;
        console.log(`${id}`);
        this.getEmail();
    })
};
getEmail() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your Email address?",
            name: "email",
        },
    ])
    .then((data) => {
        const email = `${data.email}`;
        console.log(`${email}`);
        this.getRole();
    })
};
getRole() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "what is your role?",
            name: "role",
            choices: ['manager', 'engineer', 'intern'],
        }
    ])
    .then(() => {
       
    return Employee;
})
};
};

module.exports = Employee;