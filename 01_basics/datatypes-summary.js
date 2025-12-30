//Primitive

//7 types: String,Number,Boolean,null,undefined,Symbol(to make value unique),BigInt(scitenfic value or big values)


const score = 100
const scoreValue = 100.3

const isLoggedIn =  false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //return value are not same they are unique

const bigNumber = 345651465511848132n

//Reference (Non primitive)

//Array,Objects, Functions

const heros =["shaktiman","naagraj","doga"]    //array
 
let myobj={
 name:"eshwar",                                             //object
 age:23
}

const myFunction = function(){
   console.log("Hello world");
}

console.log(typeof outsideTemp);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory

//Stack(Primitive) ,Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename

anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email="eshwar@google.com"

console.log(userOne.email);
console.log(userTwo.email);
