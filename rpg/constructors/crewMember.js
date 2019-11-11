const faker = require('faker')

module.exports = function CrewMember() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.species = '';
    this.occupations = [
      {
        title: 'Pilot',
        skills: [
          {
            title: ' Evasion ',
            skillLevel: 0,
            description: ''
          },
          {
            title: ' Maneuvor ',
            skillLevel: 0,
            description: ''
          }
        ]
      },
      {
        title: 'Mechanic',
        skills: [
          {
            title: ' Ship Repair ',
            skillLevel: 0,
            description: ''
          },
          {
            title: ' Innovation ',
            skillLevel: 0,
            description: ''
          }
        ]
      },
      {
        title: 'Fighter',
        skills: [
          {
            title: ' Attack ',
            skillLevel: 0,
            description: ''
          },
          {
            title: ' Defense ',
            skillLevel: 0,
            description: ''
          }
        ]
      },
      {
        title: 'Hacker',
        skills: [
          {
            title: ' FireWall ',
            skillLevel: 0,
            description: ''
          },
          {
            title: ' Hacking ',
            skillLevel: 0,
            description: ''
          }
        ]
      },
      {
        title: 'Merchant',
        skills: [
          {
            title: ' Negotiations ',
            skillLevel: 0,
            description: ''
          },
          {
            title: ' Networking ',
            skillLevel: 0,
            description: ''
          }
        ]
      },
      {
        title: 'Assassin',
        skills: [
          {
            title: ' Sleight Of Hand ',
            skillLevel: 0,
            description: ''
          },
          {
            title: ' Valor ',
            skillLevel: 0,
            description: ''
          }
        ]
      },
      {
        title: 'Shaman',
        skills: [
          {
            title: ' Energy Manipulation ',
            skillLevel: 0,
            description: ''
          },
          {
            title: ' Spirit Animal ',
            skillLevel: 0,
            description: ''
          }
        ]
      }
    ];
    this.item = null;
    this.bounty = null;
    this.health = {
      number: 100,
      bar: []
    };
    this.title = undefined;
  }