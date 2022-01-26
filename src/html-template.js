const Manager = require("../lib/Manager");
function generateManagerCard() {
  return ``;
}
function generateInternCard() {
  return ``;
}
function generateEngineerCard() {
  return ``;
}
function generatePage() {
  return ``;
}
function generateHTML(teamListData) {
  pageArray = [];

  console.log("teamListData:", teamListData);
  for (let i = 0; i < teamListData.length; i++) {
    //    const element = teamListData[i];
    const employee = teamListData[i];
    console.log("employee:", employee);
    const role = employee.getRole();
    console.log("role:", role);

    if (role === "Manager") {
      const managerCard = generateManagerCard(employee);
      pageArray.push(managerCard);
    } else if (role === "Engineer") {
      const engineerCard = generateEngineerCard(employee);
      pageArray.push(engineerCard);
    } else if (role === "Intern") {
      const internCard = generateInternCard(employee);
      pageArray.push(internCard);
    } else {
      console.log("getRole error");
    }
  }
}
module.exports = generateHTML;
