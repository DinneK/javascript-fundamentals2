class Roadrace {
  constructor(raceInfo) {
    this.name = raceInfo.title;
    this.location = raceInfo.city;
    this.distance = 0;
    this.participants = [];
  }

  setDistance(distance) {
    this.distance = distance;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`;
  }

  registerParticipants(human) {
    this.participants.push(human);
  }

  completeRace() {
    // WITH A FOR LOOP
    // for (var i = 0; i < this.participants.length; i++) {
    //   this.participants[i].completedRaces.push(this.name);
    //   this.participants[i].runSomeMiles(this.distance);
    // }

    //WITH FOREACH or MAP
    this.participants.forEach((runner) => {
      runner.completedRaces.push(this.name);
      runner.runSomeMiles(this.distance);
    });
  }
}

module.exports = Roadrace;
