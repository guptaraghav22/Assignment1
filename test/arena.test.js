// const Player = require("../player");
// const Arena = require("../arena");

// describe("Arena", () => {
//   let assert;

//   before(async () => {
//     const chai = await import("chai");
//     assert = chai.assert;
//   });
//   it("should declare the correct winner", () => {
//     const playerA = new Player("Player A", 50, 5, 10);
//     const playerB = new Player("Player B", 100, 10, 5);

//     const arena = new Arena();
//     arena.fight(playerA, playerB);

//     assert.isTrue(playerB.isAlive());
//     assert.isFalse(playerA.isAlive());
//   });

//   it("should correctly execute a turn", () => {
//     const playerA = new Player("Player A", 50, 5, 10);
//     const playerB = new Player("Player B", 100, 10, 5);
//     const arena = new Arena();

//     arena.turn(playerA, playerB);

//     assert.isTrue(playerA.isAlive() && playerB.isAlive());
//   });
// });

const Player = require("../player");
const Arena = require("../arena");

describe("Arena", () => {
  let assert;

  before(async () => {
    const chai = await import("chai");
    assert = chai.assert;
  });

  it("should declare the correct winner", () => {
    const playerA = new Player("Player A", 50, 5, 10);
    const playerB = new Player("Player B", 100, 10, 5);

    const arena = new Arena();
    arena.fight(playerA, playerB);

    assert.isTrue(playerA.isAlive());
    assert.isFalse(playerB.isAlive());
  });
});
