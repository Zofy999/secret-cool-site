

const CONFIG = {

    valentineName: "livie",


    pageTitle: "hi livie",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: [''],  // Heart emojis
        bears: ['']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "do you like me?",                                    // First interaction
            yesBtn: "yeah!",                                             // Text for "Yes" button
            noBtn: "NO!",                                               // Text for "No" button
            secretAnswer: "I LOVE you!"           // Secret hover message
        },
        second: {
            text: "how much do you love me?",                          // For the love meter
            startText: "this much :>",                                   // Text before the percentage
            nextBtn: "next ❤️"                                         // Text for the next button
        },
        third: {
            text: "will you be my valentine on february 14th, 2026? 🌹", // The big question!
            yesBtn: "yeah!",                                             // Text for "Yes" button
            noBtn: "nuh uh"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "no WAY I can't BELIEVE this :>>",  // Shows when they go past 5000%
        high: "yayyy :DD",              // Shows when they go past 1000%
        normal: "i love you TOOOO"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "yayyyy!!!!!!!!",
        message: "now cmere i want kissesssss <3",
        emojis: ""  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#609CF6",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#B7CAFF",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#BDD4F3",     // Button color (should stand out against the background)
        buttonHover: "#E2EFFF",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#2D75FF"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://www.youtube.com/watch?v=xH7zsRXS9vM", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.2                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
