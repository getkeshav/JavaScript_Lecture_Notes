function outer () {
    let count = 0;

    return function inner () {
        count ++
        console.log(count);
    }
}

let x = outer()

x() //1
x()
x()