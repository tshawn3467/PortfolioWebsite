function output() {

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
  
  /*console.log(`You throw ${user} and computer throws ${comp}.`);
  console.log(victor);*/

//Below for HTML
document.getElementById("jsCodeOutput").innerHTML = "<p>You throw " + user + " and computer throws " + comp + ".</p>" +
"<p>" + victor + "</p>";
document.getElementById("jsCodeOutput").style.textAlign="center";
}

document.getElementById("rockPaperScissors").addEventListener("click", output);