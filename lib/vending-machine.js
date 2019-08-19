class VendingMachine {
  constructor(vending) {
    this.vending = vending;
  }

  checkCoins() {
    // console.log(this.vending.coin);
    return this.vending.coin;
  }

  checkProducts() {
    // console.log(this.vending.inventory);
    return this.vending.inventory;
  }

  checkCoinStock(name) {
    // console.log(this.vending.coin[name].stockQuantity);
    return this.vending.coin[name].stockQuantity;
  }
}

module.exports = VendingMachine;
