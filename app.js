document.addEventListener("DOMContentLoaded", () => {
    // --- DOM ELEMENTS ---
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const question = document.querySelector(".question");
    const gif = document.getElementById("main-gif");
    const bgMusic = document.getElementById("bg-music");
    const proposalSection = document.getElementById("proposal-section");
    const unlockedContent = document.getElementById("unlocked-content");
    const navButtons = document.querySelectorAll(".nav-btn");
    const panels = document.querySelectorAll(".panel");

    const chorusStartTime = 47; 

    // --- INITIALIZATION ---
    renderTimeline();
    renderTrivia();

    window.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().catch(e => console.log("Audio play prevented:", e));
        }
    }, { once: true });

    // --- YES BUTTON LOGIC ---
    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Happy Valentines! ❤️";
      gif.src = "https://media.tenor.com/images/10802104815768868113/tenor.gif"; 
      document.querySelector(".btn-group").style.display = "none";
      
      bgMusic.currentTime = chorusStartTime;
      bgMusic.play();

      proposalSection.style.display = "none";
      unlockedContent.style.display = "block";

      // Trigger the flower animation
      createGarden();
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
    noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); moveNoButton(); });

    // --- NAVIGATION TAB CONTROLLER ---
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            navButtons.forEach(b => b.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));
            btn.classList.add("active");
            const targetId = btn.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });

    // --- ENVELOPE LOGIC ---
    document.querySelectorAll('.envelope').forEach(env => {
        env.addEventListener('click', (e) => {
            const mood = e.currentTarget.getAttribute('data-mood');
            alert(envelopeData[mood]);
        });
    });

    // --- DYNAMIC RENDER FUNCTIONS ---
    function renderTimeline() {
        const container = document.getElementById("timeline-container");
        timelineData.forEach(item => {
            const div = document.createElement("div");
            div.className = "timeline-item";
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
        let buttonsHTML = triviaData.options.map((opt) => 
            `<button onclick="handleTriviaAnswer(${opt.isCorrect})">${opt.text}</button>`
        ).join('');

        container.innerHTML = `
            <p id="trivia-question" style="font-size: 20px; font-weight: bold;">${triviaData.question}</p>
            <div class="trivia-options">${buttonsHTML}</div>
            <p id="trivia-result" style="display:none; margin-top: 15px; font-weight:bold;"></p>
        `;
    }

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

    // --- FLOWER GARDEN ANIMATION LOGIC ---
    function createGarden() {
        const garden = document.getElementById("flower-garden");
        garden.style.display = "block";

        const numTulips = 15; 
        const screenWidth = window.innerWidth;

        for (let i = 0; i < numTulips; i++) {
            const wrapper = document.createElement("div");
            wrapper.className = "tulip-wrapper";
            
            const leftPos = (i / numTulips) * screenWidth + (Math.random() * 40 - 20);
            const scale = 0.6 + Math.random() * 0.6; 
            const delay = Math.random() * 1.5; 
            
            wrapper.style.left = `${leftPos}px`;
            wrapper.style.transform = `scale(${scale})`;
            wrapper.style.animationDelay = `${delay}s`;

            wrapper.innerHTML = `
                <svg width="100" height="250" viewBox="0 0 100 250" style="overflow: visible;">
                    <path d="M50,250 Q50,150 50,50" fill="none" stroke="#7CB342" stroke-width="6"/>
                    <path d="M50,200 Q20,150 40,120 Q50,150 50,200" fill="#7CB342"/>
                    <path d="M50,180 Q80,130 60,100 Q50,130 50,180" fill="#7CB342"/>
                    <path d="M 25 70 C 25 110, 75 110, 75 70 L 75 30 L 60 55 L 50 20 L 40 55 L 25 30 Z" fill="#FFB7C5"/>
                </svg>
            `;

            if (i < bloomPhotos.length) {
                const img = document.createElement("img");
                img.src = bloomPhotos[i];
                img.className = "bloom-photo";
                img.style.animationDelay = `${delay + 0.8}s`; 
                img.style.setProperty('--rand', Math.random());
                wrapper.appendChild(img);
            }

            garden.appendChild(wrapper);
        }
    }
});