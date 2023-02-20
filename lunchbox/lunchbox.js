class LunchBox {
  constructor(lunchBoxInfo) {
    this.owner = lunchBoxInfo.owner;
    this.material = lunchBoxInfo.madeOf;
    this.shape = lunchBoxInfo.shape;
    this.color = lunchBoxInfo.color;
    this.snacks = [];
  }

  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }

  findHealthySnacks() {
    return this.snacks
      .filter((snack) => snack.type.toLowerCase().includes("fruit"))
      .map((snack) => snack.type);
  }
}

module.exports = LunchBox;
