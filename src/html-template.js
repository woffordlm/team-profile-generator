function generateManagerCard(data) {
    const {
        name,
        id,
        email,
        officeNUmber
    } = data
    return `
    <div class="col-3 ">
                  <div class="card-header bg-info">
                      <h2>Manager
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                              class="bi bi-clipboard" viewBox="0 0 16 16">
                              <path
                                  d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                              <path
                                  d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                          </svg>
                      </h2>
                      <div class="card-body">
  
                          <div class="idElement">
                            <h2>${name}</h2>
                            <h2>ID:${id}</h2>
                          </div>
                          <div class="managerEmail">
                              <h2>email:${email}</h2>
                          </div>
                          <div class="managerOfficeNumber">
                              <h2>Office Number: ${officeNUmber}</h2>
                          </div>
                      </div>
                  </div>
              </div>
    `;
}

function generateEngineerCard(employee) {
    const {
        name,
        id,
        email,
        github
    } = employee
    return `
    <div class="col-3 ">
    <div class="card-header bg-info">
        <h2> Engineer
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-eyeglasses" viewBox="0 0 16 16">
                <path
                    d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
            </svg>
        </h2>
        <div class="card-body">
            <div class="idElement">
                <h2>:${name}</h2>
                <h2>ID:${id}</h2>
            </div>
            <div class="engineer-email">
                <h2>email:${email}</h2>
            </div>
            <div class="engineer-github">
                <h2>Github:${github}</h2>
            </div>
        </div>
    </div>
</div>
`
}
function generateInternCard (internData) {
    const {name, email, id, school} = internData
    return `
    <div class="col-3 ">
                <div class="card-header bg-info">
                    <h2>Intern
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-pencil" viewBox="0 0 16 16">
                            <path
                                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                    </h2>
                    <div class="card-body">
                        <div class="idElement">
                            <h2>${name}</h2>
                            <h2>ID:${id}</h2>
                        </div>
                        <div class="internEmail">
                            <h2>email:${email}</h2>
                        </div>
                        <div class="intern-school">
                            <h2>School:${school}</h2>
                        </div>
                    </div>
                </div>
            </div>
    `


}
function generatePage (pageArray) {
    let totalCards = pageArray.join('')
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <header class="d-flex justify-content-center">
        <h1>My Team</h1>
    </header>
    <main>
        <div class=" row d-flex justify-content-around">
        ${totalCards}
        </div>
    </main>
</body>
<script src="./index.js"></script>

</html>

    
    `
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

        if (role === "manager") {
            const managerCard = generateManagerCard(employee);
            pageArray.push(managerCard);
        } else if (role === "Engineer") {
            const engineerCard = generateEngineerCard(employee);
            pageArray.push(engineerCard);
        } else if (role === "intern") {
            console.log(employee)
              const internCard = generateInternCard(employee);
              pageArray.push(internCard);
        } else {
              console.log("getRole error");
        }
    }
    return generatePage(pageArray)
    
}
module.exports = generateHTML;
