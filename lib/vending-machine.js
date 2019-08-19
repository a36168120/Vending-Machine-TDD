class VendingMachine {
  constructor(vending) {
    this.vending = vending;
  }

  checkCoins() {
    // console.log(this.vending.coin);
    return this.vending.coin;
  }
}

module.exports = VendingMachine;
