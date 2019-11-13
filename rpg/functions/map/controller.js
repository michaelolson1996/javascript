const solarSystemGenerator = require('../solarsystem/create')
const initCrewMember = require('../../constructors/crew/crewMember')
const generateMainShip = require('../starter')
const shipImg = require('../../images/ship')
const createMap = require('./create');
const displayMap = require('./display');
const ask = require('readline-sync');
var clear = require('clear');

async function mapControls() {
    let key, oldValueX, oldValueY;
    let max = 19;
    let min = 0;
    let valueX = 0;
    let valueY = 0;
    oldValueX = 0;
    oldValueY = 0;
    let map = createMap();

    // let mapp = {
    //     max: 19,
    //     min: 0,
    //     newValue: {
    //         x: 0,
    //         y: 0
    //     },
    //     oldValue: {
    //         x: undefined,
    //         y: undefined
    //     },
    //     create: createMap()
    // }

    let solarSystemArr = await solarSystemGenerator().then(data => {
        return data
    });

    let $title = ask.keyIn("What would you like your ship name to be good sir?")
    let $captain = ask.keyIn("And what is your name?")
    let initCrewArr = []

    for (let i = 0; i < 2; i++) {
        let newMember = initCrewMember()
        initCrewArr.push(newMember)
    }

    let mainShip = generateMainShip($title, $captain)

    while (true) {
        clear()

        console.log(`\n [w] = "UP"\n [a] = "LEFT"\n [d] = "RIGHT"\n [s] = "DOWN"\n [space] = "MORE OPTIONS"\n\n\n`)
        console.log(`${ displayMap(oldValueX, oldValueY, valueX, valueY, map, solarSystemArr, mainShip) }`)

        oldValueX = valueX;
        oldValueY = valueY;

        key = ask.keyIn('', { hideEchoBack: true, mask: '', limit: 'wads ' });

        if (key === 'w' && valueY > min) { valueY-- }
        else if (key === 'a' && valueX > min) { valueX-- }
        else if (key === 's' && valueY < max) { valueY++ }
        else if (key === 'd' && valueX < max) { valueX++ }
        else if (key === ' ') { ask.keyInYN('are you sure you want to quit?\n (Y/N)') }
        else { continue }
    }
}

module.exports = mapControls