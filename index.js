const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const generateHTML = require("./src/html-template");
const writeFile = require("./utils/generateHtmlPage")
teamMemberCounter = 0;
var teamList = [];

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team managers name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the team managers employee ID? (Required)",
        default: teamList.length,
      },
      {
        type: "input",
        name: "email",
        message: "What is the team managers e-mail address? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team managers office number? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
    ])
    .then((managerData) => {
      console.log("managerData:", managerData);

      const { managerName, id, email, officeNumber, nextEmployee } =
        managerData;
      const manager = new Manager(managerName, id, email, officeNumber);
      teamList.push(manager);
    });
};
const employeeQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What type of employee would you like to add to the team? ",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employees name?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee ID? (Required)",
        default: teamList.length,
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee email? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeGithub",
        message: "What is the engineers github username? (Required)",
        when: (input) => input.role === "Engineer",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter the github username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: true,
      },
    ])
    .then((empData) => {
      const {
        school,
        employeeGithub,
        email,
        id,
        name,
        role,
        confirmAddEmployee,
      } = empData;
      if (role === "Engineer") {
        const employee = new Engineer(name, id, email, employeeGithub);
        teamList.push(employee);
        teamMemberCounter++;
      } else if (role === "Intern") {
        const employee = new Intern(name, id, email, school);
        teamList.push(employee);
        teamMemberCounter++;
      } else {
        return teamList;
      }

      if (confirmAddEmployee === true) {
        return employeeQuestions(teamList);
      } else {
        return teamList;
      }
    });
};

promptUser()
  .then(employeeQuestions)
  .then((employeeData) => {
    return generateHTML(employeeData);
  })
  .then(htmlData => {
    return writeFile(htmlData);
  }
  )
