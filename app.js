let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score")
let compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

let drawGame = () => {
    msg.innerText = "Game was draw :|";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You Loss :( ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "scissor"){
           userWin = compChoice === "paper" ? true : false;
        } else if ( userChoice === "rocks") {
           userWin = compChoice === "paper" ? true : false;
        } else {
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });
    