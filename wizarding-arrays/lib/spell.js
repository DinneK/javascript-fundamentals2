class Spell {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.executionHistory = [];
  }

  execute(targets) {
    if (targets instanceof Array) {
      return targets
        .reduce((acc, curr) => {
          this.executionHistory.push(curr);
          acc.push(`Success! You've cast a spell on the ${curr}.`);

          return acc;
        }, [])
        .join(" ");
    }
    this.executionHistory.push(targets);
    return `Success! You've cast a spell on the ${targets}.`;
  }

  clearExecutionHistory() {
    this.executionHistory = [];
  }
}

module.exports = Spell;
