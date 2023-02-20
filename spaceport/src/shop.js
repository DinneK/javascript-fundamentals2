var Part = require("./part.js");
// var Ship = require("./ship.js");
var Being = require("./being.js");

class Shop {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.inventory = {};
  }

  addInventory = (inven) => {
    if (inven instanceof Part) {
      this.inventory[inven.type] = inven;
    }
  };

  outfitShip(ship, type) {
    if (!ship.captain) {
      return `cannot outfit a ship without a captain`;
    }

    if (this.inventory[type].value > ship.captain.credits) {
      return `you require ${(this.inventory[type].value -=
        ship.captain.credits)} more credits to make this purchase`;
    }

    ship.captain.credits -= this.inventory[type].value;

    ship.parts[type] = this.inventory[type];
    this.inventory = {};

    return `${type} added to ship`;
  }
}

module.exports = Shop;
