var openButton = document.querySelector("header > button");

openButton.addEventListener("click", openMenu);

function openMenu() {

  var deNav = document.querySelector("nav");

  deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("nav button");

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
  
  var deMenu = document.querySelector("nav")
  
  deMenu.classList.remove("toonMenu")
}