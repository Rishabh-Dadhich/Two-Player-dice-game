'use strict';


//selection
const player0 = document.querySelector("#score--0");
const player1 = document.querySelector("#score--1");
const diceimg = document.querySelector(".dice");
const diceRoll = document.querySelector(".btn--roll");
const newGame = document.querySelector(".btn--new");
const hold = document.querySelector("btn--hold");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
let currentscore = 0; 
let activeplayer = 0;
let playing=true;
let scores=[0,0];
const switchPlayer = function(){
    currentscore=0;
        document.querySelector(`#current--${activeplayer}`).textContent=currentscore;
        document.querySelector(`.player--${activeplayer}`).classList.remove("player--active");
        activeplayer=activeplayer===0?1:0;
        document.querySelector(`.player--${activeplayer}`).classList.add("player--active");   
}



//initial conditions
player0.textContent=scores[0];
player1.textContent=scores[1];
diceimg.classList.add("hidden");


//rolling the dice
diceRoll.addEventListener("click", function(){
    if(playing){
    const dice = Math.trunc(Math.random()*6) + 1;

    diceimg.src=`dice-${dice}.png`;
    diceimg.classList.remove("hidden");
    
    if(dice !==1){
        
        currentscore+=dice;
        document.querySelector(`#current--${activeplayer}`).textContent=currentscore;
    }
    else{
     switchPlayer();   
    }}

})



//holding the score
document.querySelector(".btn--hold").addEventListener("click", function(){
    if(playing){
    
    
    console.log("hold");
  scores[activeplayer]+=currentscore;
  document.querySelector(`#score--${activeplayer}`).textContent=scores[activeplayer];
  if(scores[activeplayer]>=100){
    
    document.querySelector(`.player--${activeplayer}`).classList.add("player--winner");
    document.querySelector(`.player--${activeplayer}`).classList.add("player--winner");
    diceimg.classList.add("hidden");

    playing=false;
  }else{
    switchPlayer();
  }
}
})


