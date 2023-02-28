const form = document.querySelector('#projectForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName').value;
   const lastName = document.querySelector('#lastName').value;
   const projectName = document.querySelector('#projectName').value;
  const projectDescription = document.querySelector('#projectDescription').value;
  const projectDeadline = document.querySelector('#projectDeadline').value;
  const projectBudget = document.querySelector('#projectBudget').value;
  const projectType = document.querySelector('#projectType').value;
  const projectFeatures = document.querySelector('#projectFeatures').value;

  // Store the values in local storage
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('projectName', projectName);
  localStorage.setItem('projectDescription', projectDescription);
  localStorage.setItem('projectDeadline', projectDeadline);
  localStorage.setItem('projectBudget', projectBudget);
  localStorage.setItem('projectType', projectType);
  localStorage.setItem('projectFeatures', projectFeatures);
});

document.getElementById("download-btn").addEventListener("click", function() {
  // Get form data
  console.log("download clicked");
  var formData = new FormData(document.getElementById("projectForm"));
  console.log(FormData);
  // Build CSV file
  var csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "First Name, Last Name, Project Name,Project Description, Deadline,Budget,Project Type,Features\n";
  console.log(csvContent);
  csvContent += 
    formData.get("firstName") + "," +
    formData.get("lastName") + "," +
    formData.get("projectName") + "," + 
    formData.get("projectDescription") + "," +formData.get("projectDeadline") + "," + formData.get("projectBudget") + "," + formData.get("projectType") + "," + formData.get("projectFeatures") + "\n";
  console.log(csvContent);
  // Download CSV file
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  let fileName = formData.get("lastName") + "_" + formData.get("projectName") + ".csv";
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  return false;
});

let mowerX = 0;
let mowerY = 0;
let moveRight = true; // flag to track mower direction

function mowLawn() {
  const canvas = document.getElementById("lawn");
  const ctx = canvas.getContext("2d");

  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw lawn
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // draw mower
  ctx.fillStyle = "red";
  ctx.fillRect(mowerX, mowerY, 50, 50);

  // move mower
  if (moveRight) {
    mowerX += 50;
  } else {
    mowerX -= 50;
  }

  // check if mower reached end of row
  if (mowerX >= canvas.width || mowerX < 0) {
    // move mower down and change direction
    mowerY += 50;
    moveRight = !moveRight;
  }

  // check if mower completed the lawn
  if (mowerY >= canvas.height) {
    clearInterval(intervalId);
  }
}

const startBtn = document.getElementById("start-btn");
let intervalId;

startBtn.addEventListener("click", () => {
  intervalId = setInterval(mowLawn, 100);
});