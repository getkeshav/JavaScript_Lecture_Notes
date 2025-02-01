window.addEventListener ('keydown', (e) => {
    document.getElementById('a1').innerHTML = `${e.key}`
})


window.addEventListener ('keyup', (e) => {
    document.getElementById('a2').innerHTML = `${e.key}`
})

window.addEventListener ('keypress', (e) => {
    document.getElementById('a3').innerHTML = `${e.code}`
})








