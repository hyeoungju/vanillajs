const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
//우리의 데이터베이스
let toDos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  //내가지금 누룬 x의 li의 아이디를 가져와서 todos 배열안에 있는 id들을 검사해서 만약에 있다면 없애줘.
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}


function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "📌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); //자식으로마지막으로들어간ㄷ
  li.appendChild(button);
  toDoList.appendChild(li);

}

function toDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    // 무조건 하나이고 중복되지 않는 친구가 어떤게 있을까?
    //임의의 랜덤숫자를 20개주면 없지 않을까? 근데 재수가 없어서 같다면? 시간을 건들이자.
    id : Date.now(), //2022-09-19 1970-01-01 ~ 지금 현 시점을 밀리초로 계산한것
  }
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedTodo = localStorage.getItem("todos");
if (savedTodo) { //true다. 값이 있다
  const parsedTodos = JSON.parse(savedTodo);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);

}
