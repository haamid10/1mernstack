let firstCard=9
let SecondCard=12
let card =[firstCard,SecondCard]
let sum = firstCard + SecondCard -6
let hasBlackJack= false
let isLive= true
let message = ""
let massEl = document.getElementById("mess")
console.log(massEl)
let sumEl=document.getElementById("sum")
let cards =document.getElementById("card")



function startGame(){
  renderGame()
}
function renderGame(){
  sumEl.textContent= "sum : " + sum
  cards.textContent= "card  : " + card[0] + " , " + card[1]
if(sum <= 20){
message="DO you want to draw a new card? 😊"
} else if (sum === 21){
message= "whooo! You've got blackjack! 🤩 "
  hasBlackJack=true
}else if(sum > 21){
message="You're out of the game! 😭 "
  isLive = false
}

massEl.textContent= message
// login out

// cash out your many!!

}
function newCard(){
  console.log("Drawing new carD") 
  let newcard = 6
  sum += newcard

  renderGame()
}

























// PREDICTIONS OF NUMBERS

// console.log(23 === 3 )
// console.log(23 >=3 )
// console.log(23 <=3 )
// console.log(23 <3 )
// console.log(23 <=23 )


// array

let messages=[
  "hey, how is it going",
  "I'm great , thank you! how about you?",
  "All good, Been working on my portfolio lately"
]

let NewMessage ="Same here"

messages.push(NewMessage)


console.log(messages)


let sdarc = [4,5]

console.log(sdarc)

 sdarc.push(7)

 console.log(sdarc)

