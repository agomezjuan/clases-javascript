const app = document.getElementById('app');

const h1 = document.createElement('h1');
const ul = document.createElement('ul');

h1.textContent = 'To Do App';

// javascript object notation : json
const imagenes = JSON.parse(localStorage.getItem('imagenes')) || []

app.appendChild(h1);



// Array de tareas
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Recorrer el array de tareas
for (let i = 0; i < tasks.length; i++) {
    const element = tasks[i];
    const li = document.createElement('li');
    li.innerHTML = element + '<i class="fa-solid fa-trash"></i>';
    ul.appendChild(li);
}

// Formulario
const form = document.createElement('form');
const inputTitle = document.createElement('input');
const inputImageUrl = document.createElement('input');
inputTitle.setAttribute('type', 'text');
inputImageUrl.setAttribute('type', 'text');
inputTitle.setAttribute('placeholder', 'Titulo');
inputImageUrl.setAttribute('placeholder', 'Url de imagen');

const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.textContent = 'Crear';

form.appendChild(inputTitle);
form.appendChild(inputImageUrl);
form.appendChild(button);

app.appendChild(form);



app.appendChild(ul);

// Evento click
const icons = document.querySelectorAll('i');

icons.forEach(function (icon) {
    icon.addEventListener('click', function (e) {
        const tarea = e.target;
        let confimar = confirm('¿Estás seguro de eliminar la tarea?');
        if (confimar) {
            tarea.parentElement.remove();
            const indexToDelete = tasks.indexOf(tarea.parentElement.textContent);
            tasks.splice(indexToDelete, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    })
})

const titleImagenes = document.createElement('h2');

titleImagenes.textContent = 'Imagenes';

app.appendChild(titleImagenes);

// for (let i = 0; i < imagenes.length; i++) {
//     const imagen = imagenes[i];
//     const img = document.createElement('img');
//     img.setAttribute('src', imagen.imagen);
//     img.setAttribute('alt', imagen.alt);
//     app.appendChild(img);

// }
const imgContainer = document.createElement('section');

imagenes.forEach(function (imagen) {
    const picture = document.createElement('picture');
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = imagen.alt;

    const img = document.createElement('img');
    img.setAttribute('src', imagen.imagen);
    img.setAttribute('alt', imagen['alt']);
    img.setAttribute('class', 'imagen')

    picture.appendChild(img);
    picture.appendChild(figcaption);

    imgContainer.appendChild(picture);


})
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // const li = document.createElement('li');
    // li.innerHTML = input.value + '<i class="fa-solid fa-trash"></i>';
    // ul.appendChild(li);
    // tasks.push(input.value);
    // console.log(tasks);
    const imagen = {
        imagen: inputImageUrl.value,
        alt: inputTitle.value
    }
    imagenes.push(imagen);
    const picture = document.createElement('picture');
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = imagen.alt;

    const img = document.createElement('img');
    img.setAttribute('src', imagen.imagen);

    img.setAttribute('class', 'imagen')

    picture.appendChild(img);
    picture.appendChild(figcaption);

    imgContainer.appendChild(picture);


    localStorage.setItem("imagenes", JSON.stringify(imagenes))
    inputTitle.value = '';
    inputImageUrl.value = '';
})

app.appendChild(imgContainer);

console.log(ul.children);
console.log(imgContainer.firstChild);