const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const bgMusic = document.getElementById("bg-music");
const wrapper = document.querySelector(".wrapper");

const chorusStartTime = 47; 

// Play music on first interaction (Browser policy requirement)
window.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(error => console.log("Audio autoplay prevented:", error));
    }
}, { once: true }); // Only runs once to initialize audio

// Yes Button Logic
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Happy Valentines! Being with you is my biggest blessing. I love you so much ❤️";
  // The .gif extension was missing in your original code snippet, replaced with a direct mp4/gif link if needed, but keeping your tenor link:
  gif.src = "https://media.tenor.com/images/10802104815768868113/tenor.gif"; 

  noBtn.style.display = "none";
  yesBtn.style.display = "none"; // Optional: hide Yes button after clicking

  // Jump to chorus
  bgMusic.currentTime = chorusStartTime;
  bgMusic.play();

  /* * Integration Idea:
   * You can easily drop your Firebase Realtime Database push logic right here 
   * to automatically log "Accepted Valentine's Request" as a new milestone 
   * directly to your shared timeline application!
   */
});

// Smarter No Button Evasion
function moveNoButton() {
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Subtract padding so the button doesn't clip outside the wrapper
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
    e.preventDefault(); // Prevents accidental clicking on mobile before it moves
    moveNoButton();
});
