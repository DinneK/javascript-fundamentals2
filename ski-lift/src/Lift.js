var Skier = require("./Skier");

class Lift {
  constructor(max) {
    this.inService = true;
    this.limit = max;
    this.skiers = [];
    this.safetyBar = "up";
  }

  admitSkier(human, ticket) {
    const newSkier = new Skier(human, ticket);

    if (!ticket) {
      return `Sorry, ${human}. You need a lift ticket!`;
    }

    if (this.limit > this.skiers.length && ticket) {
      this.skiers.push(newSkier);
    }

    return `Sorry, ${human}. Please wait for the next lift!`;
  }

  startLift() {
    const needed = this.limit - this.skiers.length;

    if (this.skiers.length === this.limit) {
      this.safetyBar = "down";
    }
    if (needed === 1) {
      const needed = this.limit - this.skiers.length;
      return `We still need ${needed} more skier!`;
    }

    if (needed > 1) {
      const needed = this.limit - this.skiers.length;
      return `We still need ${needed} more skiers!`;
    }
  }
}

module.exports = Lift;
