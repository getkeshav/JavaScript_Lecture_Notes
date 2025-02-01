/*

//* Key-Takeaways-

//! parseInt ()
//! isNaN ()
//! 'submit' type event
//! e.preventDefault()



*/



const form = document.querySelector ('form')

form.addEventListener ('submit', function (e) {
    e.preventDefault()

    const height = parseInt (document.querySelector('#height').value)

    const weight = Number (document.querySelector('#weight').value)

    const result = document.querySelector ('#results')

    if (height == '' || height < 0 || isNaN (height)) {
        result.appendChild (document.createTextNode ('Kindly enter a valid height!'))
    }

    else if (weight == '' || weight < 0 || isNaN (weight)) {
        result.appendChild (document.createTextNode ('Kindly enter a valid weight!'))
    }

    else {
        const bmi = Number (weight /((height**2)/10000)).toFixed(2)

        if (bmi < 18.6) {
            result.innerHTML = `<span>BMI: ${bmi}. You are underweight!</span>`
        }

        else if (bmi >= 18.6 && bmi < 24.9) {
             result.innerHTML = `<span>BMI: ${bmi}. You have normal BMI!</span>`
        }

        else {
            result.innerHTML = `<span>BMI: ${bmi}. You are overweight!</span>`
        }
    
    }
});