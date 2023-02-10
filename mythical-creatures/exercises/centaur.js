class Centaur {
  constructor(centaurInfo) {
    this.name = centaurInfo.name;
    this.breed = centaurInfo.type;
    this.cranky = false;
    this.standing = true;
    this.shootOrRun = 0;
    this.layingDown = false;
  }

  shootBow() {
    this.shootOrRun++;
    if (this.shootOrRun >= 3 || this.layingDown) {
      this.cranky = true;
      return `NO!`;
    }
    return `Twang!!!`;
  }

  run() {
    this.shootOrRun++;
    if (this.shootOrRun >= 3 || this.layingDown) {
      this.cranky = true;
      return `NO!`;
    }
    return `Clop clop clop clop!!!`;
  }

  sleep() {
    if (this.layingDown) {
      this.cranky = false;
      this.shootOrRun = 0;
      return `ZZZZ`;
    }
    return `NO!`;
  }

  layDown() {
    if (this.standing && !this.layingDown) {
      this.standing = false;
      this.layingDown = true;
    }
  }

  standUp() {
    if (!this.standing && this.layingDown) {
      this.standing = true;
      this.layingDown = false;
    }
  }

  drinkPotion() {
    this.cranky = false;
    if (this.layingDown) {
      return `Not while I'm laying down!`;
    }
  }
}

module.exports = Centaur;
