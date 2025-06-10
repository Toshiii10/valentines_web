const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const bgMusic = document.getElementById("bg-music");
const chorusStartTime = 47; // Change this to the actual chorus start time in seconds

// Function to play background music
function playMusic() {
  bgMusic.play().catch(error => {
    // Handle error (some browsers may block autoplay)
    console.log("Error playing music:", error);
  });
}

// Play music when the page loads or on a user interaction
window.addEventListener('click', playMusic); // This ensures it plays when the page is clicked

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Happy Valentines. Being with you is my biggest blessing. I love you so much ";
  gif.src = "https://tenor.com/view/bubu-bubu-dudu-love-cute-panda-gif-10802104815768868113.gif";

  // Hide the No button
  noBtn.style.display = "none";

  const caption = document.createElement("p");
  caption.innerHTML = "</b> ❤️";
  caption.style.fontSize = "18px";
  caption.style.color = "blue";
  caption.style.marginTop = "15px";

  document.querySelector(".wrapper").appendChild(caption);
  bgMusic.currentTime = chorusStartTime; // Jump to the chorus
  bgMusic.play();
});

// Function to move the No button randomly
function moveNoButton() {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  // Ensure randomX and randomY are within the wrapper bounds
  const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
  const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

  noBtn.style.position = "absolute"; // Ensure the button can move freely
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Add event listeners for both mouseover (desktop) and touchstart (mobile)
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
