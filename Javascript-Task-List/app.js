const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const collection = document.querySelector(".collection");
const clearTask = document.querySelector(".clear-tasks")
const filterInput = document.querySelector("#filter");

//Event Listeners

taskForm.addEventListener("submit",taskFormFunction);
clearTask.addEventListener("click", clearTaskHandler);
filterInput.addEventListener("keyup", filterHandler);
document.addEventListener("DOMContentLoaded",getTasksFromLocalStorage);

//Event Listeners Functions

function taskFormFunction(event) {
  event.preventDefault(); // default functionality rukdo
  if (taskInput.value == "") {
    alert("pagal larke lakh to lo bhai");
    return;
  }

  collection.innerHTML += `<li class="collection-item">${taskInput.value}<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a></li>`;
  storeTaskInLocalStorage(taskInput.value);
  taskInput.value = "" ;
  bindAllDeleteBtns();

}

function clearTaskHandler(event) {
  event.preventDefault();
  if (confirm("are you sure ?")) {
    collection.innerHTML = "";
    localStorage.removeItem("tasks");
  }
}

function filterHandler(event) {
  event.preventDefault();
  const currentElement = event.target;
  const filterValue = currentElement.value.toLowerCase();
  const collectionItems = document.querySelectorAll(".collection-item");
  if (collectionItems.length > 0) {
    collectionItems.forEach(function (singleItem, index) {
      const taskValue = singleItem.innerText.toLowerCase();
      if (taskValue.indexOf(filterValue) == -1) {
        singleItem.style.display = "none";
      } else {
        singleItem.style.display = "block";
      }
    });
  }
}
//ye nhi hata muhje
function storeTaskInLocalStorage(taskInputValue) {
  let tasks = [];
  if (localStorage.getItem("tasks") != null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  console.log("updated array of tasks", [...tasks]);
  tasks.push(taskInputValue);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  let tasks = [];
  if (localStorage.getItem("tasks") != null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  if (tasks.length > 0) {
    tasks.forEach(function (singleItem, index) {
      collection.innerHTML += `<li class="collection-item">${singleItem}<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a></li>`;
    });
  }
  bindAllDeleteBtns();
}

function bindAllDeleteBtns() {
  const allLinks = document.querySelectorAll(".delete-item");
  if (allLinks.length > 0){
    allLinks.forEach(function (singleItem, index){
     singleItem.addEventListener("click", function (event){
       event.preventDefault();
       const currentElement = event.target;
       if (confirm("are you sure ?")) {
         const liElement = currentElement.parentElement.parentElement;
         removeTaskFromLocalStorage(liElement.innerText);
         liElement.remove();
       }
     })
    });
  }
}
//ye nhi hata muhje
function removeTaskFromLocalStorage(findTaskValue) {
  let tasks = [];
  if (localStorage.getItem("tasks") != null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  if (tasks.length > 0) {
    tasks.forEach(function (singleItem, index) {
      if (singleItem == findTaskValue) {
        tasks.splice(index, 1);
      }
    });
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}