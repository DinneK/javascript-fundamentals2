class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group) {
    if (this.openings > group.length) {
      group.forEach((golfer) => this.currentlyPlaying.unshift(golfer.name));
      this.openings -= group.length;
      return `You're checked in. Have fun!`;
    }
    return `Sorry, we are currently booked! Please come back later.`;
  }
}

module.exports = GolfCourse;
