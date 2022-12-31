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
let jsCodeOutput = document.getElementById("jsCodeOutput");


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


//Javascript projects button and return button action
function revealPage() {
    javascriptProjectPage.style.display = "flex";
    webpageSection.style.display = "none";
    javascriptSection.style.display = "none";
}

function returnPage() {
    javascriptProjectPage.style.display = "none";
    webpageSection.style.display = "flex";
    javascriptSection.style.display = "flex";
    document.getElementById("jsCodeText").innerHTML = "<p id='initialText'>SELECT A PROGRAM ON THE LEFT TO VIEW THE CODE HERE</p>";
    document.getElementById("jsCodeOutput").innerHTML = "<p id='initialText'>VIEW OUTPUT OF SELECTED PROGRAM HERE</p>";
}

javascriptButton.addEventListener("click", revealPage);
returnButton.addEventListener("click", returnPage);


//Javascript project buttons display code in middle container
function displayCode(codeText) {
  document.getElementById("jsCodeText").innerHTML = codeText;
}

rockPaperScissors.addEventListener("click", () => {displayCode(rockPaperScissorsText)});
sleepDebtCalculator.addEventListener("click", () => {displayCode(sleepDebtCalculatorText)});
mealMaker.addEventListener("click", () => {displayCode(mealMakerText)});
whaleTalk.addEventListener("click", () => {displayCode(whaleTalkText)});
mysteriousOrganisms.addEventListener("click", () => {displayCode(mysteriousOrganismsText)});
mixedMessages.addEventListener("click", () => {displayCode(mixedMessagesText)});


//Javascript programs into displayable HTML
//Rock Paper Scissors
let rockPaperScissorsText = 
"<p>//Project Rock Paper Scissors</p>" +
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
let sleepDebtCalculatorText = 
"<p>//Project Sleep Debt Calculator</p>" +
"<p>let idealSleep = [['Monday'], ['Tuesday'], ['Wednesday'], ['Thursday'], ['Friday']];</p>" +
"<p>let actualSleep = [[1,2], [1,2], [1,2], [1,2], [1,2]];</p>" +
"<p>for (let step = 0; step < 5; step++) {</p>" +
"<p class='indentOne'>console.log('Enter ideal sleep hours for ' + idealSleep[step] + ':');</p>" +
"<p class='indentOne'>idealSleep[step][1] = Math.floor(Math.random() * (13-6) + 6);</p>" +
"<p>}</p>" +
"<p>console.log(idealSleep);</p>" +
"<p>for (let step = 0; step < 5; step++) {</p>" +
"<p class='indentOne'>console.log('Enter actual sleep hours for ' + idealSleep[step][0] + ':');</p>" +
"<p class='indentOne'>actualSleep[step][0] = idealSleep[step][0];</p>" +
"<p class='indentOne'>actualSleep[step][1] = Math.floor(Math.random() * 13);</p>" +
"<p>}</p>" +
"<p>console.log(actualSleep);</p>" +
"<p>function calculateSleep(ideal, actual) {</p>" +
"<p class='indentOne'>let total = ideal - actual;</p>" +
"<p class='indentOne'>if (total > 0) {</p>" +
"<p class='indentTwo'>let result = `you missed ${total} hours of sleep.`;</p>" +
"<p class='indentTwo'>return result;</p>" +
"<p class='indentOne'>} else if (total === 0) {</p>" +
"<p class='indentTwo'>let result = `you got the ideal amount of sleep.`;</p>" +
"<p class='indentTwo'>return result;</p>" +
"<p class='indentOne'>} else if (total < 0) {</p>" +
"<p class='indentTwo'>total = Math.abs(total);</p>" +
"<p class='indentTwo'>let result = `you over-slept ${total} hours.`;</p>" +
"<p class='indentTwo'>return result;</p>" +
"<p class='indentOne'>} else {</p>" +
"<p class='indentTwo'>console.log('Invalid self-destruct initiated!');</p>" +
"<p class='indentOne'>}</p>" +
"<p>}</p>" +
"<p>for (let step = 0; step < 5; step++) {</p>" +
"<p class='indentOne'>console.log('On ' + idealSleep[step][0] + ' ' + calculateSleep(idealSleep[step][1], actualSleep[step][1]));</p>" +
"<p>}</p>";


//Meal maker
let mealMakerText = 
"<p>//Project Meal Maker</p>" +
"<p>//dish factory</p>" +
"<p>const dish = (entree, side, veggie) => {</p>" +
"<p class='indentOne'>return {</p>" +
"<p class='indentOne'>entree,</p>" +
"<p class='indentOne'>side,</p>" +
"<p class='indentOne'>veggie</p>" +
"<p class='indentOne'>}</p>" +
"<p>};</p>" +  
"<p>//random dish creator</p>" +
"<p>const listEntrees = [['Steak','$12'], ['Salmon', '$15'], ['Chicken', '$10'], ['Pork', '$11']];</p>" +
"<p>const listSides = ['Potatos', 'Soup', 'Salad', 'Rice'];</p>" +
"<p>const listVeggies = ['Corn', 'Green Beans', 'Asparagus', 'Carrots'];</p>" +  
"<p>function dishCreator(obj)  {</p>" +
"<p class='indentOne'>obj = dish(listEntrees[Math.floor(Math.random() * listEntrees.length)], listSides[Math.floor(Math.random() * listSides.length)], listVeggies[Math.floor(Math.random() * listSides.length)]);</p>" +
"<p class='indentOne'>return obj;</p>" +
"<p>};</p>" +  
"<p>//Create menu for weekdays</p>" +
"<p>let monday = dishCreator();</p>" +
"<p>let tuesday = dishCreator();</p>" +
"<p>let wednesday = dishCreator();</p>" +
"<p>let thursday = dishCreator();</p>" +
"<p>let friday = dishCreator();</p>" +
"<p>let weeklyMenu = [['Monday', monday], ['Tuesday', tuesday], ['Wednesday', wednesday], ['Thursday', thursday], ['Friday', friday]];</p>" +  
"<p>//Print menu for the week</p>" +
"<p>for (i = 0; i < weeklyMenu.length; i++) {</p>" +
"<p class='indentOne'>console.log(weeklyMenu[i][0] + ':');</p>" +
"<p class='indentOne'>console.log(weeklyMenu[i][1].entree[0]);</p>" +
"<p class='indentOne'>console.log(weeklyMenu[i][1].side);</p>" +
"<p class='indentOne'>console.log(weeklyMenu[i][1].veggie);</p>" +
"<p class='indentOne'>console.log(weeklyMenu[i][1].entree[1]);</p>" +
"<p class='indentOne'>console.log();</p>" +
"<p>}</p>" +  
"<p>//Random selection</p>" +
"<p>let selection = weeklyMenu[Math.floor(Math.random() * weeklyMenu.length)];</p>" +
"<p>console.log(`You chose our special for ${selection[0]}.`);</p>" +
"<p>console.log(`This comes with ${selection[1].entree[0]} and a side of ${selection[1].side} and ${selection[1].veggie}.`);</p>" +
"<p>console.log(`Your total comes to ${selection[1].entree[1]}.`);</p>";


//Whale Talk
let whaleTalkText = 
"<p>//Project Whale Talk</p>" +
"<p>let translate = 'Turpentine and Turtles';</p>" +
"<p>function translator(word) {</p>" +
"<p class='indentOne'>let whaleLanguage = [];</p>" +
"<p class='indentOne'>word = word.toLowerCase();</p>" +
"<p class='indentOne'>let combine = '';</p>" +
"<p class='indentOne'>for (let i = 0; i < word.length; i++) {</p>" +
"<p class='indentTwo'>if (word.charAt(i) === 'a') {</p>" +
"<p class='indentThree'>whaleLanguage.push('a');</p>" +
"<p class='indentTwo'>} else if (word.charAt(i) === 'e') {</p>" +
"<p class='indentThree'>whaleLanguage.push('ee');</p>" +
"<p class='indentTwo'>} else if (word.charAt(i) === 'i') {</p>" +
"<p class='indentThree'>whaleLanguage.push('i');</p>" +
"<p class='indentTwo'>} else if (word.charAt(i) === 'o') {</p>" +
"<p class='indentThree'>whaleLanguage.push('oo');</p>" +
"<p class='indentTwo'>} else if (word.charAt(i) === 'u') {</p>" +
"<p class='indentThree'>whaleLanguage.push('uu');</p>" +
"<p class='indentTwo'>}</p>" +
"<p class='indentOne'>}</p>" +
"<p class='indentOne'>for (let i = 0; i < whaleLanguage.length; i++) {</p>" +
"<p class='indentTwo'>combine = combine + whaleLanguage[i];</p>" +
"<p class='indentOne'>}</p>" +
"<p class='indentOne'>return combine;</p>" +
"<p>}</p>" +
"<p>console.log(translator(translate));</p>";


//Mysterious Organisms
let mysteriousOrganismsText =
"<p>//Project Mysterious Organisms</p>" +
"<p>// Returns a random DNA base</p>" +
"<p>const returnRandBase = () => {</p>" +
"<p class='indentTwo'>const dnaBases = ['A', 'T', 'C', 'G']</p>" +
"<p class='indentTwo'>return dnaBases[Math.floor(Math.random() * 4)]</p>" +
"<p>}</p>" +  
"<p>// Returns a random single strand of DNA containing 15 bases</p>" +
"<p>const mockUpStrand = () => {</p>" +
"<p class='indentTwo'>const newStrand = []</p>" +
"<p class='indentTwo'>for (let i = 0; i < 15; i++) {</p>" +
"<p class='indentThree'>newStrand.push(returnRandBase())</p>" +
"<p class='indentTwo'>}</p>" +
"<p class='indentTwo'>return newStrand</p>" +
"<p>}</p>" +  
"<p>function pAequorFactory(num, dnaArray) {</p>" +
"<p class='indentTwo'>return {</p>" +
"<p class='indentThree'>_specimenNum: num,</p>" +
"<p class='indentThree'>_dna: dnaArray,</p>" +  
"<p class='indentThree'>get specimenNum() {</p>" +
"<p class='indentFour'>return this._specimenNum;</p>" +
"<p class='indentThree'>},</p>" +  
"<p class='indentThree'>get dna() {</p>" +
"<p class='indentFour'>return this._dna;</p>" +
"<p class='indentThree'>},</p>" +  
"<p class='indentThree'>set specimenNum(newNum) {</p>" +
"<p class='indentFour'>this._specimenNum = newNum;</p>" +
"<p class='indentThree'>},</p>" +  
"<p class='indentThree'>set dna(newDna) {</p>" +
"<p class='indentFour'>this._dna = newDna;</p>" +
"<p class='indentThree'>},</p>" +  
"<p class='indentThree'>mutate() {</p>" +
"<p class='indentFour'>const mutatedDna = this._dna;</p>" +
"<p class='indentFour'>const randomIndex = Math.floor(Math.random() * 14)</p>" +
"<p class='indentFour'>const randomBase = this._dna[randomIndex];</p>" +
"<p class='indentFour'>let newBase = returnRandBase();</p>" +
"<p class='indentFour'>if (randomBase===newBase) {</p>" +
"<p class='indentFive'>do {</p>" +
"<p class='indentFive'>newBase = returnRandBase();</p>" +
"<p class='indentFive'>} while (randomBase===newBase);</p>" +
"<p class='indentFour'>};</p>" +        
"<p class='indentFour'>mutatedDna[randomIndex] = newBase;</p>" +
"<p class='indentFour'>return mutatedDna;</p>" +
"<p class='indentThree'>},</p>" +  
"<p class='indentThree'>compareDNA(pAequor) {</p>" +
"<p class='indentFour'>let common = [];</p>" +
"<p class='indentFour'>let count = 0;</p>" +  
"<p class='indentFour'>for (i=0; i<15; i++) {</p>" +
"<p class='indentFive'>if (pAequor._dna[i]===this._dna[i]) {</p>" +
"<p id='indentSix'>common.push(this._dna[i]);</p>" +
"<p id='indentSix'>count++;</p>" +
"<p class='indentFive'>};</p>" +
"<p class='indentFour'>};</p>" +  
"<p class='indentFour'>if (count>0) {</p>" +
"<p class='indentFive'>let percent = count/15*100;</p>" +
"<p class='indentFive'>console.log(`Specimen #1 and specimen #2 have ${percent.toFixed(2)}% DNA in common.`);</p>" +
"<p class='indentFour'>}</p>" +
"<p class='indentThree'>},</p>" +  
"<p class='indentTwo'>willLikelySurvive() {</p>" +
"<p class='indentThree'>let count = 0;</p>" +
"<p class='indentThree'>let survivePercent = 0;</p>" +
"<p class='indentThree'>for (i=0; i<15; i++) {</p>" +
"<p class='indentFive'>if (this._dna[i]==='C' || this._dna[i]==='G') {</p>" +
"<p id='indentSix'>count++;</p>" +
"<p class='indentFive'>};</p>" +
"<p class='indentThree'>};</p>" +
"<p class='indentThree'>survivePercent = count/15*100;</p>" +
"<p class='indentThree'>if (survivePercent>=60) {</p>" +
"<p class='indentFour'>return true;</p>" +
"<p class='indentThree'>} else {</p>" +
"<p class='indentFour'>return false;</p>" +   
"<p class='indentThree'>};</p>" +
"<p class='indentTwo'>}</p>" +  
"<p class='indentTwo'>};</p>" +
"<p>};</p>" +  
"<p>const firstOne = pAequorFactory(1,mockUpStrand());</p>" +
"<p>const secondOne = pAequorFactory(2, mockUpStrand());</p>" +
"<p>console.log(`First specimens DNA: ${firstOne._dna}`);</p>" +
"<p>console.log(`Second specimens DNA: ${secondOne._dna}`);</p>" +  
"<p>firstOne.compareDNA(secondOne);</p>" +  
"<p>console.log(`Specimen ${firstOne._specimenNum} likely to survive: ${firstOne.willLikelySurvive()}`);</p>" + 
"<p>//Load 30 specimens into storage</p>" +
"<p>let storage = [];</p>" +
"<p>let amount = 1;</p>" +
"<p>let increment = 0;</p>" +
"<p>do {</p>" +
"<p class='indentTwo'>storage[increment] = pAequorFactory(amount, mockUpStrand());</p>" +
"<p class='indentTwo'>if (storage[increment].willLikelySurvive) {</p>" +
"<p class='indentThree'>increment++;</p>" +
"<p class='indentThree'>amount++;</p>" +
"<p class='indentTwo'>};</p>" +
"<p>} while (amount<30);</p>";


//Mixed Messages
let mixedMessagesText = 
"<p>//Pick random messages from Luck for the day, weather, daily quote</p>" +
"<p>let randomNumber = (n) => Math.floor(Math.random() * n);</p>" +
"<p>let luck = ['good', 'bad', 'neutral'];</p>" +
"<p>let weather = [['sunny', 'cloudy', 'partly cloudy'],['rain', 'fog', 'snow', 'hail', 'thunderstorms']];</p>" +
"<p>let dailyQuote = ['“The secret of getting ahead is getting started.” —Mark Twain', '“It is hard to beat a person who never gives up.” —Babe Ruth', '“Everything you can imagine is real.”―Pablo Picasso', '“Do one thing every day that scares you.” ―Eleanor Roosevelt', '“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” —Socrates'];</p>" +
"<p>let printIt = () => console.log(`Today you will have ${luck[randomNumber(luck.length)]} luck. </p>" +
"<p>\nThe weather for today is ${weather[0][randomNumber(weather[0].length)]} with a chance of ${weather[1][randomNumber(weather[1].length)]}. </p>" +
"<p>\nThe quote of the day is: ${dailyQuote[randomNumber(dailyQuote.length)]}`);</p>" +
"<p>printIt();</p>";


//Javascript projects modified to display output in HTML when button is clicked

//Rock Paper Scissors
function rockPaperScissorsOutput() {
    jsCodeOutput.innerHTML = " ";

    function choose(play) {
        let roll = Math.floor(Math.random() * 3);
      
        switch (roll) {
          case 0:
            play = "rock";
            break;
          case 1:
            play = "paper";
            break;
          case 2:
            play = "scissors";
            break;
          default:
            console.log("Invalid roll");
            break;
        }
        return play;
    }
      
      function winner(user, comp) {
        let win;
        if (user === "rock" && comp === "rock") {
          return (win = "TIE");
        } else if (user === "rock" && comp === "paper") {
          return (win = "COMPUTER WINS");
        } else if (user === "rock" && comp === "scissors") {
          return (win = "YOU WIN");
        } else if (user === "paper" && comp === "rock") {
          return (win = "YOU WIN");
        } else if (user === "paper" && comp === "paper") {
          return (win = "TIE");
        } else if (user === "paper" && comp === "scissors") {
          return (win = "COMPUTER WINS");
        } else if (user === "scissors" && comp === "rock") {
          return (win = "COMPUTER WINS");
        } else if (user === "scissors" && comp === "paper") {
          return (win = "YOU WIN");
        } else if (user === "scissors" && comp === "scissors") {
          return (win = "TIE");
        }
    }
      
    let user = choose();
    let comp = choose();
    let victor = winner(user, comp);
      
    
    jsCodeOutput.innerHTML = "<p>You throw " + user + " and computer throws " + comp + ".</p>" +
    "<p>" + victor + "</p>";
    jsCodeOutput.style.textAlign="center";
}
    
rockPaperScissors.addEventListener("click", rockPaperScissorsOutput);


//sleepDebtCalculator
function sleepDebtCalculatorOutput() {
    jsCodeOutput.innerHTML = " ";
    jsCodeOutput.style.textAlign = "left";

    
    let idealSleep = [['Monday'], ['Tuesday'], ['Wednesday'], ['Thursday'], ['Friday']];
    let actualSleep = [[1,2], [1,2], [1,2], [1,2], [1,2]];
    
    for (step = 0; step < 5; step++) {
      //console.log("Enter ideal sleep hours for " + idealSleep[step] + ':');
      idealSleep[step][1] = Math.floor(Math.random() * (13-6) + 6);
    }
    
    for (step = 0; step < 5; step++) {
      //console.log('Enter actual sleep hours for ' + idealSleep[step][0] + ':');
      actualSleep[step][0] = idealSleep[step][0];
      actualSleep[step][1] = Math.floor(Math.random() * 13);
    }
    
    function calculateSleep(ideal, actual) {
      let total = ideal - actual;
      if (total > 0) {
        let result = 'you missed ' + total + ' hours of sleep.';
        return result;
      } else if (total === 0) {
        let result = 'you got the ideal amount of sleep.';
        return result;
      } else if (total < 0) {
        total = Math.abs(total);
        let result = 'you over-slept ' + total  + ' hours.';
        return result;
      } else {
        jsCodeOutput.innerHTML = 'Invalid self-destruct initiated!';
      }
    }
    
    
    for (step = 0; step < 5; step++) {
      let p = document.createElement("p");
      p.style.marginLeft = "5rem";
      p.textContent = "On " + idealSleep[step][0] + " " + calculateSleep(idealSleep[step][1], actualSleep[step][1]);
      jsCodeOutput.appendChild(p);   
    }
    
}
    
sleepDebtCalculator.addEventListener("click", sleepDebtCalculatorOutput);


//Meal Maker
function mealMakerOutput() {
    jsCodeOutput.innerHTML = " ";
    jsCodeOutput.style.textAlign = "left";
    //Project Meal Maker

    //dish factory
    const dish = (entree, side, veggie) => {
        return {
        entree,
        side,
        veggie
        }
    };
    
    //random dish creator
    const listEntrees = [['Steak','$12'], ['Salmon', '$15'], ['Chicken', '$10'], ['Pork', '$11']];
    const listSides = ['Potatos', 'Soup', 'Salad', 'Rice'];
    const listVeggies = ['Corn', 'Green Beans', 'Asparagus', 'Carrots'];
    
    function dishCreator(obj)  {
        obj = dish(listEntrees[Math.floor(Math.random() * listEntrees.length)], listSides[Math.floor(Math.random() * listSides.length)], listVeggies[Math.floor(Math.random() * listSides.length)]);
        return obj;
    };
    
    //Create menu for weekdays
    let monday = dishCreator();
    let tuesday = dishCreator();
    let wednesday = dishCreator();
    let thursday = dishCreator();
    let friday = dishCreator();
    let weeklyMenu = [['Monday', monday], ['Tuesday', tuesday], ['Wednesday', wednesday], ['Thursday', thursday], ['Friday', friday]];
    
    //Print menu for the week
    for (i = 0; i < weeklyMenu.length; i++) {
        let a = document.createElement("p");
        a.style.marginLeft = "2rem";
        a.textContent = weeklyMenu[i][0] + ':';
        jsCodeOutput.appendChild(a);
        
        let b = document.createElement("p");
        b.style.marginLeft = "2rem";
        b.textContent = weeklyMenu[i][1].entree[1];
        jsCodeOutput.appendChild(b);

        let c = document.createElement("p");
        c.style.marginLeft = "2rem";
        c.textContent = weeklyMenu[i][1].entree[0] + ", " + weeklyMenu[i][1].side + ", " + weeklyMenu[i][1].veggie;
        jsCodeOutput.appendChild(c);

        let d = document.createElement("p");
        d.style.marginLeft = "2rem";
        d.textContent = "--------------------------";
        jsCodeOutput.appendChild(d);
    }
    
    //Random selection
    let selection = weeklyMenu[Math.floor(Math.random() * weeklyMenu.length)];
    
    let e = document.createElement("p");
    e.style.marginLeft = "2rem";
    e.textContent = "You chose our special for " + selection[0] + ".";
    jsCodeOutput.appendChild(e);

    let f = document.createElement("p");
    f.style.marginLeft = "2rem";
    f.textContent = "This comes with " + selection[1].entree[0] + " and a side of " + selection[1].side + " and " + selection[1].veggie + ".";
    jsCodeOutput.appendChild(f);

    let g = document.createElement("p");
    g.style.marginLeft = "2rem";
    g.textContent = "Your total comes to " + selection[1].entree[1] + ".";
    jsCodeOutput.appendChild(g);
}

mealMaker.addEventListener("click", mealMakerOutput);


//Whale Talk
function whaleTalkOutput() {
    jsCodeOutput.innerHTML = " ";
    jsCodeOutput.style.textAlign = "left";

    let translate = 'Turpentine and Turtles';

    function translator(word) {
    let whaleLanguage = [];
    word = word.toLowerCase();
    let combine = '';

    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === 'a') {
        whaleLanguage.push('a');
        } else if (word.charAt(i) === 'e') {
        whaleLanguage.push('ee');
        } else if (word.charAt(i) === 'i') {
        whaleLanguage.push('i');
        } else if (word.charAt(i) === 'o') {
        whaleLanguage.push('oo');
        } else if (word.charAt(i) === 'u') {
        whaleLanguage.push('uu');
        }
    }

    for (let i = 0; i < whaleLanguage.length; i++) {
        combine = combine + whaleLanguage[i];
    }
    return combine;
    }

    jsCodeOutput.innerHTML = "<p style='text-align:center'>Translating 'Turpentine and Turtles' into whale language:</p>" +
    "<p style='text-align:center'>" + translator(translate) + "</p>";
}

whaleTalk.addEventListener("click", whaleTalkOutput);


//Mysterious Organisms
function mysteriousOrganismsOutput() {
    jsCodeOutput.innerHTML = " ";
    jsCodeOutput.style.textAlign = "left";
    //Project Mysterious Organisms
    // Returns a random DNA base
    const returnRandBase = () => {
        const dnaBases = ['A', 'T', 'C', 'G']
        return dnaBases[Math.floor(Math.random() * 4)] 
    }
    
    // Returns a random single strand of DNA containing 15 bases
    const mockUpStrand = () => {
        const newStrand = []
        for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
        }
        return newStrand
    }
    
    function pAequorFactory(num, dnaArray) {
        return {
        _specimenNum: num,
        _dna: dnaArray,
    
        get specimenNum() {
            return this._specimenNum;
        },
    
        get dna() {
            return this._dna;
        },
    
        set specimenNum(newNum) {
            this._specimenNum = newNum;
        },
    
        set dna(newDna) {
            this._dna = newDna;
        },
    
        mutate() {
            const mutatedDna = this._dna;
            const randomIndex = Math.floor(Math.random() * 14)
            const randomBase = this._dna[randomIndex];
            let newBase = returnRandBase();
    
            if (randomBase===newBase) {
            do {
            newBase = returnRandBase();
            } while (randomBase===newBase);
            };
            
            mutatedDna[randomIndex] = newBase;
            return mutatedDna;
        },
    
        compareDNA(pAequor) {
            let common = [];
            let count = 0;
    
            for (i=0; i<15; i++) {
            if (pAequor._dna[i]===this._dna[i]) {
                common.push(this._dna[i]);
                count++;
            };
            };
    
            if (count>0) {
            let percent = count/15*100;

            let a = document.createElement("p");
            a.style.marginLeft = "2rem";
            a.textContent = "Specimen #1 and specimen #2 have " + percent.toFixed(2) + "% DNA in common.";
            jsCodeOutput.appendChild(a);
            }
        },
    
        willLikelySurvive() {
        let count = 0;
        let survivePercent = 0;
        for (i=0; i<15; i++) {
            if (this._dna[i]==='C' || this._dna[i]==='G') {
                count++;
            };
        };
        survivePercent = count/15*100;
        if (survivePercent>=60) {
            return true;      
        } else {
            return false;      
        };
        }
    
        };
    };
    
    const firstOne = pAequorFactory(1,mockUpStrand());
    const secondOne = pAequorFactory(2, mockUpStrand());

    let b = document.createElement("p");
    b.style.marginLeft = "2rem";
    b.textContent = "First specimen's DNA: " + firstOne._dna;
    jsCodeOutput.appendChild(b);

    let c = document.createElement("p");
    c.style.marginLeft = "2rem";
    c.textContent = "Second specimen's DNA: " + secondOne._dna;
    jsCodeOutput.appendChild(c);
    
    firstOne.compareDNA(secondOne);
    
    let d = document.createElement("p");
    d.style.marginLeft = "2rem";
    d.textContent = "Specimen " + firstOne._specimenNum + " likely to survive: " + firstOne.willLikelySurvive();
    jsCodeOutput.appendChild(d);
    
    let storage = [];
    let amount = 1;
    let increment = 0;
    do {
        storage[increment] = pAequorFactory(amount, mockUpStrand());
        if (storage[increment].willLikelySurvive) {
        increment++;
        amount++;
        };
    } while (amount<30);
}

mysteriousOrganisms.addEventListener("click", mysteriousOrganismsOutput);


//Mixed Messages
function mixedMessagesOutput() {
    jsCodeOutput.innerHTML = " ";
    jsCodeOutput.style.textAlign = "left";
    //Pick random messages from Luck for the day, weather, daily quote

    let randomNumber = (n) => Math.floor(Math.random() * n);

    let luck = ["good", "bad", "neutral"];
    let weather = [["sunny", "cloudy", "partly cloudy"],["rain", "fog", "snow", "hail", "thunderstorms"]];
    let dailyQuote = ["'The secret of getting ahead is getting started.' -Mark Twain", "'It is hard to beat a person who never gives up.' -Babe Ruth", "'Everything you can imagine is real.' -Pablo Picasso", "'Do one thing every day that scares you.' -Eleanor Roosevelt", "'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.' -Socrates"];

    jsCodeOutput.innerHTML = "<p style='margin-left:2rem'>Today you will have " + luck[randomNumber(luck.length)] + " luck.</p>" +
    "<p style='margin-left:2rem; line-height:normal'>The weather for today is " + weather[0][randomNumber(weather[0].length)] + " with a chance of " + weather[1][randomNumber(weather[1].length)] + ".</p>" +
    "<p style='margin-left:2rem'>The quote of the day is: </p>" + 
    "<p style='margin-left:2rem; line-height:normal'>" + dailyQuote[randomNumber(dailyQuote.length)] + "</p>";
    
    /*
    let printIt = () => console.log(`Today you will have ${luck[randomNumber(luck.length)]} luck. 
    \nThe weather for today is ${weather[0][randomNumber(weather[0].length)]} with a chance of ${weather[1][randomNumber(weather[1].length)]}. 
    \nThe quote of the day is: ${dailyQuote[randomNumber(dailyQuote.length)]}`);

    printIt();*/
}

mixedMessages.addEventListener("click", mixedMessagesOutput);