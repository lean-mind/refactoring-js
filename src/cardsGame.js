module.exports = () => {
    const cardRank = "123456789TJQK";
    const self = {};

    self.whoWins = (pack1, pack2) =>{
        let scorePlayer1 = 0;
        let scorePlayer2 = 0;

        function calculateScores(){
            for (let i = 0; i < pack1.length; i++){
                if (cardRank.indexOf(pack1[i]) < cardRank.indexOf(pack2[i])){
                    ++scorePlayer2;
                }
                else if (cardRank.indexOf(pack1[i]) > cardRank.indexOf(pack2[i])){
                    ++scorePlayer1;
                }
            }
        }
        function humanReadableScores(){
            if (scorePlayer1 > scorePlayer2){
                return `Player 1 wins ${scorePlayer1} to ${scorePlayer2}`;
            }
            else if (scorePlayer2 > scorePlayer1){
                return `Player 2 wins ${scorePlayer2} to ${scorePlayer1}`;
            }
            else return "Tie"
        }

        calculateScores();
        return humanReadableScores();
    };

    return self;
};