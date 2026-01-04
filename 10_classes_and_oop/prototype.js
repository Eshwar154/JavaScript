let myName = "Hitesh      "
let mychannel = "chai      "

//console.log(myName.truelength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
       // console.log(`Spidy power is ${this.spiderman}`);
    }



}

Object.prototype.hitesh =  function(){
     //console.log(`hitesh is present in all object`)
}

Array.prototype.heyhitesh = function(){
   // console.log('hitesh say hello');
}

//heroPower.hitesh()
//myHeros.hitesh()                
// heroPower.heyhitesh()

//if add property using prototype in object it comes bydefault in func,arr,string
//But if add it in arr and tries to use it on object it does not works. 

const User = {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo:true
}
const TeachingSupport= {
    makeVideo:false
}

const TASupport = {
    makeAssignment:'JS assignment',
    fulltime:true,
    __proto__:TeachingSupport

}

Teacher.__proto__ = User
//console.log(TASupport.makeVideo)

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher) //(child,parent)

let anotherUsername = "ChaiAurCode"

String.prototype.truelength = function(){
  
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.truelength()
"hitesh".truelength()
"iceTea".truelength()