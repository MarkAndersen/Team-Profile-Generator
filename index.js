const inquirer = require("inquirer");
const Employee = require("./lib/employee")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")
const Engineer = require("./lib/engineer")


const employee = new Employee();
init = () => {
inquirer
.prompt([
    {
    type: "input",
    message: "What is your name?",
    name: "manager",
    },
    {
    type: "input",
    message: "What is your email?",
    name: "email",
    },
    {
    type: "input",
    message: "What is your Office Number?",
    name: "office",
    },
    {
    type: "confirm",
    message: "would you like to add a team member?",
    name: "member"
    },
    {
    type: "list",
    message: "Which team member would you like to add?",
    name: "addition",
    choices: ["intern", "engineer"],
    }
])
.then ((data) => {
    employee.getName();
    console.log('triggered!')
})
}
init();
// employee.getName();

// initialize with manager inquirer, then add employees

// Dummy HTML to write.

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link
//       rel="stylesheet"
//       href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//       integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//       crossorigin="anonymous"
//     />
//     <title>Document</title>
//   </head>
//   <body>
//     <!-- Title bar-->
//     <div class="container-fluid bg-primary">
//       <h1 class="display-5 text-center text-light">My Team</h1>
//     </div>
//     <main>
//         <!--Cards-->
//       <div class="card-columns">
//         <div
//           class="card text-white bg-info mb-3 col-md-4"
//           style="max-width: 18rem"
//         >
//           <div class="card-header">Name</div>
//           <div class="card-header">Manager</div>
//           <div class="card-body">
//             <p class="card-title">ID:</p>
//             <a class="card-title text-white" href="mailto:">Email</a>
//             <p class="card-title">Office Number:</p>
//           </div>
//         </div>
//         <div
//           class="card text-white bg-info mb-3 col-md-4"
//           style="max-width: 18rem"
//         >
//           <div class="card-header">Name</div>
//           <div class="card-header">Intern</div>
//           <div class="card-body">
//             <p class="card-title">ID:</p>
//             <a class="card-title text-white" href="mailto:">Email</a>
//             <p class="card-title">School:</p>
//           </div>
//         </div>
//         <div
//           class="card text-white bg-info mb-3 col-md-4"
//           style="max-width: 18rem"
//         >
//           <div class="card-header">Name</div>
//           <div class="card-header">Engineer</div>
//           <div class="card-body">
//             <p class="card-title">ID:</p>
//             <a class="card-title text-white" href="mailto:">Email</a>
//             <br>
//             <a class="card-title text-white" href="">Github:</a>
//           </div>
//         </div>
//       </div>
//       <!-- Generate Cards-->
//     </main>
//     <script
//       src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//       integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
//       integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//       integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//       crossorigin="anonymous"
//     ></script>
//   </body>
// </html>