let userScore = 0;
let compScore = 0;
let userChoice;
let compChoice;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreNum = document.querySelector("#user-score");
const compScoreNum = document.querySelector("#comp-score");
const resetButton = document.querySelector("#resetBtn");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = `Game has draw 😉 ! ${userChoice} === ${compChoice}`;
    msg.style.backgroundColor = "#ba10d4";
} 

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        userScore++;
        userScoreNum.innerText = userScore;
        msg.innerText = `You Win 🥳 (PRO) ! ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScoreNum.innerText = compScore;
        msg.innerText = `You Lose 🙄 (NOOB) ! ${compChoice} Beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    } else
    {
        let userWin = true;
        if(userChoice == "Rock") {
            userWin = compChoice === "Paper" ? false: true ;
        } else if(userChoice == "Paper") {
            userWin = compChoice === "Scissor" ? false : true;
        } else
        {
            userWin = compChoice === "Rock" ? false : true;
        }
         showWinner(userWin, userChoice, compChoice);
    }
}

resetButton.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreNum.innerText = userScore;
    compScoreNum.innerText = compScore;
    msg.innerText = "This game has been reset 😊";
    msg.style.backgroundColor = "#1adee9";
});