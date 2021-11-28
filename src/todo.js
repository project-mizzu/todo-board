const todoDate = document.querySelector(".today");
const today = new Date();
const todayY = today.getFullYear();
const todayD = today.getMonth() + 1;
const todayDate = today.getDate();

todoDate.innerText = `${todayY}.${todayD}.${todayDate}`;

const toDoForm = document.querySelector("#todo-input");
const toDoInput = document.querySelector(".todo-input-text");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const newList = document.createElement("li");
    newList.id = newTodo.id;
    const newSpan = document.createElement("span");
    newSpan.innerText = newTodo.text;
    const newBtn = document.createElement("button");
    newBtn.innerText = "❌";
    newBtn.addEventListener("click", deleteToDo);

    newList.appendChild(newSpan);
    newList.appendChild(newBtn);

    toDoList.appendChild(newList);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}