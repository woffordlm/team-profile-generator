const Employee = require("./lib/Employee");
const Manager = require ("./lib/Manager")
const Engineer = require ("./lib/Engineer")
const Intern = require('./lib/Intern')
const inquirer = require("inquirer")
const generateHTML = require("./src/html-template")
teamMemberCounter = 0


const promptUser = () => {
    teamList = []
    console.log(teamList)
  
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team managers name? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'id',
            message: 'What is the team managers employee ID? (Required)',
            default: teamList.length
            
          },
          { 
            type: 'input',
            name: 'email',
            message: 'What is the team managers e-mail address? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your name!');
                return false;
              }
            }
          },{
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers office number? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your name!');
                return false;
              }
            }
          },
          
          {
            type: 'checkbox',
            name: 'nextEmployee',
            message: 'Would you like to add an engineer or intern or are you finished building your team?',
            choices: ['engineer', 'intern', 'finished building team']
          }
    ])
    .then(managerData => {
      const {managerName, id, email, officeNumber, nextEmployee} = managerData
      const manager = new Manager(managerName, id, email, officeNumber) 
      teamList.push(manager);
      console.log('teamList:', teamList)
      console.log(nextEmployee)
      if (nextEmployee[0] === "engineer") {
        engineerQuestionsPrompt(teamList)
        teamMemberCounter++
      } else if (nextEmployee[0] === "intern") {
        internQuestionsPrompt(teamList)
        teamMemberCounter++
      } else {
        return teamList
      }
    })
}
const engineerQuestionsPrompt = (teamList) =>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'What is the engineers name?',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter the ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'What is the engineers employee ID? (Required)',
      default: teamList.length
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What is the engineers email? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter the ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'What is the engineers github username? (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter the ID!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'nextEmployee',
      message: 'Would you like to add an engineer or intern or are you finished building your team?',
      choices: ['engineer', 'intern', 'finished building team']
    }
  ])
  .then(engineerData => {
    const {nextEmployee, engineerGithub, engineerEmail, engineerId, engineerName } = engineerData
    const engineer = new Engineer ( engineerName, engineerId, engineerEmail, engineerGithub)
    teamList.push(engineer)
    console.log('teamList:', teamList)
    if (nextEmployee[0] === "engineer") {
      engineerQuestionsPrompt(teamList)
      teamMemberCounter++

    } else if (nextEmployee[0] === "intern") {
      internQuestionsPrompt(teamList)
      teamMemberCounter++
    } else {
      return teamList
    }
  })
}
const internQuestionsPrompt = (teamList) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'What is the interns name?',
      validate: internNameInput => {
        if (internNameInput) {
          return true;
        } else {
          console.log('Please enter a name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internId',
      message: 'What is the interns employee ID? (Required)',
      default: teamList.length
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'What is the interns email? (Required)',
      validate: internEmailInput => {
        if (internEmailInput) {
          return true;
        } else {
          console.log('Please enter the email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'What is the interns school? (Required)',
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log('Please enter the school!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'nextEmployee',
      message: 'Would you like to add an engineer or intern or are you finished building your team?',
      choices: ['engineer', 'intern', 'finished building team']
    }
  ])
  .then(internData => {
    const {internName, internId, internEmail, internSchool, nextEmployee}= internData
    console.log('internData:', internData)
    const intern = new Intern (internName, internId, internEmail, internSchool )
    teamList.push(intern);
    console.log('teamList:', teamList)
    if ( nextEmployee[0]=== "engineer") {
      engineerQuestionsPrompt(teamList)
      teamMemberCounter++
    } else if (nextEmployee[0] === "intern") {
      internQuestionsPrompt(teamList)
      teamMemberCounter++
    } else {
      return teamList
    }

})
}

promptUser()
  
//   .then((teamListData) => {
    
//     return generateHTML(teamListData);
//   })
// }





