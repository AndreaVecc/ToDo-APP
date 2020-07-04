const input_text = document.getElementById('input-text');
const button = document.getElementById('button');
const taskList = document.getElementById('task-list');

button.addEventListener('click', addToDo);
taskList.addEventListener('click', removeTask);

function addToDo(e) {
    console.log('ciao')

    if (input_text.value === "") {
        alert('Inserisci un nota');
    }
    
    // Creare nuovo li e aggiungere classe
    const li = document.createElement('li');
    li.className = 'task';  // tutti i li creati avranno come classe task

    // mettiamo il testo dell'input nel li con appendChild e con createTextNode lo andiamo ad inserire 
    li.appendChild(document.createTextNode(input_text.value));

    // creare link
    const link = document.createElement('a');

    // aggiungere classe a <a>
    link.className = "delete-todo";

    // aggiungi x al <a></a>

    link.innerHTML = '<h5>X</h5>';

    // mettere link nel li
    li.appendChild(link);

    // mettere il li dentro l'ul
    taskList.appendChild(li);
    
    // ripuliamo l'input ogni volta che abbiamo inserito una todo
    input_text.value = "";

    

    console.log(taskList);
    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove();
    }
}