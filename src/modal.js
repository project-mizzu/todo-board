const modal = document.querySelector("#modal");
const loginInput = document.querySelector(".modal-input");
const btn = document.querySelector(".modal-btn");
const name = document.querySelector(".name-input");

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    modal.style.display = "none";
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    if (username === ''){
      name.innerText = `Hello, Stranger!`;
    } else {
      name.innerText = `Good Day, ${username}`;
    }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    modal.addEventListener("submit", onLoginSubmit);
} else {
    modal.style.display = "none";
    paintGreetings(savedUsername);
}

btn.addEventListener("click", onLoginSubmit);