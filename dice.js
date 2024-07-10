class Dice {
  constructor(sides = 6) {
    this.sides = sides;
  }
  roll() {
    return Math.floor(Math.random() * 6) + 1;
  }
}
module.exports = Dice;
