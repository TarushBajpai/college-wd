// let promise = new Promise((resolve,reject) =>{

//     let age = 45;

//     if(age>=18) resolve("you can paas; resolve is running");
//     else reject("you can't pass; reject is running")
// });

// promise.then(msg => console.log(msg));
// promise.catch(err=>console.log(err));

let promiseTwo = new Promise((resolve,reject)=>{
    let num = 36;
    if(num%2 == 0) resolve(num);
    else reject(num)
});
promiseTwo
    .then(num => {
        console.log(num);   
        return num * 2;
    })
    .then(num => {
        console.log(num);  
        return num + 1;
    })
    .then(num => {
        console.log(num);   
    })
    .catch(err => {
        console.log(err);
    });
    