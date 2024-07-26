document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const homeLink = document.getElementById('home-link');

    const chooseGameScreen = document.createElement('div');
    chooseGameScreen.classList.add('choose-game');

    const rouletteButton = document.createElement('button');
    rouletteButton.innerText = 'Play Roulette';
    rouletteButton.addEventListener('click', () => {window.location.href = 'roulette.html';});

    const DiceButton = document.createElement('button');
    DiceButton.innerText = 'Play DiceGame';
    DiceButton.addEventListener('click', () =>{window.location.href = 'dice.html';});

    chooseGameScreen.appendChild(rouletteButton);
    chooseGameScreen.appendChild(DiceButton);

    gameContainer.appendChild(chooseGameScreen);


    function loadGame(scriptSrc) {
        chooseGameScreen.style.display = 'none'; 

        const existingScript = document.querySelector('script[data-game]');
        if (existingScript) {
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.src = scriptSrc;
        script.type = 'text/javascript';
        script.setAttribute('data-game', 'true');
        script.onload = () => {
            console.log(`${scriptSrc} script loaded successfully`);
        };
        script.onerror = () => {
            console.error(`Failed to load the ${scriptSrc} script`);
        };

        document.body.appendChild(script); 
    }

    homeLink.addEventListener('click', (event) => {
        event.preventDefault(); 
        chooseGameScreen.style.display = 'flex'; 

        const existingScript = document.querySelector('script[data-game]');
        if (existingScript) {
            existingScript.remove();
        }
    });
});
