const height = document.getElementById ('height')
const weight = document.getElementById ('weight')

const bmi = weight / ((height/100)**2)

alert (`Your BMI is: ${bmi}`)

