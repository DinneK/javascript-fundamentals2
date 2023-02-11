class Ogre {
  constructor(ogreInfo) {
    this.name = ogreInfo.name;
    this.home = ogreInfo.abode || "Swamp";
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++;
    if (human.encounterCounter === 2) {
      this.swingAt();
    }
    if (human.encounterCounter === 6) {
      this.swings++;
      human.knockedOut = true;
    }
  }

  swingAt() {
    this.swings++;
  }

  apologize(human) {
    if (human.knockedOut) {
      human.knockedOut = false;
    }
  }
}

module.exports = Ogre;
