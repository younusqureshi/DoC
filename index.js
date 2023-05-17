let obj ={
    Name : "Harry",
    Chips : "$150"
}
let cards =[]
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")


///Conditionals
function randomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber === 1){
        return 11
    }
    else if (randomNumber > 10){
        return 10
    }
    else{
        return randomNumber
    }    
    
}
function startGame(){
    isAlive = true
    let  firstCard = randomCard();
    let  secondCard = randomCard();
    cards =[firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards:"
    for(let i=0; i < cards.length; i+=1){
        cardsEl.textContent += cards[i] + " "
        }
    if(sum <= 20){
        message = "You are still in the game";
    }
    else if(sum === 21){
        message = "Hurrah...!!! You have won";
        hasBlackJack = true;
    }
    else {
        message = "You have lost";
        isAlive = false;
        playerEl.textContent = obj.Name + " : " + obj.Chips
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum : " + sum
    
}
function newCard(){
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive === true && hasBlackJack === false){
    let card = randomCard();
    sum = sum + card
    cards.push(card)
    renderGame()
    }
}
