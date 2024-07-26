document.getElementById('win-chance').addEventListener('input', function() {
    let winChance = this.value;
    let rollOver = 100 - winChance;
    let multiplier = (rollOver / 25).toFixed(2);

    document.getElementById('win-chance-display').value = winChance;
    document.getElementById('roll-over').value = rollOver.toFixed(2);
    document.getElementById('multiplier').value = multiplier;

    updateProfit();
});

document.getElementById('bet-amount').addEventListener('input', updateProfit);

document.getElementById('bet-button').addEventListener('click', function() {
    let winChance = parseFloat(document.getElementById('win-chance').value);
    let roll = Math.random() * 100;
    let betAmount = parseFloat(document.getElementById('bet-amount').value);

    if (roll > 100 - winChance) {
        alert('u won u lucky ass monkey');
        //WIN

    } else {
        alert('u lost u fucking dumbass nigger')
        //LOSE
    }
});

function updateProfit() {
    let betAmount = parseFloat(document.getElementById('bet-amount').value);
    let multiplier = parseFloat(document.getElementById('multiplier').value);
    let profit = (betAmount * (multiplier - 1)).toFixed(8);

    document.getElementById('profit-on-win').value = profit;
}
