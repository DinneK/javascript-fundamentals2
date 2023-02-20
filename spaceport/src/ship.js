var Part = require("./part.js");

class Ship {
  constructor(shipInfo) {
    this.name = shipInfo.name;
    this.type = shipInfo.type;
    this.maxCrew = shipInfo.maxCrew;
    this.odometer = shipInfo.odometer || 0;
    this.fuelCapacity = shipInfo.fuelCapacity || 10;
    this.fuel = 0;
    this.captain = shipInfo.captain;
    this.crew = [];
    this.cargo = [];
    this.parts = shipInfo.parts || {};
    this.readyToFly = true;
  }

  addCrew(crewBeings) {
    crewBeings.forEach((being) => {
      if (this.crew.length < this.maxCrew && being.isAlive) {
        this.crew.push(being);
      }
    });
  }

  loadCargo(cargo) {
    if (cargo instanceof Part) {
      this.cargo.push(cargo);
    }
  }

  updatePart(part) {
    if (this.parts[part.type]) {
      const difference = this.parts[part.type].value - part.value;
      this.parts[part.type] = part;
      return difference;
    }
    this.parts[part.type] = part;
  }

  checkReadiness() {
    if (!this.captain) {
      this.readyToFly = false;
      return `Cannot fly without a captain`;
    }

    if (!this.fuel) {
      this.readyToFly = false;
      return `Cannot fly without fuel`;
    }

    if (Object.keys(this.parts).length === 0) {
      this.readyToFly = false;
      return `Cannot fly without parts`;
    }

    return `Good to go!`;
  }
}

module.exports = Ship;
