class Planet {
  constructor(planetInfo) {
    this.name = planetInfo.name;
    this.shop = planetInfo.shop;
    this.currentShip;
    this.coordinates = planetInfo.coordinates;
  }

  landShip(ship) {
    this.currentShip = ship;
  }

  calculateDistance(otherPlanet) {
    const x = otherPlanet.coordinates.x - this.coordinates.x;
    const y = otherPlanet.coordinates.y - this.coordinates.y;
    const z = otherPlanet.coordinates.z - this.coordinates.z;

    return Math.sqrt(x * x + y * y + z * z);
  }

  refuel(ship) {
    // console.log({ ship });
    // console.log("fuel: ", ship.fuel);
    // console.log("current.ship: ", this.currentShip.fuel);
    // console.log("current.ship: ", this.currentShip.fuelCapacity);
    this.currentShip.fuel = this.currentShip.fuelCapacity;
  }

  giveClearance(otherPlanet) {
    if (this.currentShip.fuel) {
      this.currentShip.fuel = 0;
      otherPlanet.currentShip = this.currentShip;
      this.currentShip = null;
      return `Clearance granted: Enjoy your trip to ${otherPlanet.name}`;
    }
    return `Clearance denied: Cannot fly without fuel`;
  }
}

module.exports = Planet;
