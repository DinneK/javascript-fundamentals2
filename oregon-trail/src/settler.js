class Settler {
  constructor(settlerInfo) {
    this.name = settlerInfo.name;
    this.age = settlerInfo.age;
    this.nationality = settlerInfo.nationality || "unknown";
    this.status = "healthy";
    this.ailments = [];
  }

  experienceDistress(ailment) {
    if (this.ailments.length < 3) {
      this.ailments.push(ailment);
    }

    if (this.ailments.length === 1) {
      this.status = "fair";
    }

    if (this.ailments.length === 2) {
      this.status = "poor";
    }

    if (this.ailments.length >= 3) {
      this.status = "dead";
    }
  }

  heal() {
    if (this.status === "dead") {
      return `Sorry, we can't heal a corpse. ${this.name} needs a proper burial!`;
    }
    this.ailments = [];
    this.status = "healthy";
  }
}

module.exports = Settler;
