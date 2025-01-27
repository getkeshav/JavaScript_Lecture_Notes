{
  //* Chaining (takes place left to right)

  const myNum = [5, 26, 28, 0, 9, 10];

  const newNums = myNumers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);

    //const newNums = myNumers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40);

  console.log(newNums);
}
