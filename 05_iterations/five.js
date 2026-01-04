const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(  function (item){
//     console.log(item);
// })

// coding.forEach( (val) => {
//     console.log(val);
    
// });

function printme(item){
   // console.log(item);
}

//coding.forEach(printme)  // inside for each loop reference of another function is should be there

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);

})

const mycoding = [
    {
       languagename:"javascript",
       languagefileName:"js",
    },
    {
       languagename:"java",
       languagefileName:"java",
    },
    {
       languagename:"python",
       languagefileName:"py",
    }
]


// database retrun array which object in it this used in that case
mycoding.forEach((item)=>{
  console.log(item.languagename);
})