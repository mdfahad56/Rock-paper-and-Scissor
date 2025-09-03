let userScore=0;
let comScore=0;
const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const generateCompChoice=()=>{
    const option=["rock","paper","scissor"];
   const randIdx=Math.floor( Math.random()*3);
return option[randIdx];
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){console.log("you win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win, your ${userChoice} beat ${compChoice}`;
          msg.style.backgroundColor="pink";
    }
    else {console.log("you loose");
        comScore++;
        compScorePara.innerText=comScore;
         msg.innerText=`You Loose,comp ${compChoice} beat ${userChoice}`;
           msg.style.backgroundColor="red";
    }


}
drawGame=()=>{
    console.log("game was draw");
     msg.innerText="Draw,Play again";
     msg.style.backgroundColor="green";

};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked");
        playGame(userChoice);

    }
    );
});
const playGame=(userChoice)=>{
console.log("user choice =",userChoice);
const compChoice=generateCompChoice();
console.log("comp choice=",compChoice);
if(userChoice==compChoice){
    drawGame();
}
else{
    let userWin=true;
    if(userChoice=="rock"){
        userWin=compChoice=="paper"?false:true;
    }
    else if(userChoice=="paper"){
        userWin=compChoice=="scissor"?false:true;
    }
    else{
      userWin=  compChoice=="rock"?false:true;

    }
    showWinner(userWin,userChoice,compChoice);
}
}




