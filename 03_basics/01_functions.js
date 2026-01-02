// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

//function defination
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

sayMyName   //reference it does not show o/p
// sayMyName()  // execution of function

// function addTwoNumbers(number1,number2){       // parameters
//        console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){       // parameters
       
    // let result = number1 + number2
    // console.log("hitesh");   
    // return result
    //console.log("hitesh");           // this line will not execute because after return statement function execution gets stop or gets end .
  
     return number1 + number2

}

const result = addTwoNumbers(3,5) //arguments

//console.log("Result",result);

function loginUserMessage(username = "sam"){  //default value

     if(!username){
           console.log("please enter the username");
           return 
    }


    // if(username === undefined){
    //     console.log("please enter the username");
    //     return

    // }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh")) // o/p:undefined 

function calculateCartPrice(val1,val2,...num1){      // ... rest operator
    return num1

}

console.log(calculateCartPrice(200,400,500,2000))  

const user ={
    username:"hitesh",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
    
}

// handleObject(user);
handleObject({
    username:"sam",
    price:399
});

const mynewArray = [200,400,100, 600]

function returnSecondValue(getArray){
    return getArray[1]

}

// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,300,400,500]));