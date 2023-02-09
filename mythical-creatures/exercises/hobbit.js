class Hobbit {
  constructor(hobbitInfo) {
    this.name = hobbitInfo.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = true;
  }

  celebrateBirthday = () => {
    this.age++;
    if (this.age > 32) {
      this.adult = true;
    }
    if (this.age > 100) {
      this.old = true;
    }
  };

  getRing = () => {
    if (this.name !== "Frodo") {
      this.hasRing = false;
      return "You can't have it!";
    }
    return "Here is the ring!";
  };
}
module.exports = Hobbit;
