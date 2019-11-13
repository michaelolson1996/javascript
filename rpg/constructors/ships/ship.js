module.exports = function Ship(title, captain, image, crewMembers) {
    this.image = image;
    this.generalInfo = {
        title: title,
        captain: captain,
        crewMembers: {
            numOfMembers: crewMembers.length,
            members: crewMembers
        }
    };
    this.inventory = {
        scraps: 500,
        health: 100,
        fuel: 1000,
        shields: [],
        weapons: []
    };
    this.systems = [];
    this.rooms = [];
    this.showRoom = function (roomNumber) {
        for (let i = 0; i < this.rooms[roomNumber].visual.length; i++) {
            console.log(this.rooms[0].visual[i].join(''))
        }
    }
}

// missile: {
//     title: [],
//     ammo: 20
// },
// drone: {
//     title: [],
//     ammo: 3
// },
// laser: {
//     title: [],
//     ammo: 50
// },
// ion: {
//     title: [],
//     ammo: 0
// }


// {
//     title: 'engine',
//     disabled: false,
//     level: 100
// },
// {
//     title: 'controls',
//     disabled: false,
//     level: 100
// },
// {
//     title: 'oxygen',
//     disabled: false,
//     level: 100
// },
// {
//     title: 'shields',
//     disabled: false,
//     level: 100
// },
// {
//     title: 'radio',
//     disabled: false,
//     level: 100
// },
// {
//     title: 'armory',
//     disabled: false,
//     level: 100
// },
// {
//     title: 'fuel',
//     disabled: false,
//     level: 100
// },
// {
//     title: 'solar',
//     disabled: false,
//     level: 100
// },
// {
//     title: 'health',
//     disabled: false,
//     level: 100
// }
