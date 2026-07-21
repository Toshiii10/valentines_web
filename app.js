document.addEventListener("DOMContentLoaded", () => {
    
    // Register Service Worker for the PWA
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js")
            .then(() => console.log("Service Worker Registered!"))
            .catch(err => console.log("Service Worker Failed", err));
    }

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

    // Initialize UI
    renderTimeline();
    renderTrivia();
    renderStats();
    renderCoupons();

    window.addEventListener('click', () => {
        if (bgMusic.paused && bgMusic.src && !bgMusic.src.endsWith("YOUR_AUDIO_FILE.mp3")) {
            bgMusic.play().catch(e => console.log("Audio issue:", e));
        }
    }, { once: true });

    // --- PROPOSAL LOGIC ---
    yesBtn.addEventListener("click", () => {
      document.querySelector(".btn-group").style.display = "none";
      if (bgMusic.src && !bgMusic.src.endsWith("YOUR_AUDIO_FILE.mp3")) {
          bgMusic.currentTime = chorusStartTime;
          bgMusic.play().catch(e => console.log("Audio issue:", e));
      }
      proposalSection.style.display = "none";
      unlockedContent.style.display = "block";
      createGarden();
    });

    function moveNoButton() {
      const wrapperRect = proposalSection.getBoundingClientRect();
      const noBtnRect = noBtn.getBoundingClientRect();
      const padding = 20; 
      const maxX = wrapperRect.width - noBtnRect.width - padding;
      const maxY = wrapperRect.height - noBtnRect.height - padding;
      noBtn.style.position = "absolute"; 
      noBtn.style.left = `${Math.max(padding, Math.floor(Math.random() * maxX))}px`;
      noBtn.style.top = `${Math.max(padding, Math.floor(Math.random() * maxY))}px`;
    }

    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); moveNoButton(); });

    // --- TAB CONTROLLER ---
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            navButtons.forEach(b => b.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));
            btn.classList.add("active");
            const targetId = btn.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");

            // Animate stat bars if stats tab is opened
            if (targetId === "stats") {
                setTimeout(() => {
                    document.querySelectorAll('.stat-bar-fill').forEach(bar => {
                        bar.style.width = bar.getAttribute('data-value') + '%';
                    });
                }, 100);
            }
        });
    });

    // --- MODAL CONTROLLER ---
    const modalOverlay = document.getElementById("custom-modal");
    const modalText = document.getElementById("modal-text");
    document.querySelector(".close-btn").addEventListener("click", () => modalOverlay.classList.remove("show"));
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.remove("show");
    });
    function showMessage(text) {
        modalText.innerText = text;
        modalOverlay.classList.add("show");
    }

    // --- ENVELOPES ---
    document.querySelectorAll('.envelope').forEach(env => {
        env.addEventListener('click', (e) => showMessage(envelopeData[e.currentTarget.getAttribute('data-mood')]));
    });

    // --- RENDERERS ---
    function renderTimeline() {
        const container = document.getElementById("timeline-container");
        timelineData.forEach(item => {
            container.innerHTML += `
                <div class="timeline-item">
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-content"><img src="${item.image}" loading="lazy"><p>${item.caption}</p></div>
                </div>`;
        });
    }

    function renderTrivia() {
        const container = document.getElementById("trivia-container");
        const btns = triviaData.options.map(opt => `<button onclick="handleTriviaAnswer(${opt.isCorrect})">${opt.text}</button>`).join('');
        container.innerHTML = `<p style="font-size: 18px; font-weight: bold;">${triviaData.question}</p><div class="trivia-options">${btns}</div>`;
    }

    window.handleTriviaAnswer = (isCorrect) => showMessage(isCorrect ? triviaData.successMessage : triviaData.failMessage);

    function renderStats() {
        const container = document.getElementById("stats-container");
        [duoStats.player1, duoStats.player2].forEach(player => {
            let statsHTML = player.stats.map(stat => `
                <div class="stat-row">
                    <div class="stat-label"><span>${stat.label}</span><span>${stat.value}%</span></div>
                    <div class="stat-bar-bg"><div class="stat-bar-fill" data-value="${stat.value}" style="width: 0;"></div></div>
                </div>
            `).join('');
            
            container.innerHTML += `
                <div class="player-card">
                    <div class="player-header">
                        <img src="${player.avatar}" class="player-avatar">
                        <h3 class="player-name">${player.name}</h3>
                    </div>
                    ${statsHTML}
                </div>`;
        });
    }

    function renderCoupons() {
        const container = document.getElementById("coupons-container");
        container.innerHTML = ""; 
        
        couponsData.forEach(coupon => {
            const isClaimed = localStorage.getItem(coupon.id) === "true";
            const div = document.createElement("div");
            div.className = `coupon ${isClaimed ? "claimed" : ""}`;
            div.innerHTML = `<h3>${coupon.title}</h3><p>${coupon.desc}</p>`;
            
            if (!isClaimed) {
                div.addEventListener("click", () => {
                    localStorage.setItem(coupon.id, "true");
                    showMessage(`You claimed: ${coupon.title}! 🎉\n\nScreenshot this and send it to me when you're ready to use it!`);
                    renderCoupons(); 
                });
            } else {
                div.addEventListener("click", () => {
                    if (window.confirm(`Do you want to unclaim "${coupon.title}" and put it back in the book?`)) {
                        localStorage.removeItem(coupon.id); 
                        renderCoupons(); 
                    }
                });
            }
            container.appendChild(div);
        });
    }

    // --- EASTER EGG LOGIC ---
    let clickCount = 0;
    let lastClickTime = 0;
    const title = document.getElementById("secret-title");
    const terminal = document.getElementById("terminal-overlay");
    const terminalText = document.getElementById("terminal-text");

    title.addEventListener("click", () => {
        const now = new Date().getTime();
        if (now - lastClickTime > 1500) clickCount = 0; 
        
        clickCount++;
        lastClickTime = now;

        if (clickCount === 3) {
            terminal.style.display = "flex";
            runTerminalScript();
            clickCount = 0;
        }
    });

    document.querySelector(".terminal-header .green").addEventListener("click", () => {
        terminal.style.display = "none";
        terminalText.innerHTML = "";
    });

    async function runTerminalScript() {
        terminalText.innerHTML = "";
        const lines = [
            "Initializing core systems...",
            "Loading memory_banks.bin...",
            "Bypassing firewalls...",
            "Access granted to Heart.exe",
            "",
            "Running diagnostic:",
            "  > Cuteness Level: CRITICAL",
            "  > Love Capacity: OVERFLOWING",
            "",
            "Executing main script:",
            "  if (you == mine) {",
            "      world.isPerfect = true;",
            "  }",
            "",
            "> SYSTEM MESSAGE: I love you. Happy Valentines Day! ❤️"
        ];

        for (let i = 0; i < lines.length; i++) {
            await typeLine(lines[i]);
        }
    }

    function typeLine(text) {
        return new Promise(resolve => {
            let charIndex = 0;
            terminalText.innerHTML += "<br>";
            const interval = setInterval(() => {
                if (charIndex < text.length) {
                    terminalText.innerHTML += text.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(interval);
                    setTimeout(resolve, 300); 
                }
            }, 30); 
        });
    }

    // --- FLOWER GARDEN ---
function createGarden() {
        const garden = document.getElementById("flower-garden");
        garden.style.display = "block";
        const numTulips = 15; 
        
        // NEW: Create a fragment to hold the flowers
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < numTulips; i++) {
            const wrapper = document.createElement("div");
            // ... (keep all your existing tulip styling/SVG code here) ...
            fragment.appendChild(wrapper); // Add to fragment, not the DOM
        }
        
        // Append all at once!
        garden.appendChild(fragment);
    }
});
