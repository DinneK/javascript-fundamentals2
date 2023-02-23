class Potion {
  constructor(name, rare) {
    this.name = name;
    this.rareness = rare || 0;
  }

  isRare() {
    if (this.rareness <= 7) {
      return false;
    }
    return true;
  }
}

module.exports = Potion;
