class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  fill(candy) {
    this.candies.push(candy);
    this.count = this.candies.length;
  }

  contains(candyType) {
    return this.candies[0].type.includes(candyType) ? true : false;
  }
}

module.exports = Bag;
