let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choose");
let msg=document.querySelector("#msg");
let ScoreUser=document.querySelector("#user-score");
let ScoreComp=document.querySelector("#comp-score");
const drawGame=()=>{
   
    msg.innerText="game was draw.Play again";
     msg.style.backgroundColor="black";
}
const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        userScore++;
        ScoreUser.innerText=userScore;
        
        msg.innerText=`You win your ${userchoice} beats ${compChoice}`;
      
       msg.style.backgroundColor="green";
    }
    else{
   compScore++;
   ScoreComp.innerText=compScore;
  
        msg.innerText=`You lose ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }

}


const  genCompChoice=()=>{
   let options=["rock","paper","scissors"];
   const randomidx = Math.floor(Math.random()*3);
   return options[randomidx];
}

const playGame=(userchoice)=>{
    const compChoice=genCompChoice();
    if(userchoice === compChoice){
        drawGame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin =compChoice==="paper"?false:true;

        }
        else if(userchoice==="paper"){
userwin=compChoice==="scissors"?false:true;

        }
        else {
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compChoice);
    }
}

choices.forEach((choose)=>{
    console.log(choose);
    choose.addEventListener("click",()=>{
        const userchoice= choose.getAttribute("id");
    
playGame(userchoice);
    })
})
