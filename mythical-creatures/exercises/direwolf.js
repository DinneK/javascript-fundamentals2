class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || "Beyond the Wall";
    this.size = size || "Massive";
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (stark.location === this.home && this.starksToProtect.length < 2) {
      stark.safe = true;
      this.huntsWhiteWalkers = false;
      this.starksToProtect.push(stark);
    }
  }

  leave(stark) {
    this.starksToProtect.pop();
    stark.safe = false;
  }
}

module.exports = Direwolf;
