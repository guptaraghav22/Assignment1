const Dice = require("./dice");
const Player = require("./player");

class Arena {
  fight(player1, player2) {
    if (player1.health > player2.health) {
      [player1, player2] = [player2, player1];
    }

    while (player1.isAlive() && player2.isAlive()) {
      this.turn(player1, player2);
      if (!player2.isAlive()) break;
      this.turn(player2, player1);
    }
    if (player1.isAlive()) {
      console.log(`${player1.name} wins!`);
    } else {
      console.log(`${player2.name} wins!`);
    }
  }

  turn(attacker, defender) {
    const attackDamage = attacker.attackDamage();
    const defendDamage = defender.defendDamage();
    const damage = attackDamage - defendDamage;
    if (damage > 0) {
      defender.takeDamage(damage);
      console.log(
        `${attacker.name} attacks ${defender.name} for ${damage} damage. ${defender.name} health: ${defender.health}`
      );
    } else {
      console.log(
        `${defender.name} defends successfully against ${attacker.name}'s attack.`
      );
    }
  }
}

module.exports = Arena;
