const Dice = require("./dice");
class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  attackDamage() {
    const dice = new Dice();
    return this.attack * dice.roll();
  }
  defendDamage() {
    const dice = new Dice();
    return this.strength * 2;
  }
  takeDamage(damage) {
    this.health = this.health - damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }
  isAlive() {
    return this.health > 0;
  }
}

module.exports = Player;
