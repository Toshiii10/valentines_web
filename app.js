// app.js - Core application logic

document.addEventListener("DOMContentLoaded", () => {
    // --- ELEMENT REFERENCES ---
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const question = document.querySelector(".question");
    const gif = document.getElementById("main-gif");
    const bgMusic = document.getElementById("bg-music");
    const proposalSection = document.getElementById("proposal-section");
    const unlockedContent = document.getElementById("unlocked-content");

    const chorusStartTime = 47; 

    // --- INITIALIZATION ---
    // Render dynamic content from data.js
    renderTimeline();
    renderTrivia();

    window.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().catch(e => console.log("Audio play prevented:", e));
        }
    }, { once: true });

    // --- CORE INTERACTIONS ---
    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Happy Valentines! Scroll down for a surprise... ❤️";
      gif.src = "https://media.tenor.com/images/10802104815768868113/tenor.gif"; 
      
      document.querySelector(".btn-group").style.display = "none";
      bgMusic.currentTime = chorusStartTime;
      bgMusic.play();

      unlockedContent.style.display = "block";
      setTimeout(() => { unlockedContent.scrollIntoView({ behavior: "smooth" }); }, 1000);
    });

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
    noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); moveNoButton(); });

    // --- ENVELOPE LOGIC ---
    document.querySelectorAll('.envelope').forEach(env => {
        env.addEventListener('click', (e) => {
            const mood = e.currentTarget.getAttribute('data-mood');
            alert(envelopeData[mood]);
        });
    });

    // --- SCROLL ANIMATIONS ---
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    // --- DYNAMIC RENDER FUNCTIONS ---
    function renderTimeline() {
        const container = document.getElementById("timeline-container");
        timelineData.forEach(item => {
            const div = document.createElement("div");
            div.className = "timeline-item scroll-reveal";
            div.innerHTML = `
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-content">
                    <img src="${item.image}" alt="Memory">
                    <p>${item.caption}</p>
                </div>
            `;
            container.appendChild(div);
        });
    }

    function renderTrivia() {
        const container = document.getElementById("trivia-container");
        let buttonsHTML = triviaData.options.map((opt, index) => 
            `<button onclick="handleTriviaAnswer(${opt.isCorrect})">${opt.text}</button>`
        ).join('');

        container.innerHTML = `
            <p id="trivia-question" style="font-size: 20px; font-weight: bold;">${triviaData.question}</p>
            <div class="trivia-options">${buttonsHTML}</div>
            <p id="trivia-result" style="display:none; margin-top: 15px; font-weight:bold;"></p>
        `;
    }

    // Attach to window so the inline onclick works
    window.handleTriviaAnswer = function(isCorrect) {
        const resultText = document.getElementById("trivia-result");
        resultText.style.display = "block";
        if (isCorrect) {
            resultText.innerText = triviaData.successMessage;
            resultText.style.color = "#4caf50";
        } else {
            resultText.innerText = triviaData.failMessage;
            resultText.style.color = "#ff4d4d";
        }
    };
});