{
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

  //* Promise
  //? an object that represents eventual completion or failure of an asynchronous operation
  //! Promise has two part- creation and consumsion

  //* Promise creation (and storing in variable)

  //here we are holding the reference of the Promise object
  const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task - DataBase call, cryptography, network calls, setTimeout, setInterval etc

    setTimeout(function () {
      console.log("Async task 1");
      resolve();
    }, 1000);
  });

  //* Promise consumption 

  //* .then()

  //! .then() is directly related to the resolve of the Promise
  //Note: When resolve() is encountered inside the Promise call-back function, .then() is also triggered

  promiseOne.then(function () {
    console.log("Promise is consumed!");
  });
}

{
  //* Promise without adding it to any variable

  //* Promise creation and consumsion

  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async task 2");
      resolve();
    }, 1000);
  }).then(function () {
    console.log("Async task is resolved!");
  });

  //! The .then() runs if resolve() else not
}

{
  //* Passing paramters through resolve()

  const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ username: "Chai", email: "chai@example.com" }); //here we have passed a parameter in the resolve(). //! Parameter can be anything
    }, 1000);
  });

  //! here we are using a parameter, which will be the parmaeter passed in the resolve()
  promiseThree.then(function (user) {
    console.log(user);
  });

}

{

    //* using reject() and .catch()
    // this is similar to resolve(). We used .then() when something was resolved. Similarly, we use .catch() when something is rejected

    const promiseMe = new Promise (function (resolve, reject) {
        setTimeout (function(){
            let error = false //by default, there is an error

            if (!error) {
                resolve({ username: "Chai", email: "chai@example.com" })
            }

            else {
                reject('Error occured! Kindly check...')
            }
        }, 1000)
    })


    //! here if resolved, .then() is triggered else if rejected, .catch() is triggered

   promiseMe
   .then((user) => {
    console.log(user);
   })
   .catch((error) => {
    console.log(error);
   })

   
}

{

    //* .then() chaining (a.k.a. "Thenable" or "Denibal")
    //? this is used to come out of the call-back hell

    const promiseFour = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if (!error) {
                resolve({username: "hitesh", password: "123"})
            } else {
                reject('ERROR: Something went wrong')
            }
        }, 1000)
    })
    
     promiseFour
     .then((user) => { //! here the argument will be the parameter in resolve()
        console.log(user);
        return user.username //! this is returned to below
    })
    .then((username) => {//! here the argument is the returned data from above
        console.log(username);
    })
    .catch(function(error){ //! here the argument is the paramter in reject()
        console.log(error);
    })    

}

{

    //* .finally()
    //? the .finally() is triggered wheteher Promise is resolved or not!

    const promiseFour = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if (!error) {
                resolve({username: "hitesh", password: "123"})
            } else {
                reject('ERROR: Something went wrong')
            }
        }, 1000)
    })
    
     promiseFour
     .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function(error){
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))
    
 
}

{

    //* Async-await
    //Note: async/await is a modern way to handle asynchronous code in JavaScript. It makes working with Promises easier and code more readable. Before async/await, we used callbacks (😵 callback hell) or Promises (.then() chains). These worked but made code harder to read.

    //Note: await stops the execution of the async function until the Promise is either resolved or rejected. If we don't await, the code will be immediately executed and hence we won't be able to access data or do a particular task below (which might take some time to execute). Since agar data aane ka wait hi nahi kiya toh, ussse aage acess kaise karenge?? Therefore, we need to stop the execution process till kuch response aaye!

    //? We use this along with try-catch block to do the above things but this time with different approach

    
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//! async is a keyword used before the function
//! await waits for the response from return it
//! try handles the response() and catch handles the error

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive() //the async function needs to be obviously called for it to run


}

{

    //* Fetching data from API 


    //* Using async-await


    async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') //! here we have to wait (pause async function) till we get a response from the API

        const data = await response.json() //! here we do await because it takes time to convert to json file. Therefore, we need to wait else we can't acess it if we directly move to next line

        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()



//* Using .then .catch



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

//* HW

// promise.all
// yes this is also available, kuch reading aap b kro.



}


{


    //* Important point for interview

    //! Promise doesn't reject on HTTP errors (like 404 etc), even in such cases it gives response (and not rejects)
}
