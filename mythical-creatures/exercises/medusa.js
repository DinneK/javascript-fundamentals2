var Person = require("./person");
var Statue = require("./statue");

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    let newStatue = new Statue(victim.name);
    if (this.statues.length < 4) {
      this.statues.push(newStatue);
    }
    if (this.statues.length > 3) {
      let newPerson = new Person(this.statues[0].name);
      this.statues.shift();
      newPerson.mood = "relieved";
      return newPerson;
    }
  }
}

module.exports = Medusa;
