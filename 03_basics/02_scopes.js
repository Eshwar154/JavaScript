///Scope 
//keyword let const and var
// var does not work as blocked scope


//var c =300 

let a = 300

if(true){
  let a = 10
  const b = 20
  var c = 30     // var get access outside  it's block scope  
      d = 40  // this also get access outside it's block scope

      // console.log("Inner:",a);
      
}

//console.log(a); //error
//console.log(b); //error
// console.log(c); // 30
// console.log(d)   //40
// console.log(a)

function one(){
  const username = "hitesh"

  function two(){
    const website = "youtube"
    console.log(username);
  }
  //console.log(website);

 // two()
}

one()
    
if(true){
  const username = "hitesh"
  if(username === "hitesh"){
    const website = "youtube"
   // console.log(username + website);
  }
 // console.log(website);                       // error
}

//console.log(username);                        //error


// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){              // function 
   return num + 1;
}

addTwo(5)

const addTwo = function(num){     // expression 
  return num +2 ;
}

// in js in var we store anything array function or object also

