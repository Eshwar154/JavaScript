// singleton  making object by constructor is called singleton

//Object.create

// object literals

//symbol declaration
const mySym = Symbol("key1")

//Object literal
const JsUser = {
    name: "hitesh",   //here name key is also a string in object
    "full name":"Hitesh Choudhary", // now we cannot access this value  as .full name by anychance.
    [mySym]:"mykey1",  // [mySym] this syntax makes it symbol in object
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof(JsUser[mySym]))

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)                     // lock the object
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
}

console.log(JsUser.greeting()) 
console.log(JsUser.greetingTwo()) 