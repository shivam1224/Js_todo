// Todo App
var ul = document.getElementById('todoList'),
    addTodo = document.getElementById('addTodo'),
    removeAllTodo = document.getElementById('clearList');

// when we click on adding new todo task

document.getElementById('todoValue').onkeypress = (e) => {
    if(e.keyCode === 13){
        addTodoData(ul)
        e.preventDefault();
    }
    
}

// logic that will add new todo task
function addTodoData(targetUL) {

    var inputValue = document.getElementById('todoValue').value,
        li = document.createElement('li'),
        textNode = document.createTextNode(inputValue + ''),
        button = document.createElement('button'),
        doneButton = document.createElement('button');
    //remove input value
    document.getElementById('todoValue').value = ''

    // alert if no value enter's
    if (inputValue == '') {
        alert('Please enter value in Input box');
        return false;
    }

    // Add relevant info for delete and done todo task
    button.innerHTML = 'X';
    button.setAttribute('onclick', 'removeTodo(this);')
    li.setAttribute('onclick', 'doneTodo(this);')
    li.appendChild(textNode)
    li.appendChild(button);

    targetUL.appendChild(li)

}

function removeTodo(item) {
    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}

function doneTodo(item) {
    item.setAttribute('onclick', 'notDone(this);')
    item.className = "taskDone";
}

function notDone(item){
    item.setAttribute('onclick', 'doneTodo(this);')
    item.classList.remove("taskDone"); 
}

removeAllTodo.onclick = () => {
    ul.innerHTML = ''
}

