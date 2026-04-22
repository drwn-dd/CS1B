function showSection(sectionId) {
    document.getElementById("home").style.display = "none";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("laboratories").style.display = "none";
    document.getElementById("exam").style.display = "none";

    document.getElementById(sectionId).style.display = "block";

    updateDashboard();
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

/* DASHBOARD COUNTER FIX */
function updateDashboard() {
    let quiz = document.querySelectorAll("#quiz .box").length;
    let lab = document.querySelectorAll("#laboratories .box").length;
    let exam = document.querySelectorAll("#exam .box").length;

    document.getElementById("quizCount").innerText = quiz;
    document.getElementById("labCount").innerText = lab;
    document.getElementById("examCount").innerText = exam;
    document.getElementById("totalCount").innerText = quiz + lab + exam;
}
