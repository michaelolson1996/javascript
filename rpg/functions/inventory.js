const displayShipInfo = (ship) => {

    const displaySkills = (crewMember) => {
        const displayArr = []
        for (let i = 0; i < crewMember.occupations.length; i++) {
            const crewMemberRow = new Object()
            crewMemberRow.skills = crewMember.occupations[i].title
            crewMemberRow.skillLevels = new Object()
            for (let j = 0; j < crewMember.occupations[i].skills.length; j++) {
                crewMemberRow.skillLevels[`${crewMember.occupations[i].skills[j].title}`] = crewMember.occupations[i].skills[j].skillLevel
            }
            displayArr.push(crewMemberRow)
        }

        console.table(displayArr)
    }

    const displayCrew = (crew) => {
        for (let i = 0; i < crew.length; i++) {
            // console.log(` NAME: ${ crew[i].firstName } ${ crew[i].lastName }\n`)
            // console.log(` SPECIES: ${ crew[i].species }`)
            console.table({name: crew[i].firstName + ' ' + crew[i].lastName, item: crew[i].item, health: crew[i].health.number })
            displaySkills(crew[i])
        }
    }

    console.log(`Captain: ${ship.generalInfo.title}`)
    console.log(`Ship Name: ${ ship.generalInfo.captain }\n\n`)
    console.log(`Inventory`)
    console.table(ship.inventory)
    console.log(`NUMBER OF CREW MEMBERS: ${ ship.generalInfo.crewMembers.numOfMembers }\n`)
    displayCrew(ship.generalInfo.crewMembers.members)
}

module.exports = { displayShipInfo }