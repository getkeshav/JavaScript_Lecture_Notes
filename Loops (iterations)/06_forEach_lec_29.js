{
  //* forEach - method in array

  const arr = ["Pranaw, 26, true, undefined"];

  //? forEach takes a callback function (function without a name) as a parameter

  //! Passing a normal callback function
  arr.forEach(function (val) {
    console.log(val); //prints values
  });

  //!Another variation - using arrow function

  arr.forEach((item) => {
    console.log(item);
  });

  //! Using another function (as a reference) as an parameter for forEach

  function printME(item) {
    console.log(item);
  }

  arr.forEach(printME); //Note: Here a reference of another function is passed and not the actual execution of the function
}

{
  //* More paramters

  //! First parameter is the value, second parameter is for index and third parameter is for the array itself. Second and third parameters are optional

  const arr = ["Pranaw", true, 18, undefined, "Kumar"];

  arr.forEach((val, index, arr) => {
    console.log(`Index : ${index}   Value : ${val}`);
    console.log(arr);
  });
}

{

  //* Using forEach on an array of objects
  
  const myArray = [
    {
      languageName: "JavaScipt",
      languageFileName: "js",
    },

    {
      languageName: "C++",
      languageFileName: "cpp",
    },

    {
      languageName: "Python",
      languageFileName: "py",
    },
  ];

  myArray.forEach ( (val) => {
    console.log(`Language name is ${val.languageName} and file name is ${val.languageFileName}`);
  })
}
