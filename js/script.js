
// FEATURE 1: Dark and Light Mode Toggle

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Switch to Light Mode";
        } else {
            themeButton.textContent = "Switch to Dark Mode";
        }
    });
}
// FEATURE 2: Live Digital Clock

const clock = document.getElementById("digital-clock");

function updateClock() {
    if (clock) {
        const currentTime = new Date();
        clock.textContent = currentTime.toLocaleTimeString();
    }
}

updateClock();
setInterval(updateClock, 1000);

// FEATURE 3: Character Counter

const messageInput = document.getElementById("message");
const characterCount = document.getElementById("character-count");

if (messageInput && characterCount) {
    messageInput.addEventListener("input", function () {
        const charactersUsed = messageInput.value.length;

        characterCount.textContent =
            charactersUsed + " / 300 characters";
    });
}

// FEATURE 4: Back-to-Top Button

const topButton = document.createElement("button");

topButton.textContent = "↑ Back to Top";
topButton.id = "back-to-top";
topButton.setAttribute("aria-label", "Back to top");

document.body.appendChild(topButton);

topButton.style.display = "none";

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// FEATURE 5: Time-Based Welcome Message

const welcomeMessage = document.getElementById("welcome-message");

if (welcomeMessage) {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        welcomeMessage.textContent = "Good morning! Welcome to my website.";
    } else if (currentHour < 18) {
        welcomeMessage.textContent = "Good afternoon! Welcome to my website.";
    } else {
        welcomeMessage.textContent = "Good evening! Welcome to my website.";
    }
}