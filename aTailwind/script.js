


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
return iner
  }
  const nf= outter()
 
 nf()
 nf()


//  function currying 

function summ(a , b, c){
  return a +b+c
}
console.log(summ(23,3,45))


// 
function curry(fn){
  return function(a){
    return function(b){
      return function(c){
        return fn(a, b, c)
      }
    }
  }
}

const curriedSum =curry(summ)
console.log (curriedSum(2)(3)(5))

const add2 = curriedSum(2)
const add3 = add2(3)
 const add5 = add3(5)
 console.log(add5)

//  tiigsi week3 day1 part 3


const khudaar= ["canbe " , "muus" ,"cinab"];
// pop
console.log(khudaar);
khudaar.pop();
console.log(khudaar);
khudaar.push("bighead")
console.log(khudaar)
khudaar.shift
console.log(khudaar)
khudaar.unshift("caadil")
console.log(khudaar)
khudaar.splice(0,1,2,);
console.log(khudaar)

