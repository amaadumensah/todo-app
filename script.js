const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList= document.getElementById('todo-list');  //ul



let todoItems = [];

function addTodo(text) {
    todoItems.push(text)
}

function appendTodo(text) {
    const li = document.createElement('li');
    li.innerText = text;
    todoList.appendChild(li)
}

 
function eventHandler() {
    let todoText  = todoInput.value;

    if (todoText === ''  ) {
        alert('please type a text')
    } else {
        addTodo(todoText);
        appendTodo(todoText)
        todoInput.value = ''
        todoInput.focus();
    }

}




addBtn.addEventListener('click', eventHandler);


