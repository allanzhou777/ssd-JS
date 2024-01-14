
let record = [0, 0, 0]
let computerMove = Math.floor(3 * Math.random())
let arr = ['rock', 'paper', 'scissors']
let resultEl = document.getElementById('result-el')
let actionsEl = document.getElementById('actions-el')
let recordEl = document.getElementById('record-el')
let decision = ''
let actions = ''

function getWinner(player) {


    if ((player === 0 && computerMove === 1) ||
        (player === 1 && computerMove === 2) || 
        (player === 2 && computerMove === 0)){
            decision = 'lose :('
            actions = `you chose ${arr[player]} and computer played ${arr[(player + 1) % 3]}`
            record[1]++
    }
    else if ((player === 0 && computerMove === 2) ||
             (player === 1 && computerMove === 0) || 
             (player === 2 && computerMove === 1)) {
                decision = 'win :)'
                actions = `you chose ${arr[player]} and computer played ${arr[(player + 1) % 3]}`
                record[0]++
            }
    else {
       
            decision = 'tied :|'
            actions = `you chose ${arr[player]} and computer played ${arr[(player + 1) % 3]}`
            record[2]++
    }
    resultEl.textContent = 'you ' + decision
    
    actionsEl.textContent = actions

    recordEl.textContent = `Current record (W - L - T): ${record[1]} - ${record[0]} - ${record[2]}`




}

function resetScore() {
    record = [0, 0, 0]
    resultEl.textContent = '.'
    
    actionsEl.textContent = '.'

    recordEl.textContent = `Current record (W - L - T): ${record[1]} - ${record[0]} - ${record[2]}`


 
}

