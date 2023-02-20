class Snack {
  constructor(type) {
    this.deliciousLevel = "extra";
    this.type = type;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
  }

  getEaten() {
    this.amount -= 10;
    if (this.amount < 30) {
      this.cuttingItClose = true;
    }
  }

  checkForHealthy() {
    if (this.type.toLowerCase().includes("fruit")) {
      return true;
    }
    return false;
  }
}

module.exports = Snack;
