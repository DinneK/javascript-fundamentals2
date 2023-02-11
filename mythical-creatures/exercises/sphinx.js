class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if (this.riddles.length < 4) {
      this.riddles.push(riddle);
    }
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answer && this.riddles.length > 1) {
        this.riddles.splice(i, 1);
        return "That wasn't that hard, I bet you don't get the next one";
      }

      if (answer === this.riddles[i].answer && this.riddles.length === 1) {
        this.riddles.pop();
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`;
      }

      this.heroesEaten = 1;
    }
  }
}

module.exports = Sphinx;
