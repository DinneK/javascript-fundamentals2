class Skatepark {
  constructor(skateParkInfo) {
    this.name = skateParkInfo.name;
    this.yearFounded = skateParkInfo.year;
    this.style = skateParkInfo.type;
    this.features = skateParkInfo.features;
    this.isPrivate = skateParkInfo.isPrivate || false;
    this.cost = skateParkInfo.price || 0;
    this.occupants = [];
  }

  admit(skater) {
    console.log(this.occupants.length);
    if (this.occupants.length >= 3) {
      return `Sorry, we are at max capacity. Thank you for understanding.`;
    }
    if (this.cost > 0 && skater.money > this.cost) {
      skater.money -= this.cost;
      this.occupants.push(skater);
      return `Welcome to Curbside, the cost will be $12.00.`;
    }
    if (this.cost > 0 && skater.money < this.cost) {
      return `Sorry, you don't have enough money.`;
    }
    this.occupants.push(skater);
    return `Welcome to the free Major Taylor Skatepark!`;
  }
}

module.exports = Skatepark;
