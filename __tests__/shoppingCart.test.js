const createCart = require('../src/shoppingCart');

describe('The shopping cart', () => {
    it('a cart may contain several items', () => {
        let aCart = createCart();
        aCart.add(100);

        expect(aCart.calculateTotalPrice()).toBe(100);
    });

    it('a cart may offer discounts', () => {
        let aCart = createCart();
        aCart.add(200);

        expect(aCart.hasDiscount()).toBe(true);
    });

    it('a cart counts a total of products', () => {
        let aCart = createCart();
        aCart.add(200);

        expect(aCart.numberOfProducts()).toBe(1);
    });
})