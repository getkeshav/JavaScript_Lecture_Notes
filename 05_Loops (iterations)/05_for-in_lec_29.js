{
  //* For-in -- gives the key directly

  //* For-in on objects

  const obj = {
    name: "Pranaw",
    age: 18,
    greet: function () {
      console.log("Hello World!");
    },
  };

  for (const key in obj) {
    //console.log(key); -- to get the keys
    //console.log(obj[key]); -- to get the values

    console.log(`${key} : ${obj[key]}`);
  }
}

{
  //* for-in on arrays

  const arr = [26, "Pranaw", undefined, true, "Kumar"];

  for (const val in arr) {
    //console.log(val); -- prints the keys (indexes) of the array
    console.log(arr[val]); // gives the values of the array
  }
}

{
  const mapName = new Map();

  mapName.set("IN", "India");
  mapName.set("USA", "United States of America");
  mapName.set("Fr", "France");

  //! Here nothing happens (iterartions can't be done)
  for (const key in mapName) {
   console.log(key);
  }

 
}
