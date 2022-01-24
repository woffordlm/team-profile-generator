const { prompt } = require("inquirer");
const inquirer = require("inquirer")
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
    .then(mangagerData => {
      console.log('mangagerData:', mangagerData)
      teamList.push(mangagerData);
      console.log('teamList:', teamList)
      if (teamList[0].nextEmployee[0] === "engineer") {
        engineerQuestionsPrompt(teamList)
        teamMemberCounter++
      } else if (teamList[0].nextEmployee[0] === "intern") {
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
      name: 'engineersId',
      message: 'What is the engineers employee ID? (Required)',
      default: teamList.length
    },
    {
      type: 'input',
      name: 'engineersEmail',
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
      name: 'engineersGithub',
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
    console.log('engineerData:', engineerData)
    teamList.push(engineerData)
    console.log('teamList:', teamList)
    if (teamList[teamMemberCounter].nextEmployee[0] === "engineer") {
      engineerQuestionsPrompt(teamList)
      teamMemberCounter++

    } else if (teamList[teamMemberCounter].nextEmployee[0] === "intern") {
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
      name: 'internsId',
      message: 'What is the interns employee ID? (Required)',
      default: teamList.length
    },
    {
      type: 'input',
      name: 'internEmailInput',
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
    teamList.push(internData);
    console.log('teamList:', teamList)
    if (teamList[teamMemberCounter].nextEmployee[0] === "engineer") {
      engineerQuestionsPrompt(teamList)
      teamMemberCounter++
    } else if (teamList[teamMemberCounter].nextEmployee[0] === "intern") {
      internQuestionsPrompt(teamList)
      teamMemberCounter++
    } else {
      return teamList
    }

})
}

promptUser(); 




