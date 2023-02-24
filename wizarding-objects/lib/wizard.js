class Wizard {
  constructor(wizardInfo) {
    this.name = wizardInfo.name;
    this.petsCount = 0;
    this.pets = [];
    this.wand;
  }

  adoptPet(pet) {
    this.pets.push(pet);
    this.petsCount = this.pets.length;
  }

  petList() {
    return this.pets
      .map((pet) => {
        if (pet.type === "cat") {
          return `A ${pet.type} named ${pet.name}`;
        }
        if (pet.type == "owl") {
          return `An ${pet.type} named ${pet.name}.`;
        }
      })
      .join("; ");
  }

  getWand(wand) {
    this.wand = wand;
  }

  castSpell(spell) {
    return this.wand.cast(spell);
  }
}

module.exports = Wizard;
