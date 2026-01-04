function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username,email,password){
    SetUsername.call(this,username)             //here we pass the this  of this execution context hence after the above function get removed from call stack we can access it here.
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai)