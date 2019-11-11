const map = require('./image.js') 
const colors = require('colors')

const createMap = () => {
    let mapXAxis, 
        mapYAxis, 
        planetPosition, 
        solarSystemPositions;

    for (solarSystemPositions = 0; solarSystemPositions < 50; solarSystemPositions++) {
        mapXAxis = Math.floor(Math.random() * (map.length - 1))
        mapYAxis = Math.floor(Math.random() * (map.length - 1))
        planetPosition = map[mapYAxis][mapXAxis]
        map[0][0] = ' > '.yellow
        if (planetPosition === ' . ') {
            map[mapYAxis].splice(mapXAxis, 1, ' O '.green)
        } else {
            solarSystemPositions--
        }
    }
    return map
}

module.exports = createMap