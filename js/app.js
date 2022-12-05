const loginForm = document.querySelector("#login-form");
const userInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greeting2 = document.querySelector("#greeting2");

const color = ["gray", "pink", "skyblue", "salmon", "tomato"];

const randomNum = Math.floor(Math.random() * color.length);

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = userInput.value;

  localStorage.setItem("username", username);
  showGreeting(username);
}

function showGreeting(username) {
  greeting.innerText = "Hello!";
  greeting2.innerText = username;
  greeting.style.color = color[randomNum];
  greeting2.style.color = color[randomNum];
  greeting.classList.remove("hidden");
  greeting2.classList.remove("hidden");
}

const saveUser = localStorage.getItem("username");

if (saveUser == null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginSubmit);
}else {
  showGreeting(saveUser);
}
