const txtArea = document.querySelector('.typed-text')



const addLetters = (value) => {

  const index = 0

    setInterval ((index) => {

        const newTxt = value.substr (0, index+1)
        index++    

        txtArea.innerHTML = newTxt;

        
    }, 200)
}

addLetters(cool)