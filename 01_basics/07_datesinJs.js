// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

//console.log(typeof( myDate));

//let myCreatedDate = new Date(2023, 0 , 23)
//let myCreatedDate = new Date(2025, 11 , 31 ,11 , 33)
//let myCreatedDate = new Date("2025-12-31")
let myCreatedDate = new Date("12-31-2025")   // date format followed in india
//console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
    day:"numeric",
})

console.log(newDate.toLocaleString())