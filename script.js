const guuPaaChoki = ['guu', 'paa', 'choki'];

const outcomes = {
    'guu': {
        'paa': 0,
        'choki': 1,
    },
    'paa': {
        'guu': 1,
        'choki': 0,
    },
    'choki': {
        'paa': 1,
        'guu': 0
    }
};

const computerPlay = () => guuPaaChoki[Math.floor(Math.random()*3)];

const playRound = function (playerMove=prompt('Enter guu, paa, or choki:').toLowerCase(), computerMove=computerPlay()) {
    while (guuPaaChoki.indexOf(playerMove) == -1) {
        playerMove = prompt('Enter guu, paa, or choki:' );
    };
    return [playerMove, computerMove];
};

const game = function () {
    let score = 0
    for (let i = 1; i <= 5; i++) {
        let outcome = playRound()
        console.log(outcome[0], outcome[1])
        if (outcome[0] === outcome[1]) {
            console.log('Draw!');
            i--;
        } else {
            score += outcomes[outcome[0]][outcome[1]]
        };
    }
    return (score > 2 ? 'You Win!' : 'You Lose :(');
}