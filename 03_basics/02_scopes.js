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

      console.log("Inner:",a);
      
}

//console.log(a); //error
//console.log(b); //error
console.log(c); // 30
console.log(d)   //40
console.log(a)

for (let i = 0; i < array.length; i++) {
  const element = array [i];
  
}
    


