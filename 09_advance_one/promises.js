//Promises

const promiseOne = new Promise(function(resolve,reject){
    // DO an async task
    //DB calls ,cryptography,network
    setTimeout(function(){
       console.log('Async task is complete');
       resolve()
    },1000)

})

promiseOne.then(function(){
    console.log("promise consumed");
    
})      //.then() is direct relation with resolve

new Promise(function(resolve , reject){
    setTimeout(function(){
            console.log("Async task 2");
            resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
     setTimeout(function(){
      resolve({username:"chai",email:"chai@example.com"})
     },1000)
})

promiseThree.then(function(user){
   console.log(user);
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
         let error = true
         if(!error){
            resolve({username:"hitesh",password:"123"})
         }else{
            reject('ERROR: something went wrong')
         }
    },1000)

})

 promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);

}).catch(function(error){
   console.log(error);
}).finally(() => console.log("the promise is either resolved  or rejected"))   //this executes every time

const  promiseFive = new Promise(function(resolve,reject){
        setTimeout(function(){
         let error = true
         if(!error){
            resolve({username:"javascript",password:"123"})
         }else{
            reject('ERROR: JS went wrong')
         }
    },1000)
});

async function consumePromiseFive(){
    //  const reponse = await promiseFive        /// they do not directly handle the error
    //  console.log(reponse);
    try {
        const reponse = await promiseFive        /// they do not directly handle the error
        console.log(reponse);
    } catch (error) {
        console.log(error);
    }

}

consumePromiseFive()

// async function getAllData(){
//   try {
//      const response =  await fetch('https://randomuser.me/api/')                                   //fetch is now object   
    
//    const data = await response.json()       // response.json requires time as data get convert in json hence we use await here 
//    console.log(data);
//   } catch (error) {
//     console.log("E:" , error);
//   }
   
// }



//getAllData();

fetch('https://randomuser.me/api/')
.then((response) =>{
    return response.json()
})
.then((data) =>{              // the 1st then sends the response in json to get it we use another then this called chaining
    console.log(data);
})
.catch((error)=> console.log(error))