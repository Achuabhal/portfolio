

document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: [
            "web Develper",
            "Front-end Developer",
            "Back-end Developer",
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true
    };

    var typed = new Typed('#hi', options);
});



document.addEventListener("DOMContentLoaded", function() {
    initializeTilt(".section3", 25, 400);
});