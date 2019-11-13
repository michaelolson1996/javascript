const RandShip = require('./ship')
const CrewMember = require('./crewMember')
const faker = require('faker')

const generateShipDetails = () => {
    let enemyIndex, shipName, isGood;
    isGood = generateRandBool()
    enemyIndex = Math.floor(Math.random() * 5);
    shipName = generateShipName()
    if (enemyIndex > 0) {
        getCrewOccupations(enemyIndex, shipName)
    } else {
        generateShipInterior([], true, isGood, shipName)
    }
}

const generateRandBool = () => {
    return Math.random() < 0.5
}

const generateShipName = () => {
    let charIndex, randomChar, shipName, joinedShipName, characters;
    characters = "AZM6XNC0BV3SL2DK1FJ4GH5PO7IUYTQ9WE8RP"
    shipName = []
    for (charIndex = 0; charIndex < 12; charIndex++) {
        randomChar = () => {return Math.floor(Math.random() * characters.length)}
        if (shipName.length < 2) {
            shipName.push('0')
        } else if (shipName.length === 6) {
            shipName.push('-')
        } else {
            shipName.push(characters[randomChar()])
        }
    }
    joinedShipName = shipName.join('')
    return joinedShipName
}

const getCrewOccupations = (enemyIndex, shipName) => {
    let enemyOccupation, isAIOperated, isGood, enemyCrewArr;
    enemyCrewArr = [];
    isAIOperated = generateRandBool()
    isGood = generateRandBool();
    enemyOccupation = Math.floor((Math.random() * 6) + 1)

    for (let enemyCrew = 0; enemyCrew < enemyIndex; enemyCrew++) {
        const crewMember = new CrewMember()
        if (enemyCrewArr.length === 0 && isAIOperated === false) {
            enemyOccupation = 0
        }
        for (let enemySkills = 0; enemySkills < crewMember.occupations[enemyOccupation].skills.length; enemySkills++) {
            crewMember.occupations[enemyOccupation].skills[enemySkills].skillLevel += 10
        }
        enemyCrewArr.push(crewMember)
    }

    generateShipInterior(enemyCrewArr, isAIOperated, isGood, shipName)

    // ship = new RandShip(shipName, faker.name.findName(), '', enemyCrewArr)
    // ship.generalInfo.isGood = isGood
    // ship.generalInfo.isAIOperated = isAIOperated


    // return ship
}

const generateShipInterior = (crewMembers, isAIOperated, isGood, shipName) => {
    console.log(crewMembers)
}

module.exports = generateShipDetails