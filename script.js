// script.js

const numDrops = 200; // Number of raindrops
const rainContainer = document.querySelector('.rain');

function createDrop() {
    const drop = document.createElement('div');
    drop.className = 'drop';
    drop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Random speed
    drop.style.animationDelay = `${Math.random() * 2}s`; // Random delay
    return drop;
}

for (let i = 0; i < numDrops; i++) {
    const drop = createDrop();
    rainContainer.appendChild(drop);
}
