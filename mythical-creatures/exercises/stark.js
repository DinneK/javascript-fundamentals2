var Direwolf = require("./direwolf");

class Stark {
  constructor(starkInfo) {
    this.name = starkInfo.name;
    this.location = starkInfo.area || "Winterfell";
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe) {
      return `The North Remembers`;
    }
    return `Winter is Coming`;
  }

  callDirewolf(wolf) {
    let newDirewolf = new Direwolf(wolf, this.location);
    newDirewolf.protect(this);
    return newDirewolf;
  }
}

module.exports = Stark;
