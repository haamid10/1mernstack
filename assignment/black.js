let firstCard=9
let SecondCard=12
let sum = firstCard + SecondCard
let hasBlackJack= false

if(sum <= 20){
  console.log("DO you want to draw a new card? 😊")
} else if (sum === 21){
  console.log( "whooo! You've got blackjack! 🤩 ")
  hasBlackJack=true
}else if(sum > 21){
  console.log("You're out of the game! 😭 ")
}

// cash out your many!!
console.log(hasBlackJack)


// PREDICTIONS OF NUMBERS

console.log(23 === 3 )
console.log(23 >=3 )
console.log(23 <=3 )
console.log(23 <3 )
console.log(23 <=23 )