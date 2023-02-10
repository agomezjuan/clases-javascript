const app = document.getElementById('app');

const h1 = document.createElement('h1');
const ul = document.createElement('ul');

h1.textContent = 'To Do App';

app.appendChild(h1);



// Array de tareas
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Recorrer el array de tareas
for (let i = 0; i < tasks.length; i++) {
    const element = tasks[i];
    const li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
}

// Formulario
const form = document.createElement('form');
const input = document.createElement('input');
input.setAttribute('type', 'text');

const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.textContent = 'Crear';

form.appendChild(input);
form.appendChild(button);

app.appendChild(form);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    tasks.push(input.value);
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    input.value = '';
})

app.appendChild(ul);

// Evento click
ul.addEventListener('click', function (e) {
    const element = e.target;
    if (element.tagName === 'LI') {
        element.remove();
    }
});
