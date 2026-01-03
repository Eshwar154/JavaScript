//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
   console.log(`DB CONNECTED`);
})();         ///; is necessary to end its execution here

//({function defination})(execution call)

//sometimes problem is do you to global scope pollution  problem ie to remove global scope variable or declaration pollution to remove it we use IIFE.


//IIFE with arrow function
( (name) => {
    //unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')