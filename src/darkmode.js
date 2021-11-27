const darkBtn = document.querySelector(".dark");
const darkBack = document.getElementById("dark-wrap");

function darkMode(event) {
    event.preventDefault();
    darkBack.classList.toggle("darkmode");
    darkBack.style.transition = "0.4s";
}

darkBtn.addEventListener("click", darkMode);
