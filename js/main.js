import * as commons from './commons.js';

function createInput(id, name, placeholder) {
    const inputAttributes = [{name: 'type', value: 'text'},
        {name: 'id', value: id},
        {name: 'name', value: name},
        {name: 'placeholder', value: placeholder}]

    return commons.createElement('input', inputAttributes);
}

function createButton(id, name, value) {
    const buttonAttributes = [{name: 'type', value: 'button'},
        {name: 'id', value: id},
        {name: 'name', value: name},
        {name: 'value', value: value}]

    return commons.createElement('input', buttonAttributes);
}

function addElementToList(listName, inputId) {


    const ul = document.querySelector(`#${listName}`);
    const input = document.querySelector(`#${inputId}`);
    const li = commons.createElement('li');

    if(!input.value) {
        alert("Debe ingresar una tarea");
        return;
    }

    li.innerText = commons.capitalize(input.value);
    commons.appendChildToParent(ul, li)

    input.value = '';
}

window.onload = (ev) => {
    commons.hello();

    const titleText = 'Práctica 1 - Lista de tareas';
    const title = commons.createElement('title');
    title.innerText = titleText;

    const header = commons.createElement('header');
    const main = commons.createElement('main');
    const section = commons.createElement('section');
    const article = commons.createElement('article');
    const article1 = commons.createElement('article');

    const h1 = commons.createElement('h1');
    h1.innerText = titleText;

    const div = commons.createElement('div');

    const inputId = 'taskName';
    const labelAttributes = [{name: 'for', value: 'taskName'}];
    const label = commons.createElement('label', labelAttributes);
    const input = createInput(inputId, 'taskName', 'Nombre de la tarea');

    const listId = 'list';
    const button = createButton('addTask', 'addTask', 'Agregar');
    button.addEventListener("click", () => addElementToList(listId, inputId));

    const ul = commons.createElement('ul', [{name: 'id', value: listId}]);
    const h12 = commons.createElement('h1');
    h12.innerText = 'Lista de tareas';

    commons.appendChildToParent(document.head, title);
    commons.appendChildToParent(header, h1);
    commons.appendChildToParent(document.body, header)
    commons.appendChildToParent(document.body, main)
    commons.appendChildToParent(main, section)
    commons.appendChildToParent(section, article)
    commons.appendChildToParent(article, div)
    commons.appendChildToParent(div, label);
    commons.appendChildToParent(div, input);
    commons.appendChildToParent(div, button);
    commons.appendChildToParent(section, article1);
    commons.appendChildToParent(article1, h12);
    commons.appendChildToParent(article1, ul);
}