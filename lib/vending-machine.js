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

  restockProducts(position) {
    const minQuantity = this.vending.inventory[position].minQuantity;
    const maxQuantity = this.vending.inventory[position].maxQuantity;
    const currentQuantity = this.vending.inventory[position].currentQuantity;

    if (currentQuantity < minQuantity) {
      return maxQuantity - currentQuantity;
    }
  }

  setProductQuantity(position, number) {
    let currentQuantity = this.checkProductStock(position);
    let newQuantity = currentQuantity - number;
    if (currentQuantity < number) {
      throw new Error(
        `Sorry we dont have enough stock. The current stock for item ${position} are ${currentQuantity}`
      );
    }
    this.vending.inventory[position].currentQuantity = newQuantity;
    return this.checkProductStock(position);
  }
}

module.exports = VendingMachine;
