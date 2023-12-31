let playerName = document.querySelector("#playerName");
let btn = document.querySelector("#enterName");
let enterNameDiv = document.querySelector("#enterNameDiv");

let array = ["sten","sax","påse"];
let randomNumber;

let playerPoints = 0;
let computerPoints = 0;

let pP = document.querySelector("#playerPoints");
let cP = document.querySelector("#aiPoints");

let announce = document.querySelector("#pointAnnounce");
let winnerText = document.querySelector("#winnerH1");
let imgDiv = document.querySelector("#imgDiv");
let restartBtn = document.querySelector("#restartBtn");
let form = document.querySelector("form");


restartBtn.addEventListener("click", () => {
  location.reload();
})

// Lägger till namn

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.querySelector("input").value;
  playerName.innerText = `${name}`;
  imgDiv.style.display = "block";
  enterNameDiv.style.display = "none";

});

// If satserna reagerar på vad spelarens och datorn val och även ger ut poäng till respektive

imgDiv.addEventListener("click", (e) => {
  randomNumber = Math.floor(Math.random() * 3);

  if (e.target.id == "sten" && randomNumber === 2 || e.target.id == "sax" && randomNumber === 0 || e.target.id == "påse" && randomNumber === 1) {
    computerPoints++;
    announce.innerText = `Du valde ${e.target.id} och AI valde ${array[randomNumber]} och fick ett poäng`;
    announce.classList.remove("green", "blue");
    announce.classList.add("red");
  }
  else if (e.target.id == "sten" && randomNumber === 1 || e.target.id == "sax" && randomNumber === 2 || e.target.id == "påse" && randomNumber === 0) {
    playerPoints++;
    announce.innerText = `Du valde ${e.target.id} och AI valde ${array[randomNumber]} och du fick ett poäng`;
    announce.classList.remove("red", "blue");
    announce.classList.add("green");

  }
  else if (e.target.id == "sten" && randomNumber === 0 || e.target.id == "sax" && randomNumber === 1 || e.target.id == "påse" && randomNumber === 2) {
    announce.innerText = `Du valde ${e.target.id} och AI valde ${array[randomNumber]} och det blev lika`;
    announce.classList.remove("red", "green");
    announce.classList.add("blue");
  }

  // Visar poängen på sidan

  pP.innerText = playerPoints;
  cP.innerText = computerPoints;

  // If satserna visar vem som har vunnit

  if (playerPoints === 3) {
    winnerText.innerText = `Du vann`;
    restartBtn.style.display = "block";
    imgDiv.style.display = "none";
  } else if (computerPoints === 3) {
    winnerText.innerText = "AI vann";
    restartBtn.style.display = "block";
    imgDiv.style.display = "none";
  }

});