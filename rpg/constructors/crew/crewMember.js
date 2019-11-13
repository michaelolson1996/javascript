const faker = require('faker')

module.exports = function CrewMember() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.species;
    this.item;
    this.bounty;
    this.occupation;
    this.health = {
      number: 100,
      bar: []
    };
    this.title;
  }