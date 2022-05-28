


// day one 1 javascript challenge on youtube

// nested functions 1
let a=12
 function outer(){
   let b=10
   function inner(){
     let c =30 
     console.log(a, b, c)
   }
   inner()
 }
 outer()

// closure 
 function outter(){
   let counter = 0
   function iner(){
     counter++
     console.log(counter)
   }
iner()
  }
  outter()
  outter()
  outter()
  outter()
  outter()