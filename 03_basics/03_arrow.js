const user ={
    username:"hitesh",
    price: 999,
    
    welcomeMessage:function(){
       console.log(`${this.username}, welcome to website`)  // this is used for current context
       //console.log(this);        // refers to current context or variable
    }

}

//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

//console.log(this);    // inside node enviroment this refer to empty object hence its o/p is  {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  //undefined

// }

// chai()

// const chai = function (){
//      let username = "hitesh"
//     console.log(this.username);
// }


const chai = () => {
     let username = "hitesh"
    console.log(this);  // o/p : {}
}

//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2                //explict return

// }

const addTwo = (num1,num2) =>  num1 + num2  // implict return

const addtwo = (num1,num2) =>  (num1 + num2)  // implict retturn used in react

console.log(addTwo(3,4))
console.log(addtwo(6,7))

const addThree = (num1,num2) => ( {username:"hitesh"}) //implict return of object
console.log(addThree(1,4))

const myArray = [2,5,3,7,8]

