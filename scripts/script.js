var openButton = document.querySelector("header > button"); /* Selecteert het attribuut in de html. Met > ga je direct naar de attribuut. */

openButton.addEventListener("click", openMenu); /* addEventListerner wil je iets mee laten luisteren en dat laat uitvoeren bijv een functie */

function openMenu() { 
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}
/* Bij de nav zeg je nu dat hij een class "classList" moet toevoegen "add" door de functie */



var sluitButton = document.querySelector("nav button");

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
  var deMenu = document.querySelector("nav");
  deMenu.classList.remove("toonMenu");
}
/* Bij de nav zeg je nu dat hij een class moet verwijderen "remove" door de functie */