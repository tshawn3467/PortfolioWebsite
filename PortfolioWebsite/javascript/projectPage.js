//Initially set variables
let webpageSection = document.getElementById("websiteContainer")
let javascriptSection = document.getElementById("javascriptContainer");
let javascriptProjectPage = document.getElementById("javascriptProjects");
let javascriptButton = document.getElementById("javascriptButton");
let javascriptButtonText = document.getElementById("javascriptButtonText");
let returnButton = document.getElementById("returnButtonText");
let rockPaperScissors = document.getElementById("rockPaperScissors");
let sleepDebtCalculator = document.getElementById("sleepDebtCalculator");
let mealMaker = document.getElementById("mealMaker");
let whaleTalk = document.getElementById("whaleTalk");
let mysteriousOrganisms = document.getElementById("mysteriousOrganisms");
let mixedMessages = document.getElementById("mixedMessages");

//Javascript button effects
function OverJsButton(button) {
    button.target.style.fontSize = "2rem";
    button.target.style.cursor = "pointer";
}

function OffJsButton(button) {
    button.target.style.fontSize = "1.5rem";
}

javascriptButton.addEventListener("mouseover", OverJsButton);
javascriptButton.addEventListener("mouseleave", OffJsButton);

//Javascript button action
function revealPage() {
    javascriptProjectPage.style.display = "flex";
    webpageSection.style.display = "none";
    javascriptSection.style.display = "none";
}

function returnPage() {
    javascriptProjectPage.style.display = "none";
    webpageSection.style.display = "flex";
    javascriptSection.style.display = "flex";
}

javascriptButton.addEventListener("click", revealPage);
returnButton.addEventListener("click", returnPage);

//Javascript project buttons
function displayCode(codeText) {
  document.getElementById("jsCodeText").innerHTML = codeText;
}


rockPaperScissors.addEventListener("click", () => {displayCode(rockPaperScissorsText)});
sleepDebtCalculator.addEventListener("click", () => {displayCode(sleepDebtCalculatorText)});
mealMaker.addEventListener("click", () => {displayCode(mealMakerText)});
whaleTalk.addEventListener("click", () => {displayCode(whaleTalkText)});
mysteriousOrganisms.addEventListener("click", () => {displayCode(mysteriousOrganismsText)});
mixedMessages.addEventListener("click", () => {displayCode(mixedMessagesText)});


//declaring variables so script will run
//delete as you go

let mealMakerText = "";
let whaleTalkText = "";
let mysteriousOrganismsText = "";
let mixedMessagesText = "";

//Javascript programs into displayable HTML
//Rock Paper Scissors
let rockPaperScissorsText = 
"<p>function choose(play) {<p>" +
"<p class='indentOne'>let roll = Math.floor(Math.random() * 3);</p>" +
"<p class='indentOne'>switch (roll) {</p>" +
"<p class='indentTwo'>case 0:<p>" +
"<p class='indentThree'>play = 'rock';</p>" +
"<p class='indentThree'>break;</p>" +
"<p class='indentTwo'>case 1:</p>" +
"<p class='indentThree'>play = 'paper';</p>" +
"<p class='indentThree'>break;</p>" +
"<p class='indentTwo'>case 2:</p>" +
"<p class='indentThree'>play = 'scissors';</p>" +
"<p class='indentThree'>break;</p>" +
"<p class='indentTwo'>default:</p>" +
"<p class='indentThree'>console.log('Invalid roll');</p>" +
"<p class='indentThree'>break;</p>" +
"<p class='indentOne'>}</p>" +
"<p class='indentOne'>return play;</p>" +
"<p>}</p>" +
"<p>function winner(user, comp) {</p>" +
"<p class='indentTwo'>let win;</p>" +
"<p class='indentTwo'>if (user === 'rock' && comp === 'rock') {</p>" +
"<p class='indentThree'>return (win = 'TIE');</p>" +
"<p class='indentTwo'>} else if (user === 'rock' && comp === 'paper') {</p>" +
"<p class='indentThree'>return (win = 'COMPUTER WINS');</p>" +
"<p class='indentTwo'>} else if (user === 'rock' && comp === 'scissors') {</p>" +
"<p class='indentThree'>return (win = 'YOU WIN');</p>" +
"<p class='indentTwo'>} else if (user === 'paper' && comp === 'rock') {</p>" +
"<p class='indentThree'>return (win = 'YOU WIN');</p>" +
"<p class='indentTwo'>} else if (user === 'paper' && comp === 'paper') {</p>" +
"<p class='indentThree'>return (win = 'TIE');</p>" +
"<p class='indentTwo'>} else if (user === 'paper' && comp === 'scissors') {</p>" +
"<p class='indentThree'>return (win = 'COMPUTER WINS');</p>" +
"<p class='indentTwo'>} else if (user === 'scissors' && comp === 'rock') {</p>" +
"<p class='indentThree'>return (win = 'COMPUTER WINS');</p>" +
"<p class='indentTwo'>} else if (user === 'scissors' && comp === 'paper') {</p>" +
"<p class='indentThree'>return (win = 'YOU WIN');</p>" +
"<p class='indentTwo'>} else if (user === 'scissors' && comp === 'scissors') {</p>" +
"<p class='indentThree'>return (win = 'TIE');</p>" +
"<p class='indentTwo'>}</p>" +
"<p>}</p>" +
"<p>let user = choose();</p>" +
"<p>let comp = choose();</p>" +
"<p>let victor = winner(user, comp);</p>" +
"<p>console.log(`You throw ${user} and computer throws ${comp}.`);</p>" +
"<p>console.log(victor);</p>";

//Sleep debt calculator
let sleepDebtCalculatorText = "";