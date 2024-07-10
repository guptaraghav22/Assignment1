// const assert = require("chai").assert;
// const player = require("../player");

// describe("Player", () => {
//   it("should create a player with given attributes", () => {
//     const Player = new player("Test Player", 50, 5, 10);
//     assert.equal(Player.name, "Test Player");
//     assert.equal(Player.health, 50);
//     assert.equal(Player.strength, 5);
//     assert.equal(Player.attack, 10);
//   });
//   it("should reduce health correctly when taking damage", () => {
//     const Player = new player("Test Player", 50, 5, 10);
//     player.takeDamage(20);
//     assert.equal(Player.health, 30);
//   });
//   it("should not have negative health", () => {
//     const Player = new player("Test Player", 50, 5, 10);
//     Player.takeDamage(60);
//     assert.equal(Player.health, 0);
//   });
//   it("should be alive when health is greater than 0", () => {
//     const Player = new player("Test Player", 50, 5, 10);
//     assert.isTrue(Player.isAlive());
//   });
//   it("should not be alive when health is 0", () => {
//     const Player = new player("Test Player", 50, 5, 10);
//     Player.takeDamage(50);
//     assert.isFalse(Player.isAlive());
//   });
// });
const player = require("../player");

describe("Player", () => {
  let assert;

  before(async () => {
    const chai = await import("chai");
    assert = chai.assert;
  });

  it("should create a player with given attributes", () => {
    const testPlayer = new player("Test Player", 50, 5, 10);
    assert.equal(testPlayer.name, "Test Player");
    assert.equal(testPlayer.health, 50);
    assert.equal(testPlayer.strength, 5);
    assert.equal(testPlayer.attack, 10);
  });

  it("should reduce health correctly when taking damage", () => {
    const testPlayer = new player("Test Player", 50, 5, 10);
    testPlayer.takeDamage(20);
    assert.equal(testPlayer.health, 30);
  });

  it("should not have negative health", () => {
    const testPlayer = new player("Test Player", 50, 5, 10);
    testPlayer.takeDamage(60);
    assert.equal(testPlayer.health, 0);
  });

  it("should be alive when health is greater than 0", () => {
    const testPlayer = new player("Test Player", 50, 5, 10);
    assert.isTrue(testPlayer.isAlive());
  });

  it("should not be alive when health is 0", () => {
    const testPlayer = new player("Test Player", 50, 5, 10);
    testPlayer.takeDamage(50);
    assert.isFalse(testPlayer.isAlive());
  });
});
