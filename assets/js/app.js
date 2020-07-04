const input_text = document.getElementById('input-text');
const button = document.getElementById('button');
const taskList = document.getElementById('task-list');

button.addEventListener('click', addToDo);

function addToDo(e) {
    console.log('ciao')

    if (input_text.value === "") {
        alert('Inserisci un nota');
    }
    
    // Creare nuovo li e aggiungere classe
    const li = document.createElement('li');
    li.className = 'task';

    // creare text node e metterlo dentro il li
    li.appendChild(document.createTextNode(input_text.value))

    e.preventDefault();
}