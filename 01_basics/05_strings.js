const name = "eshwar"
const repocount = 10

//console.log(name + repocount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); // modern way stringinterpolation

//declaration of string

const gameName = new String("eshwar-hhc")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('w'));

const newString = gameName.substring(0,4) //it does not take -ve value
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "  eshwar  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
 
console.log(gameName.split('-'));

const str1 = "Hello"
const str2 = "World"

console.log(str1.concat(" ",str2));

const paragraph = "I think Ruth's dog is cuter than your dog!";