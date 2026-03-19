document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");
        toggleBtn.textContent = isDark ? "☀️" : "🌙";
    });
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});