class Golfer {
  constructor(golferInfo) {
    this.name = golferInfo.name;
    this.handicap = golferInfo.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    return `I usually shoot a ${par + this.handicap} on average.`;
  }

  playRound(course) {
    if (course.difficulty === "hard") {
      this.frustration = 500;
    }
    if (course.difficulty === "moderate") {
      this.frustration = 100;
    }
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`;
  }

  whatYaShoot(shot) {
    if (shot > 0) {
      this.frustration += 20;
      return `Doh!`;
    }
    if (shot < 0) {
      this.frustration = 0;
      return `I AM THE GREATEST GOLFER ALIVE!`;
    }
    this.frustration -= 10;
    return `Booyah!`;
  }
}

module.exports = Golfer;
