const fetch = require('node-fetch')
const fs = require('fs')

let maxNumber = 35500
let randomNumber = Math.floor(Math.random() * maxNumber)

async function getClues() {
    const response = await fetch('https://jservice.kenzie.academy/api/clues?offset=' + randomNumber)
    const { clues } = await response.json()
    console.log(clues)

    fs.writeFileSync('clues.json', JSON.stringify(clues))
}

getClues()