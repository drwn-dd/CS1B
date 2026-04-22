function showSection(sectionId) {
    document.getElementById("home").style.display = "none";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("laboratories").style.display = "none";
    document.getElementById("exam").style.display = "none";

    document.getElementById(sectionId).style.display = "block";
}

function goHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("laboratories").style.display = "none";
    document.getElementById("exam").style.display = "none";
}

function toggleMenu(el) {
    el.classList.toggle("active");
    document.getElementById("menu").classList.toggle("hidden");
}

function closeMenu() {
    document.getElementById("menu").classList.add("hidden");
    document.querySelector(".burger").classList.remove("active");
}
