//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);

filterOption.addEventListener('change', filterTodo);


function addTodo(event) {

    //Prevent form from submitting
    event.preventDefault();

    //Create Todo Div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    //Add newTodo within the todoDiv
    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //Clear Input Value 
    todoInput.value = '';
}

function deleteCheck(event) {

    //Delete
    const item = event.target;

    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    //Check

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

// function filterTodo(event) {
//     const todos = todoList.childNodes;
//     todos.forEach(function (todo) {
//         if (todo.nodeName === "li") {
//             switch (event.target.value) {
//                 case "all":
//                     todo.style.display = "flex";
//                     break;
//                 case 'completed':
//                     if (todo.childern[0].classList.contains("completed")) {
//                         todo.style.display = "flex";
//                     } else {
//                         todo.style.display = "none";
//                     }
//                     break;
//                     case 'uncompleted':
//                         if (todo.childern[0].classList.contains("completed")) {
//                             todo.style.display = "none";
//                         } else {
//                             todo.style.display = "flex";
//                         }
//                         break;
//             }
//         }
//     });
// }

function filterTodo(event) {
    const todos = todoList.childNodes;
    for (let i = 1; i < todos.length; i++) {
        switch (event.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":
                if (todos[i].classList.contains('completed')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('completed')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
};