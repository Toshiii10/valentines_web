// polaroids.js - Tinder-style Swipe Engine

function renderPolaroids() {
    const deck = document.getElementById("polaroid-deck");
    if (!deck) return; 
    
    deck.innerHTML = "";
    const reversedData = [...timelineData].reverse();

    reversedData.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "polaroid-card pop-in";
        
        const baseRotation = (Math.random() * 6 - 3); 
        card.style.transform = `rotate(${baseRotation}deg)`;
        card.style.animationDelay = `${index * 0.1}s`; 
        card.dataset.baseRotation = baseRotation; 

        card.innerHTML = `
            <img class="polaroid-image" src="${item.image}" loading="lazy">
            <div class="polaroid-date">${item.date}</div>
        `;
        
        setupSwipeLogic(card);
        deck.appendChild(card);
    });
}

// Make it global so the HTML button can trigger a reset
window.renderPolaroids = renderPolaroids; 

function setupSwipeLogic(card) {
    let startX = 0, currentX = 0, isDragging = false;
    
    const startDrag = (x) => {
        startX = x;
        isDragging = true;
        card.style.transition = 'none'; 
    };

    const moveDrag = (x) => {
        if (!isDragging) return;
        currentX = x - startX;
        const dynamicRotation = parseFloat(card.dataset.baseRotation) + (currentX * 0.1);
        card.style.transform = `translateX(${currentX}px) rotate(${dynamicRotation}deg)`;
    };

    const endDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        card.style.transition = 'transform 0.3s ease-out'; 

        const swipeThreshold = window.innerWidth * 0.25; 

        if (currentX > swipeThreshold) {
            card.classList.add('swipe-right');
            setTimeout(() => card.remove(), 400); 
        } else if (currentX < -swipeThreshold) {
            card.classList.add('swipe-left');
            setTimeout(() => card.remove(), 400);
        } else {
            card.style.transform = `rotate(${card.dataset.baseRotation}deg)`; 
        }
        currentX = 0;
    };

    card.addEventListener('touchstart', e => startDrag(e.touches[0].clientX));
    card.addEventListener('touchmove', e => moveDrag(e.touches[0].clientX));
    card.addEventListener('touchend', endDrag);
    card.addEventListener('mousedown', e => startDrag(e.clientX));
    document.addEventListener('mousemove', e => moveDrag(e.clientX));
    document.addEventListener('mouseup', endDrag);
}

// Render the deck immediately when the file loads
renderPolaroids();