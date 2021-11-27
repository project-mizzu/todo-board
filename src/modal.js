const modal = document.querySelector("#modal");
const btn = document.querySelector(".modal-btn");

function modalDel(event) {
    event.preventDefault();
    modal.style.display = "none";
}

btn.addEventListener("click", modalDel);