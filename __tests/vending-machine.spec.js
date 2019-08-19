const VendingMachine = require("../lib/vending-machine.js");
const data = require("../src/data/vending-machine.json");
const vendingMachine = new VendingMachine(data);

describe("Vending Machine:", () => {
  describe("Coins Inventory", () => {
    describe("When checking for all coins in inventory", () => {
      it("Should return all infomation of coins", () => {
        expect(vendingMachine.checkCoins()).toEqual(data.coin);
      });
    });
  });

  describe("Products Inventory", () => {});
});
