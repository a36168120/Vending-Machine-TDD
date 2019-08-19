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

    describe("When checking how many quarter is in stock", () => {
      it("Should return current stock of quarters", () => {
        expect(vendingMachine.checkCoinStock("25c")).toEqual(20);
      });
    });

    describe("When refilling coins for loonie", () => {
      it("Should return new current quantity for loonie", () => {
        expect(vendingMachine.refillCoins("1d", 10)).toBeDefined();
      });
    });
  });

  describe("Products Inventory", () => {
    describe("When checking for all products in inventory", () => {
      it("Should return all information of products ", () => {
        expect(vendingMachine.checkProducts()).toEqual(data.inventory);
      });
    });

    describe("When checking for product position A5", () => {
      it("Should return A5's current stock", () => {
        expect(vendingMachine.checkProductStock("A5")).toEqual(10);
      });
    });

    describe("When stocking for item Canadian-Citizenship", () => {
      it("Should return quantity needed for stock", () => {
        expect(vendingMachine.restockProducts("A2")).toEqual(6);
      });
    });
  });
});
