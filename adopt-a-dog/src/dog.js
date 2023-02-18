class Dog {
  constructor(dogInfo) {
    this.name = dogInfo.name;
    this.age = dogInfo.age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
  }

  eat() {
    if (this.hungry) {
      this.hungry = false;
      return `Yum!`;
    }
    if (!this.hungry) {
      return `I refuse to eat.`;
    }
  }

  fetchBall() {
    if (this.energyLevel <= 3) {
      return `Nah, I'm going to sleep instead.`;
    }
    this.energyLevel--;
    return `This is fun!`;
  }

  sleep() {
    if (this.energyLevel >= 10) {
      return `I have too much energy to rest. I'm going to chew something instead.`;
    }
    this.energyLevel++;
  }

  makeNewFriend(friend) {
    this.friends.push(friend.name);
  }
}

module.exports = Dog;
