

const timeDelay = 150;

const txtArea = document.querySelector('.typed-text')




function deleteLetters (value) {

    let index = value.length
    
    const endId = setInterval (() => {

        let newTxt = value.substr (0, index)
        index--   

        txtArea.innerHTML = newTxt;

        if (index == -1) {
            clearInterval (endId)
            randomIdgenerator()
        }
        
    }, timeDelay)
    

  
}

function addLetters (value) {

  let index = 0

    const startId = setInterval (() => {

        let newTxt = value.substr (0, index+1)
        index++    

        txtArea.innerHTML = newTxt;

        if (index == value.length) {
            clearInterval (startId)
            deleteLetters(value)
        }
        
    }, timeDelay)

}

function randomIdgenerator (range, arr) {

    const index = Math.floor(Math.random()*range)

    addLetters (arr[index])

}


async function newLetters() {

    let randomTextCollection = await fetch ('extraTxt.txt')

    randomTextCollection = (await randomTextCollection.text()).split('\n')    

    randomIdgenerator (randomTextCollection.length, randomTextCollection)
    
}


newLetters ()



