let firstCard=9
let SecondCard=12
let sum = firstCard + SecondCard -2
let hasBlackJack= false
let isLive= true
let message = ""
document.getElementById("message")
function startGame(){
if(sum <= 20){
message="DO you want to draw a new card? 😊"
mee.textContent =message
console.log("message")
} else if (sum === 21){
message= "whooo! You've got blackjack! 🤩 "
mee.textContent =message
console.log("message")
  hasBlackJack=true
}else if(sum > 21){
message="You're out of the game! 😭 "
mee.textContent =message
console.log("message")

  isLive = false
}

// login out

// cash out your many!!

}























// PREDICTIONS OF NUMBERS

// console.log(23 === 3 )
// console.log(23 >=3 )
// console.log(23 <=3 )
// console.log(23 <3 )
// console.log(23 <=23 )