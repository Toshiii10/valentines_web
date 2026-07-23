// trivia.js - Mini Quiz Game

// Isolated tracker variable!
let currentTriviaIndex = 0;

function renderTrivia() {
    const container = document.getElementById("trivia-container");
    if (!container) return; 

    const currentQ = triviaData[currentTriviaIndex];
    const btns = currentQ.options.map(opt => `<button onclick="handleTriviaAnswer(${opt.isCorrect})">${opt.text}</button>`).join('');
    
    container.innerHTML = `
        <p style="font-size: 13px; color: #ff6b81; font-weight: bold; margin-bottom: 5px;">Question ${currentTriviaIndex + 1} of ${triviaData.length}</p>
        <p style="font-size: 18px; font-weight: bold; margin-top: 0;">${currentQ.question}</p>
        <div class="trivia-options">${btns}</div>
    `;
}

// Make global so HTML buttons can click it
window.handleTriviaAnswer = function(isCorrect) {
    const currentQ = triviaData[currentTriviaIndex];
    if (isCorrect) {
        window.showMessage(currentQ.successMessage); // Uses the function from app.js!
        
        if (currentTriviaIndex < triviaData.length - 1) {
            currentTriviaIndex++;
            renderTrivia(); 
        } else {
            setTimeout(() => window.showMessage("Wow! 100% Score! You really do know me perfectly. 🥰🏆"), 1500);
        }
    } else {
        window.showMessage(currentQ.failMessage); 
    }
};

// Render the first question immediately when the file loads
renderTrivia();