function signup(e) {
  event.preventDefault();

  let fname = document.getElementById("Name").value;
  let email = document.getElementById("Email").value;
  let password = document.getElementById("Password").value;

  let user = {
    username: fname,
    email: email,
    password: password,
  };
  let jsonformat = JSON.stringify(user);
  localStorage.setItem(fname, jsonformat);
  alert("Registered");
 
}

// =======================================Login Funtion================================================ //

function login(e) {
  event.preventDefault();

  let username = document.getElementById("Name").value;
  let password = document.getElementById("password").value;
  const terms = document.getElementById("exampleCheck1").checked;

  //   console.log(email, password);

  let user = localStorage.getItem(username);
  let data = JSON.parse(user);

  // Validations

  if (data == null) {
    alert("Wrong");
  } else if (username == data.username && password == data.password && terms) {
    window.location = "http://127.0.0.1:5500/home.html";
  } else {
    alert("Enter the correct details");
  }
}

// =======================================TODO Funtion================================================ //
let btnEl = document.getElementById("button-addon2");
let inputEl = document.getElementById("input-addon2");
let todosList = document.getElementById("todosList");
let todos = [];

btnEl.addEventListener("click", () => {
  todos.push(inputEl.value);
  console.log(todos);
  addTodo(inputEl.value);
  inputEl.value = "";
});

function addTodo(todo) {
  let para = document.createElement("p");
  para.innerText = todo;
  todosList.appendChild(para);

  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    remove(todo);
  });
  para.addEventListener("dblclick", () => {
    todosList.removeChild(para);
    remove(todo);
  });
}

function remove(todo) {
  let index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);
  }
}
