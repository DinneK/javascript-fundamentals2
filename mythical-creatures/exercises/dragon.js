class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.food = 0;
  }

  greet = () => {
    return `Hi, ${this.rider}!`;
  };

  eat = () => {
    this.food++;
    if (this.food >= 3) {
      this.hungry = false;
    }
  };
}
module.exports = Dragon;
