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

  checkProductStock(position) {
    // console.log(this.vending.inventory[position].currentQuantity)
    return this.vending.inventory[position].currentQuantity;
  }

  refillCoins(name, addCoins) {
    // console.log(this.vending.coin[name].stockQuantity);
    const newStockQuantity = this.vending.coin[name].stockQuantity + addCoins;
    this.vending.coin[name].stockQuantity = newStockQuantity;
    return newStockQuantity;
  }
}

module.exports = VendingMachine;
