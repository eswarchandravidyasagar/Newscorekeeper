const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');
const resetButton = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore = 10;

// Function to add animation to score update
function animateScoreUpdate(element) {
    element.classList.remove('score-update');
    // Force reflow
    element.offsetHeight;
    element.classList.add('score-update');
}

// Function to show game over state with enhanced visual feedback
function showGameOver(winner, loser) {
    isGameOver = true;
    winner.classList.add('winner');
    loser.classList.add('loser');
    p1Button.disabled = true;
    p2Button.disabled = true;
    
    // Add disabled styling to buttons
    p1Button.style.opacity = '0.6';
    p2Button.style.opacity = '0.6';
    p1Button.style.cursor = 'not-allowed';
    p2Button.style.cursor = 'not-allowed';
}

p1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
        animateScoreUpdate(p1Display);
        
        if (p1Score === winningScore) {
            showGameOver(p1Display, p2Display);
        }
    }
});

p2Button.addEventListener('click', function() {
    if (!isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
        animateScoreUpdate(p2Display);
        
        if (p2Score === winningScore) {
            showGameOver(p2Display, p1Display);
        }
    }
});

winningScoreSelect.addEventListener('change', function() {
    const value = parseInt(this.value);
    if (!isNaN(value)) {
        winningScore = value;
        reset();
    }
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    
    // Remove all styling classes
    p1Display.classList.remove('winner', 'loser', 'score-update');
    p2Display.classList.remove('winner', 'loser', 'score-update');
    
    // Re-enable buttons
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Button.style.opacity = '';
    p2Button.style.opacity = '';
    p1Button.style.cursor = '';
    p2Button.style.cursor = '';
}
    
