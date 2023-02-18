var Dog = require("./dog.js");

class Person {
  constructor(name, dogInfo) {
    this.name = name;
    this.dog = dogInfo;
  }

  fillFoodBowl() {
    this.dog.hungry = false;
  }

  throwBall() {
    if (this.dog.energyLevel > 3) {
      this.dog.energyLevel--;
      return `${this.dog.name} loves playing fetch!`;
    }
  }

  introduceNewFriends(dogFriend) {
    this.dog.friends.push(dogFriend.name);
  }

  adoptAPup(dogName, dogAge) {
    if (this.dog) {
      return `You can't adopt ${dogName}. You already have ${this.dog.name}!`;
    }
    if (this.dog === undefined) {
      this.dog = new Dog({
        name: dogName,
        age: dogAge,
      });
    }
  }
}

module.exports = Person;
