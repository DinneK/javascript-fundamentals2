class Being {
  constructor(name, species) {
    this.isAlive = true;
    this.name = name;
    this.species = species;
    this.credits = 0;
  }

  updateCredits(cred) {
    this.credits += cred;
  }
}

module.exports = Being;
