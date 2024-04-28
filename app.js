let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    })
})

const playGame = (userChoice) =>{
    console.log("User Choice  = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice  = ", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }

    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissor"? false : true;
        }
        else
        {
            userWin = compChoice === "rock"? false : true; 
        }
    showWinner(userWin, userChoice, compChoice);
    }
}

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissor"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Its a Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText = userScore;
        // console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("You lose");
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}