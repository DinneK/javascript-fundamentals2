class Part {
  constructor(partsInfo) {
    this.name = partsInfo.name;
    this.type = partsInfo.type;
    this.value = partsInfo.value;
    this.broken = false;
    this.isValid = true;
  }
  checkForValidity() {
    if (this.name === undefined) {
      this.isValid = false;
      return `This part needs a name!`;
    }

    if (this.type === undefined) {
      this.isValid = false;
      return `This part needs a type!`;
    }

    if (this.value === undefined) {
      this.isValid = false;
      return `This part needs a value!`;
    }
    if (this.name && this.type && this.value) {
      this.isValid = true;
    }
  }
}

module.exports = Part;
