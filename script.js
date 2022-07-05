const guuPaaChoki = ['Guu', 'Paa', 'Choki']

const computerPlay = () => guuPaaChoki[Math.floor(Math.random()*3)]

const playRound = function (playerMove=prompt(), computerMove=computerPlay()) {
    console.log(playerMove, computerMove)
}