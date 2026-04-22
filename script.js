function hideAll() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("laboratories").classList.add("hidden");
    document.getElementById("exam").classList.add("hidden");
}

function showSection(id) {
    hideAll();
    document.getElementById(id).classList.remove("hidden");

    if (id === "dashboard") {
        updateDashboard();
    }
}

function goHome() {
    hideAll();
    document.getElementById("home").classList.remove("hidden");
}

function toggleMenu(el) {
    el.classList.toggle("active");
    document.getElementById("menu").classList.toggle("hidden");
}

function closeMenu() {
    document.querySelector(".burger").classList.remove("active");
    document.getElementById("menu").classList.add("hidden");
}

function updateDashboard() {
    let quiz = document.querySelectorAll("#quiz .box img").length;
    let lab = document.querySelectorAll("#laboratories .box img").length;
    let exam = document.querySelectorAll("#exam .box img").length;

    document.getElementById("quizCount").innerText = quiz;
    document.getElementById("labCount").innerText = lab;
    document.getElementById("examCount").innerText = exam;
    document.getElementById("totalCount").innerText = quiz + lab + exam;
}
