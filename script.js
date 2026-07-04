const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.getElementById("main-gif");
const bgMusic = document.getElementById("bg-music");
const proposalSection = document.getElementById("proposal-section");
const unlockedContent = document.getElementById("unlocked-content");

const chorusStartTime = 47; 

// Initialize audio on first click
window.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(e => console.log("Audio play prevented:", e));
    }
}, { once: true });

// --- YES BUTTON LOGIC & UNLOCKING ---
yesBtn.addEventListener("click", () => {
  // Update the initial card
  question.innerHTML = "Happy Valentines! Scroll down for a surprise... ❤️";
  gif.src = "https://media.tenor.com/images/10802104815768868113/tenor.gif"; 
  
  document.querySelector(".btn-group").style.display = "none"; // Hide both buttons

  // Jump music to chorus
  bgMusic.currentTime = chorusStartTime;
  bgMusic.play();

  // Reveal the rest of the website
  unlockedContent.style.display = "block";

  // Smooth scroll to the love letter
  setTimeout(() => {
      unlockedContent.scrollIntoView({ behavior: "smooth" });
  }, 1000);
});

// --- NO BUTTON EVASION ---
function moveNoButton() {
  const wrapperRect = proposalSection.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const padding = 20; 
  const maxX = wrapperRect.width - noBtnRect.width - padding;
  const maxY = wrapperRect.height - noBtnRect.height - padding;

  const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
  const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

  noBtn.style.position = "absolute"; 
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); 
    moveNoButton();
});

// --- SCROLL REVEAL ANIMATION (Love Letter & Timeline) ---
// This makes text and images fade in smoothly as they enter the screen
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Apply observer to all elements with the 'scroll-reveal' class
document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// --- ENVELOPE LOGIC ---
function openEnvelope(mood) {
    let message = "";
    if (mood === 'miss') {
        message = "Just look at the stars tonight. I'm looking at the same ones, thinking of you. ✨";
    } else if (mood === 'laugh') {
        message = "Remember that time I tripped over absolutely nothing? Yeah, you're welcome. 😂";
    } else if (mood === 'sad') {
        message = "Take a deep breath. I am always here for you, in your corner, cheering you on. 💖";
    }
    // You can upgrade this to an actual modal/popup later, but a simple alert works great to start!
    alert(message); 
}

// --- TRIVIA LOGIC ---
function checkAnswer(isCorrect) {
    const resultText = document.getElementById("trivia-result");
    resultText.style.display = "block";
    
    if (isCorrect) {
        resultText.innerText = "Correct! You know me so well. 🥰";
        resultText.style.color = "#4caf50";
    } else {
        resultText.innerText = "Oops! Try again... I still love you though! 😅";
        resultText.style.color = "#ff4d4d";
    }
}
