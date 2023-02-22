class Wagon {
  constructor(wagonInfo) {
    // console.log({ wagonInfo });
    this.title = wagonInfo.name;
    this.wheels = wagonInfo.wheels || [];
    this.axles = wagonInfo.axles || [];
    this.oxen = wagonInfo.oxen || [];
    this.yokes = wagonInfo.yokes || [];
    this.food = wagonInfo.food;
    this.ammunition = wagonInfo.ammunition;
    this.clothes = wagonInfo.clothes;
    this.settlers = wagonInfo.settlers || [];
  }

  addPart(part) {
    if (part.type === "wheel") {
      this.wheels.push(part);
    }

    if (part.type === "axle") {
      this.axles.push(part);
    }

    if (part.type === "ox") {
      this.oxen.push(part);
    }

    if (part.type === "yoke") {
      this.yokes.push(part);
    }
  }

  canTravel() {
    for (var i = 0; i < this.settlers.length; i++) {
      if (this.settlers[i].status === "dead") {
        return false;
      }
    }

    for (var i = 0; i < this.wheels.length; i++) {
      if (this.wheels[i].broken) {
        return false;
      }
    }

    for (var i = 0; i < this.axles.length; i++) {
      if (this.axles[i].broken) {
        return false;
      }
    }

    for (var i = 0; i < this.oxen.length; i++) {
      if (this.oxen[i].broken) {
        return false;
      }
    }
    if (this.yokes.length !== this.oxen.length / 2) {
      return false;
    }

    if (
      this.wheels.length < 4 ||
      this.axles.length < 2 ||
      this.oxen.length < 2 ||
      this.yokes.length < 1 ||
      this.settlers.length < 1
    ) {
      return false;
    }
    return true;
  }
}

module.exports = Wagon;
