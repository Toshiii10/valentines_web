// data.js - Stores all your personal content

const timelineData = [
    { date: "February 2026", image: "https://via.placeholder.com/300x300" },
    { date: "April 2026", image: "https://via.placeholder.com/300x300" },
    { date: "May 2026", image: "https://via.placeholder.com/300x300" },
    { date: "June 2026", image: "https://via.placeholder.com/300x300" },
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
