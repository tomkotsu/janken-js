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

const playRound = function (playerMove, computerMove=computerPlay()) {
    return [playerMove, computerMove];
};

// const game = function () {
//         console.log(outcome[0], outcome[1])
//         if (outcome[0] === outcome[1]) {
//             console.log('Draw!');
//             i--;
//         } else {
//             score += outcomes[outcome[0]][outcome[1]]
//         };
//     }
//     return (score > 2 ? 'You Win!' : 'You Lose :(');

const draws = document.querySelector('.draws')
const wins = document.querySelector('.wins')
const losses = document.querySelector('.losses')

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let outcome = playRound(button.id);
        if (outcome[0] === outcome[1]) {
            draws.textContent = Number(draws.textContent) + 1;
        } else if (outcomes[outcome[0]][outcome[1]] === 0) {
            losses.textContent = Number(losses.textContent) + 1
        } else {
            wins.textContent = Number(wins.textContent) + 1
            
        }
        if (wins.textContent === '5') {
            alert('You win!')
        }
        if (losses.textContent === '5') {
            alert('You lose :(')
        }
        });
        });