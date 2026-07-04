// data.js - Stores all your personal content

const timelineData = [
    { date: "October 14, 2023", image: "https://via.placeholder.com/300x200", caption: "The day we went to that amazing cafe. I couldn't stop looking at you." },
    { date: "December 25, 2023", image: "https://via.placeholder.com/300x200", caption: "Our first Christmas together! The matching sweaters were a hit." }
];

const triviaData = {
    question: "Where did we have our first date?",
    options: [
        { text: "The Movies", isCorrect: false },
        { text: "The Coffee Shop", isCorrect: true },
        { text: "The Park", isCorrect: false }
    ],
    successMessage: "Correct! You know me so well. 🥰",
    failMessage: "Oops! Try again... I still love you though! 😅"
};

const envelopeData = {
    miss: "Just look at the stars tonight. I'm looking at the same ones, thinking of you. ✨",
    laugh: "Remember that time I tripped over absolutely nothing? Yeah, you're welcome. 😂",
    sad: "Take a deep breath. I am always here for you, in your corner, cheering you on. 💖"
};

const bloomPhotos = [
    "https://via.placeholder.com/150", 
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"
];

// --- NEW FEATURES DATA ---

const episodesData = [
    { title: "Pilot: The First Message", duration: "24m", image: "https://via.placeholder.com/300x150", description: "Where it all began. Two strangers realize they have way too much in common." },
    { title: "The Coffee Incident", duration: "45m", image: "https://via.placeholder.com/300x150", description: "Our first official hangout. Sparks fly, and plenty of laughs are shared." },
    { title: "Season Finale: Falling Hard", duration: "1h 30m", image: "https://via.placeholder.com/300x150", description: "The moment we knew this was something truly special. To be continued..." }
];

const duoStats = {
    player1: {
        name: "You", // Replace with her name
        avatar: "https://via.placeholder.com/100", // Her photo
        stats: [
            { label: "Carrying the Relationship", value: 99 },
            { label: "Patience Level", value: 100 },
            { label: "Cuteness Aggression", value: 85 }
        ]
    },
    player2: {
        name: "Me", // Replace with your name
        avatar: "https://via.placeholder.com/100", // Your photo
        stats: [
            { label: "Fumbling Words", value: 70 },
            { label: "Tech Support", value: 100 },
            { label: "Amount I Love You", value: 100 }
        ]
    }
};

const couponsData = [
    { id: "coup_massage", title: "Free Back Massage", desc: "Good for one 30-minute relaxing massage. No expiration." },
    { id: "coup_food", title: "Dinner on Me", desc: "You pick the restaurant, I cover the bill (and the driving)." },
    { id: "coup_movie", title: "Movie Night Pick", desc: "You get 100% control over what we watch tonight." },
    { id: "coup_chore", title: "Skip a Chore", desc: "Hand this over and I will do any one chore of your choice." }
];
