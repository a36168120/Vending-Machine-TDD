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

    describe("When dispening change for 1 item A2", () => {
      it("Should return amount given - item price", () => {
        expect(vendingMachine.dispenseSum("A2", 9)).toEqual(1.75);
      });
    });

    describe("When dispening change for $1.9 in lowest amount of coins", () => {
      it("Should return 1 loonie, 3 quarters, 1 dime and 1 nickel", () => {
        expect(vendingMachine.dispenseChange(1.9)).toBeDefined();
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

    describe("When dispensing item B1 for Indian-Citizenship", () => {
      it("Should update B1's currentQuantity - 4", () => {
        expect(vendingMachine.dispenseProducts("B1", 4)).toEqual(6);
      });
    });

    describe("When dispensing item B1 for Indian-Citizenship, while money is not enough", () => {
      it("Should throw error (Sorry insufficient money)", () => {
        expect(() => vendingMachine.dispenseProducts("B1", 4, 3)).toThrowError(
          "Sorry insufficient money"
        );
      });
    });
  });
});
