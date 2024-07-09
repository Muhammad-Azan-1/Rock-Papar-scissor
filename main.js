"use strict";
let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg"); // confirming type that msg is the element contains html element, to use related mehtods like innerText etc
let yourScorePara = document.querySelector("#your-score");
let computerScorePara = document.querySelector("#computer-score");
function computerChoice() {
    let arr = ["rock", "papar", "Scissor"];
    let randomIdx = Math.floor(Math.random() * 3); //logic to generate computer choice 
    return arr[randomIdx];
}
function drawGame() {
    console.log("The Game was draw...");
    msg.innerText = "The Game was draw!"; // as the user and computer both choice become same then the msg.innerText will be displayed as the game as draw
    msg.style.backgroundColor = "#081b31";
}
function showWinner(userWin, yourChoice, computerChoice) {
    if (userWin) { // userWin == true
        userScore++;
        yourScorePara.innerText = `${userScore}`;
        msg.innerText = `you Win! Your ${yourChoice} beats ${computerChoice}`; // as user wins msg.innertext will be displayed as you win and background color will be green
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        computerScorePara.innerText = `${compScore}`;
        msg.innerText = `you lose ):  ${computerChoice} beats Your ${yourChoice}`; // as computer wins msg.innertext will be displayed as computer win and background color will be red
        msg.style.backgroundColor = "red";
    }
}
function playGame(userChoice) {
    //user choice
    // console.log("userChoice: " , userChoice)
    //Computer generated choice
    let computerChoices = computerChoice();
    // console.log("computerChoice: ", computerChoices)   // main work function
    //check the winner
    if (userChoice == computerChoices) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice == "rock") {
            // if userChoice is rock then computer have two choices papar and scissor
            userWin = computerChoices == "Scissor" ? true : false; // if computer choice is "scissor" then (userWin = true) so user wins , else if computer choice is "papar" then (userWin = false), so user lose
        }
        else if (userChoice == "papar") {
            // if userChoice is papar then computer have two choices rock and scissor
            userWin = computerChoices == "rock" ? true : false; // if computer choice is "rock" then (userWin = true) souser wins , else if computer choice is "scissor" then (userWin = false) ,so user lose
        }
        else if (userChoice == "Scissor") {
            // if userChoice is scissor then computer have two choices rock and papar
            userWin = computerChoices == "papar" ? true : false; // if computer choice is "papar" then (userWin = true) souser wins , else if computer choice is "rock" then (userWin = false) ,so user lose
        }
        showWinner(userWin, userChoice, computerChoices);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id"); //logic to generate userChoice   // getting value of id attribute of each div for example <div class="choice" id="rock"><img src="./images/rock.png"></div>
        playGame(userChoice);
    });
});
