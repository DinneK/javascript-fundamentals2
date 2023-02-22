class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.numberOfBreaks = 0;
  }

  break() {
    this.broken = true;
    this.numberOfBreaks++;
  }

  repair() {
    if (this.numberOfBreaks < 2) {
      this.broken = false;
    }
    return `This ${this.type} has seen better days, we'll need a brand new one!`;
  }
}

module.exports = Part;
