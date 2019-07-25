const createAuthService = require('../src/authService');
const createSomeService = require('../src/someService');

describe("The auth service", () => {
    it('a cart may contain several items', () => {
        let service = createAuthService();

        expect(service.isAuthenticated(12345)).toBe(true);
    });

    it('a cart may contain several items', () => {
        let otherService = createSomeService();

        otherService.someAction();
    });
});