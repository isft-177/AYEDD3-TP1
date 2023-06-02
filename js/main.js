import * as commons from './commons.js';

function createLabel(inpuntName) {
    const labelAttributes = [{name: 'for', value: inpuntName}];
    return commons.createElement('label', labelAttributes);
}
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

    //Constants
    const TITLE_TEXT = 'Práctica 1 - Lista de tareas';
    const TASK_NAME = 'taskName';
    const LIST_ID = 'list';
    const ADD_TASK = 'addTask';
    const TASK_NAME_PLACEHOLDER = 'Nombre de la tarea';
    const LIST_OF_TASKS = 'Lista de tareas';
    const ADD = 'Agregar';

    //Elements
    const title = commons.createElementWithInnerText('title', TITLE_TEXT);

    const header = commons.createElement('header');
    const main = commons.createElement('main');
    const section = commons.createElement('section');
    const article = commons.createElement('article');
    const article1 = commons.createElement('article');

    const h1 = commons.createElementWithInnerText('h1', TITLE_TEXT);

    const div = commons.createElement('div');

    const label = createLabel(TASK_NAME);
    const input = createInput(TASK_NAME, TASK_NAME, TASK_NAME_PLACEHOLDER);

    const button = createButton(ADD_TASK, ADD_TASK, ADD);
    button.addEventListener("click", () => addElementToList(LIST_ID, TASK_NAME));

    const h12 = commons.createElementWithInnerText('h1', LIST_OF_TASKS);
    const ul = commons.createElement('ul', [{name: 'id', value: LIST_ID}]);

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

    //Add elements to DOM
    elements.forEach(element => {
        commons.appendChildToParent(element.parent, element.child);
    });
}