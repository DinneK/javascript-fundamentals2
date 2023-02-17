class TrickOrTreater {
  constructor(costumeInfo, bagInfo) {
    this.dressedUpAs = costumeInfo.style;
    this.bag = bagInfo;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy) {
    this.bag.candies.push(candy);
    this.hasCandy = true;
    this.countCandies = this.bag.candies.length;
    this.bag.count = this.countCandies;
  }

  eat() {
    this.bag.candies.pop();
    this.countCandies = this.bag.candies.length;
  }
}

module.exports = TrickOrTreater;
