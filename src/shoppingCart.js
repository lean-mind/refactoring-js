module.exports = () => {
    let self = {};

    // objective 1: let prices = [];
    // objective 2: let products = [];
    let price = 0;

    // objective 3: addProduct = (product) => {...}
    self.add = (aPrice) => {
        price = aPrice;
    };

    self.calculateTotalPrice = () => {
        return price;
    };

    self.hasDiscount = () => {
        return price >= 100;
    };

    self.numberOfProducts = () => {
        return 1;
    };

    return self;
};