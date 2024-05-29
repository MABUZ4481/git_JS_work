//console.log(Math.round((Math.random())*100+1))
let randumnumber=parseInt((Math.random())*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')

const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')

const lowOrHi=document.querySelector('.lowOrHi')

const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

const  resetGame=document.querySelector('#reset')

let allGuessedNums=[]
let guessCount=1
let playGame=true
let restartGame=true

if(playGame){
submit.addEventListener('click', function(e){
e.preventDefault()
const guess=parseInt(userInput.value)
console.log(guess)
validateGuess(guess)
})
}
if(restartGame){
    resetGame.addEventListener('click', function(e){
        playAgain()
    })
}
//validate user input only number
function validateGuess(guessedNum){
if(isNaN(guessedNum)){
    userInput.value=''
alert('1-Please Enter a valid number: '+guessedNum);
}else if(guessedNum<1){
    userInput.value=''
    alert('2-Please Enter a valid number more than one: '+guessedNum);
}else if(guessedNum>100){
    userInput.value=''
    alert('3-Please Enter a valid number less than 100:  '+guessedNum);
}
else{
    allGuessedNums.push(guessedNum)
    if(guessCount===11){
    displayGuess(guessedNum)
    displayMessage(`Game Over. Randum no. was ${randumnumber}`)
    endGame()
  }else{
   // alert(guess)
    displayGuess(guessedNum)
    checkGuess(guessedNum)
}
}
}

//To check user input range
function checkGuess(guessedNum){

if(guessedNum===randumnumber){
    displayMessage(`You guessed it right`)
    endGame()
}else if (guessedNum<randumnumber){
    displayMessage(`Number is too low`)
}else if (guessedNum>randumnumber){
    displayMessage(`Number is too high`)
}

}


function displayGuess(guessedNum){
userInput.value=''
guessSlot.innerHTML+=` ${guessedNum}`
guessCount++;
remaining.innerHTML=`${11-guessCount}`
}

function displayMessage(message){
lowOrHi.innerHTML=`<h5>${message}</h5>`
}

function endGame(){
userInput.value='';
subt.setAttribute('disabled','');
resetGame.setAttribute('disabled','')
//userInput.setAttribute('disabled','');
//submit.setAttribute('disabled',''); this is also correct
p.classList.add('button');
p.innerHTML=`<h4 id="newGame">Start new Game</h4>`;
startOver.appendChild(p);
playGame=false;
newGame();
}


function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    playAgain()
    
})

}

function playAgain(){
    randumnumber=parseInt((Math.random())*100+1)
    allGuessedNums=[]
    guessCount=1
    userInput.value=''
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-guessCount}`;
    lowOrHi.innerHTML=''
    //userInput.removeAttribute('disabled')
    submit.removeAttribute('disabled');
    resetGame.removeAttribute('disabled')
    startOver.removeChild(p);

    playGame=true

}









