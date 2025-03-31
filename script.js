// 🌟 Mobile Navigation Toggle
const nav = document.querySelector("nav");
const menuBtn = document.createElement("div");  // Creating a Menu Button
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML = "☰";  // Simple hamburger icon
document.querySelector("header").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
        nav.classList.remove("active");
    }
});

// 🌟 Smooth Scroll Effect
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });

        // Close menu on mobile after clicking a link
        nav.classList.remove("active");
    });
});

// 🌟 Typing Animation Fix (Looping Text)
const typingText = document.querySelector(".typing-text span");
const words = ["Web Developer", "Developer", "Web Designer", "Youtuber", "Script Writer"];
let wordIndex = 0;

function typeWords() {
    typingText.innerHTML = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}

setInterval(typeWords, 2000);  // Change text every 2 seconds

console.log("🚀 Website Loaded Successfully!");
