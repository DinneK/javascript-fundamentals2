class Robe {
  constructor() {
    this.pockets = [[], [], [], [], [], [], [], [], [], []];
  }

  addToPocket(potion) {
    for (var i = 0; 1 < this.pockets.length; i++) {
      if (!this.pockets[i].length) {
        return this.pockets[i].push(potion);
      }
    }
  }

  retrieve(item) {
    this.pockets.forEach((pocket) => {
      pocket.forEach((potion) => {
        if (potion === item) {
          pocket.pop();
        }
      });
    });
    return item;
  }

  emptyAllPockets() {
    this.pockets = [[], [], [], [], [], [], [], [], [], []];
  }
}

module.exports = Robe;
