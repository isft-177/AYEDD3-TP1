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

    const elements = [{parent: document.head, child: title},
                      {parent: header, child: h1},
                      {parent: document.body, child: header},
                      {parent: document.body, child: main},
                      {parent: main, child: section},
                      {parent: section, child: article},
                      {parent: article, child: div},
                      {parent: div, child: label},
                      {parent: div, child: input},
                      {parent: div, child: button},
                      {parent: section, child: article1},
                      {parent: article1, child: h12},
                      {parent: article1, child: ul}];

    elements.forEach(element => {
        commons.appendChildToParent(element.parent, element.child);
    });
}