const samurai = document.querySelector('.samurai');
let positionX = 45; // position initiale en %

document.addEventListener('keydown', (e) => {
    if (e.key === 'a' || e.key === 'A') {
        // gauche
        positionX -= 2;
        if (positionX < 0) positionX = 0;
        samurai.style.left = positionX + '%';
        samurai.style.transform = 'scaleX(-4) scaleY(4)';
        samurai.classList.remove('idle', 'attack');
        samurai.classList.add('run');
    }
    if (e.key === 'd' || e.key === 'D') {
        // droite
        positionX += 2;
        if (positionX > 90) positionX = 90;
        samurai.style.left = positionX + '%';
        samurai.style.transform = 'scale(4)';
        samurai.classList.remove('idle', 'attack');
        samurai.classList.add('run');
    }
    
    if (e.key === 'k' || e.key === 'K') {
        // attaque
        samurai.classList.remove('idle', 'run');
        samurai.classList.add('attack');
        setTimeout(() => {
            samurai.classList.remove('attack');
            samurai.classList.add('idle');
        }, 350);
    }
});

document.addEventListener('keyup', (e) => {
    if (['a','A','d','D'].includes(e.key)) {
        samurai.classList.remove('run');
        samurai.classList.add('idle');
    }
});
