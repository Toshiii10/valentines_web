// data.js - Stores all your personal content

const timelineData = [
    { date: "February 2026", image: "https://via.placeholder.com/300x300" },
    { date: "April 2026", image: "https://via.placeholder.com/300x300" },
    { date: "May 2026", image: "https://via.placeholder.com/300x300" },
    { date: "June 2026", image: "https://via.placeholder.com/300x300" },
    { date: "July 2026", image: "https://via.placeholder.com/300x300" },
    { date: "August 2026", image: "https://via.placeholder.com/300x300" },
    { date: "September 2026", image: "https://via.placeholder.com/300x300" },
    { date: "October 2026", image: "https://via.placeholder.com/300x300" },
    { date: "November 2026", image: "https://via.placeholder.com/300x300" },
    { date: "December 2026", image: "https://via.placeholder.com/300x300" },
    { date: "January 2027", image: "https://via.placeholder.com/300x300" },
    { date: "February 2027", image: "https://via.placeholder.com/300x300" },
];

const triviaData = [
    {
        question: "Where did we have our first date?",
        options: [
            { text: "The Movies", isCorrect: false },
            { text: "The Coffee Shop", isCorrect: true },
            { text: "The Park", isCorrect: false }
        ],
        successMessage: "Correct! You know me so well. 🥰",
        failMessage: "Oops! Try again... I still love you though! 😅"
    },
    {
        question: "What is the exact name of my embedded system prototype for monitoring plants?",
        options: [
            { text: "Project HALAMAN", isCorrect: false },
            { text: "Project LUNTIAN", isCorrect: true },
            { text: "Project BERDE", isCorrect: false }
        ],
        successMessage: "Yes! LUNTIAN is my masterpiece. 🌿",
        failMessage: "Not quite! Think greener... 💻"
    },
    {
        question: "Which muscle group am I most obsessed with hitting at the gym?",
        options: [
            { text: "Chest & Arms", isCorrect: false },
            { text: "Back & Shoulders", isCorrect: false },
            { text: "Legs / Lower Body", isCorrect: true }
        ],
        successMessage: "Never skipping leg day! 💪",
        failMessage: "Come on, you know what day is my favorite! 🏋️‍♂️"
    },
    {
        question: "What was the exact date of my big SETScapade General Assembly event?",
        options: [
            { text: "February 14, 2026", isCorrect: false },
            { text: "February 11, 2026", isCorrect: true },
            { text: "January 25, 2026", isCorrect: false }
        ],
        successMessage: "Spot on! That event was huge for me. 📅",
        failMessage: "Wrong date! I worked so hard on that! 😭"
    },
    {
        question: "If we have to survive a zombie apocalypse together, which game has prepared me the most?",
        options: [
            { text: "Left 4 Dead 2", isCorrect: false },
            { text: "Project Zomboid", isCorrect: true },
            { text: "Resident Evil", isCorrect: false }
        ],
        successMessage: "Exactly! I'll keep our base safe, don't worry. 🧟‍♂️",
        failMessage: "I literally run servers for the right answer! 🎮"
    },
    {
        question: "How many hours of OJT am I required to complete for my internship?",
        options: [
            { text: "200 hours", isCorrect: false },
            { text: "300 hours", isCorrect: true },
            { text: "500 hours", isCorrect: false }
        ],
        successMessage: "300 hours of the grind! ⏳",
        failMessage: "Nope! Guess again. 🏢"
    },
    {
        question: "Which Chinese micro-drama did we completely obsess over?",
        options: [
            { text: "Meteor Garden", isCorrect: false },
            { text: "When Love is a Losing Bet", isCorrect: true },
            { text: "Amidst a Snowstorm of Love", isCorrect: false }
        ],
        successMessage: "Yes! That plot was wild. 🍿",
        failMessage: "Wrong show! 📺"
    },
    {
        question: "What is my ultimate physical goal for working out?",
        options: [
            { text: "Marathon Runner", isCorrect: false },
            { text: "Bulk Lean / Mass-gain", isCorrect: true },
            { text: "Powerlifter", isCorrect: false }
        ],
        successMessage: "Getting that bulk lean! 💥",
        failMessage: "Not quite my goal! 💪"
    },
    {
        question: "When I'm playing my go-to competitive mobile game, what am I playing?",
        options: [
            { text: "Call of Duty: Mobile", isCorrect: false },
            { text: "League of Legends: Wild Rift", isCorrect: false },
            { text: "Mobile Legends: Bang Bang", isCorrect: true }
        ],
        successMessage: "You already know! ⚔️",
        failMessage: "Wrong game! 📱"
    },
    {
        question: "Who is the ultimate 'Tech Support' in this relationship?",
        options: [
            { text: "You", isCorrect: false },
            { text: "Me", isCorrect: true },
            { text: "Google", isCorrect: false }
        ],
        successMessage: "Always here to fix your tech problems! 👨‍💻",
        failMessage: "Hey now, give me some credit! 🔌"
    }
];

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
