// alert("ssss")
document.getElementById("saveEl")
document.getElementById("qaybta")
let count = 0

console.log(saveEl)

function increment() {
  count += 1
  qaybta.innerText = count
}



function save() {
  let countStr= count + " _ "

  saveEl.textContent += countStr;
  console.log( count)
}
// purchase

let errorParagraph=document.getElementById("error")
console.log(errorParagraph)

function purchase(){
  console.log("clicked")
  errorParagraph.textContent="something went wrong please try again"
}
























// 




let mane= "linda"
let aname= "hi there"

function Ham(){
console.log(aname + "'" + mane + "!")
}


Ham()



let num1= 3
let num2= 34

function sum(){
console.log(num1+num2)
  
}

sum()

function add3Pionts(){
  num1 += 3
}
 function remove1Piont(){
   num1 -= 1
 }
add3Pionts()
add3Pionts()
add3Pionts()
remove1Piont()
remove1Piont()


console.log(num1)














// let count = 0

// console.log(count)

// let yAge =36

// console.log(yAge)

// let myage=23
// let hummanDogRatio= 7

// let count= myage * hummanDogRatio

// console.log(count)

// let welcomEL = document.getElementById("welcome-el")

// let name = "hamiid apdi  "
// let greeting = "  welcome back  "

// welcomEL.innerText = greeting + name

// welcomEL.innerText += "✋"