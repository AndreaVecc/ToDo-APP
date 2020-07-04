const input_text = document.getElementById('input-text');
const button = document.getElementById('button');
const taskList = document.getElementById('task-list');

button.addEventListener('click', addToDo);
taskList.addEventListener('click', removeTask);

function addToDo(e) {

    if (input_text.value === '') {
        alert('Inserisci una nota');
    }
    
    const li = document.createElement('li');
    li.className = 'task';
    taskList.appendChild(li);

    li.appendChild(document.createTextNode(input_text.value));

    const link = document.createElement('a');
    link.innerHTML = '<p>X</p>';
    link.className = 'delete-todo'
    li.appendChild(link);

    input_text.value = '';

    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove();
    }
} 