const nameArray = [];

function addName() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();
  nameArray.push(name);
  displayNames();
  nameInput.value = "";
}

function displayNames() {
  const nameList = document.getElementById("nameList");
  nameList.innerHTML = "";

  for (let i = 0; i < nameArray.length; i++) {
    const name = nameArray[i];

    const li = document.createElement("li");

    li.className = "list-group-item";

    const span = document.createElement("span");

    span.textContent = name;

    li.appendChild(span);

    nameList.appendChild(li);
  }
}

function pickRandomName() {
  const randomNameDiv = document.getElementById("randomName");
  randomNameDiv.textContent = "";

  const randomNumber = Math.floor(Math.random() * nameArray.length);
  const randomName = nameArray[randomNumber];

  randomNameDiv.textContent = randomName;

  nameArray.splice(randomNumber, 1);

  displayNames();
}

document.getElem;
document
  .getElementById("pickRandomBtn")
  .addEventListener("click", pickRandomName);

var input = document.getElementById("nameInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addNameBtn").click();
  }
});
