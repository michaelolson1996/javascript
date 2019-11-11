const ask = require('readline-sync')

module.exports = {
    captainName: ask.question('What is your name?'),
    shipName: ask.question('What is the name of your vessel?')
}