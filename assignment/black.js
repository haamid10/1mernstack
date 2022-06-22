let firstCard= getRandomCard()
let SecondCard= getRandomCard()
let card =[]
let sum = 0
let hasBlackJack= false
let isLive= false
let message = ""
let massEl = document.getElementById("mess")
console.log(massEl)
let sumEl=document.getElementById("sum")
let cards =document.getElementById("card")

let player = {
  name: "per",
  chips: "145"
}



let playerEl = document.getElementById("playerEL")

// playerEl.textContent = player.name + ": $ " + player.chips




function getRandomCard(){

  let randomCard = Math.floor(Math.random()*13)+1
  if (randomCard >10 ){
    return 10
  } else if (randomCard ===10 ){
    return 11
  }else{
    return randomCard
  }
  


  return randomCard;
}

function startGame(){
  isLive = true
  let firstCard = getRandomCard()
  let SecondCard = getRandomCard()
 card = [firstCard , SecondCard]
 sum = firstCard + SecondCard

  renderGame()
}


function renderGame(){
  sumEl.textContent= "sum : " + sum
  cards.textContent= "card  : "
  for(let i = 0 ; i < card.length; i++){
    cards.textContent += card[i] + " "
  }
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
  
  if( isLive === true && hasBlackJack === false){
    let Bird = getRandomCard()
    sum += Bird 
    card.push(Bird)
    console.log(card)
    renderGame()}
  
  

 
}









let Airbnb = {
  title : "Learn Css Grid for free",
  lesson : 24,
  creator : "per Harald borgan",
  length :63
}

let head = document.getElementById("heed")
let fr = document.getElementById("fre")

heed.textContent = Airbnb.title
fre.textContent = Airbnb.creator


console.log(Airbnb.title)














// PREDICTIONS OF NUMBERS

// console.log(23 === 3 )
// console.log(23 >=3 )
// console.log(23 <=3 )
// console.log(23 <3 )
// console.log(23 <=23 )


// array

// let messages=[
//   "hey, how is it going",
//   "I'm great , thank you! how about you?",
//   "All good, Been working on my portfolio lately"
// ]
// for (let i=0; i< messages.length; i++){
// console.log(messages[i])
// }
// let NewMessage ="Same here"

// messages.push(NewMessage)


// console.log(messages)


// let sdarc = [4,5]

// console.log(sdarc)

//  sdarc.push(7)

//  console.log(sdarc)
// counting and loops



// for (let count =1; count<11 ;count+=1){
//   console.log(count)
// }

// console.log(count)


// for (let count=2; count <100; count += 1){
//   console.log(count)
// }


// let sentence= ["Hello" , "my", "name "  , "is", "hamiid "]
// let great = document.getElementById("greatingEl")

// for( let i = 0; i < sentence.length; i++){
//   great.textContent += sentence[i]  + " "
//   console.log(sentence[i])
// }

// returning value and variebles
// let player1time =102
// let player2time =104

// function getFastestRaceTime(){
//   if (player1time < player2time){
//     return player1time
//   } else if (player2time < player1time){
//     return player2time
//   }
// else {
//   return player1time
// }
// }
// let fastestRace = getFastestRaceTime()

// console.log(fastestRace)

// function getTotalRaceTime(){
//   return player1time + player2time
// }

// let totalTime = getTotalRaceTime()

// console.log(totalTime)

// math

// let RandomNumber = Math.random() *6

// console.log(RandomNumber )

// let FloorNumber = Math.floor(Math.random() *6) +1
//  console.log(FloorNumber )

// dice function

//  function rollDice(){
//    let FloorNumber= Math.floor(Math.random() *6) +1

//    return FloorNumber

//  }

// console.log( rollDice())



// boilerplate code

// let hasComplitedCourse = false
// let givesCertificate = true

// if( hasComplitedCourse === false || givesCertificate === false ){
//   generateCertificate()
// }

// function generateCertificate(){
//   console.log("certificate generating...................")
// }

// if(hasComplitedCourse === false || givesCertificate === false)
// {
//   reccommendMovie()
// }
// function reccommendMovie(){

//   console.log("hey, check out this new film we think you will like")
// }