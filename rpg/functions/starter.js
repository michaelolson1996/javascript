const CrewMember = require('../constructors/crew/crewMember')
const Ship = require('../constructors/ships/ship')
const shipImg = require('../images/ship').shipImg

const generateFriendlyShip = (shipName, captainName) => {
    const isAIOperated = false
    const crewArr = []
    for (let occupation = 0; occupation < 3; occupation++) {
        const crewMember = new CrewMember()
        for (let i = 0; i < crewMember.occupations[occupation].skills.length; i++) {
            crewMember.occupations[occupation].skills[i].skillLevel += 10
        }
        crewArr.push(crewMember)
    }
    const ship = new Ship(shipName, captainName, shipImg, crewArr, isAIOperated)
    return ship
}

module.exports =  generateFriendlyShip