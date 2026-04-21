function showSection(sectionId) {
    document.getElementById("home").style.display = "none";
    document.getElementById("activity").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("exam").style.display = "none";

    document.getElementById(sectionId).style.display = "block";
}

function goHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("activity").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("exam").style.display = "none";
}

function toggleMenu(el) {
    el.classList.toggle("active");
    document.getElementById("menu").classList.toggle("hidden");
}

function closeMenu() {
    document.querySelector(".burger").classList.remove("active");
    document.getElementById("menu").classList.add("hidden");
}
