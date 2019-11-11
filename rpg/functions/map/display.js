const ask = require('readline-sync');
var clear = require('clear');
const enterSolarSystem = require('../game/entersolarsystem')

const displayMap = (oldValueX, oldValueY, valueX, valueY, map, solarSystemData) => {
    let discoveredPlanet,
        joinedMapSections,
        undiscoveredPlanet,
        currentSolarSystem,
        solarSystemOptions,
        solarSystemChoice,
        randomSSIndex,
        discoveredDot,
        currentPosition,
        undiscoveredDot,
        oldPosition,
        mainShip,
        joinMap;

    randomSSIndex = () => {return Math.floor(Math.random() * solarSystemData.length)};



    joinMap = () => {
        for (let mapYIndex = 0; mapYIndex < map.length; mapYIndex++) {
            joinedMapSections.push(map[mapYIndex].join(''));
        };
        return joinedMapSections.join('');
    };


    joinedMapSections = []
    mainShip = ' > '.yellow
    discoveredPlanet = ' O '.red
    undiscoveredPlanet = ' O '.green
    discoveredDot = ' . '.blue
    undiscoveredDot = ' . '
    currentPosition = map[valueY][valueX]
    oldPosition = map[oldValueY][oldValueX]

    



    if (oldValueX !== undefined && oldValueY !== undefined) {

        if (oldPosition === mainShip && currentPosition !== oldPosition) {
            map[oldValueY].splice(oldValueX, 1, discoveredDot)
        }
    
        if (currentPosition !== discoveredPlanet && currentPosition !== undiscoveredPlanet) {
            map[valueY].splice(valueX, 1, mainShip)
        }

        if (currentPosition === undiscoveredPlanet) {
            clear()
            currentSolarSystem = solarSystemData[randomSSIndex()]

            solarSystemOptions = [
                `[1] ENTER THE [ ${ currentSolarSystem.star.star_name } ] SYSTEM \n\n`,
                ` [2] HACK THE ARCHIVE OF THE [ ${ currentSolarSystem.star.star_name } ] SYSTEM \n\n`,
                ` [3] RETURN TO THE [ ${ currentSolarSystem.star.star_name } ] SYSTEM LATER \n\n`,
                ` [4] CHECK THE STATUS OF YOUR SHIP \n\n`,
                ` [5] SAVE AND QUIT \n\n`
            ]

            if (oldPosition !== discoveredPlanet) {
                map[oldValueY].splice(oldValueX, 1, discoveredDot)
            }

            solarSystemChoice = ask.keyIn(`WE ARE CURRENTLY APPROACHING THE ${ currentSolarSystem.star.star_name } SYSTEM...\n\n\n ${solarSystemOptions.join('')}`, { limit: '$<1-5>', hideEchoBack: true })

            switch(solarSystemChoice) {
                case '1':
                    ask.keyIn('ENTERING THE SOLAR SYSTEM...', { hideEchoBack: true })
                    // enterSolarSystem(currentSolarSystem, mainPlayerShip)
                    enterSolarSystem(currentSolarSystem)

                    const newData = solarSystemData.filter(item => {
                        return item !== currentSolarSystem
                    })
                    console.log(newData.length)
                    break;
                case '2':
                    ask.keyIn('HACKING THE SOLAR SYSTEM...', { hideEchoBack: true })
                    break;
                case '3':
                    ask.keyIn('RETURN TO THE SYSTEM LATER...', { hideEchoBack: true })
                    break;
                case '4':
                    ask.keyIn('CHECKING STATUS OF SHIP...\n', { hideEchoBack: true })
                    checkShip(mainPlayerShip)
                    break;
                case '5':
                    ask.keyIn('SAVE AND QUIT...', { hideEchoBack: true })
            }
            map[valueY].splice(valueX, 1, discoveredPlanet)
        }
    }
    return joinMap()
}

module.exports = displayMap