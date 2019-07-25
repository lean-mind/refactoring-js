const createCardsGame = require('../src/cardsGame');

describe("The cards game", () => {
    it('may be the first player the winner', () => {
        let game = createCardsGame();

        expect(game.whoWins([1,2], [1,1]))
            .toBe("Player 1 wins 1 to 0");
    });
    it('may be the second player the winner', () => {
        let game = createCardsGame();

        expect(game.whoWins([1,1], [2,2]))
            .toBe("Player 2 wins 2 to 0");
    });
    it('may be a tie', () => {
        let game = createCardsGame();

        expect(game.whoWins([1], [1]))
            .toBe("Tie");
    });
});