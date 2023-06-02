export function createElement(name, attributes) {
    const element = document.createElement(name);

    if(attributes) {
        attributes.forEach((attribute) => element.setAttribute(attribute.name, attribute.value));
    }

    return element;
}

export function appendChildToParent(parent, child) {
    parent.appendChild(child);
}

export function createElementWithInnerText(elementName, innerText) {
    const h1 = createElement(elementName);
    h1.innerText = innerText;

    return h1;
}

export function createLabel(inputName, innerText) {
    const labelAttributes = [{name: 'for', value: inputName}];
    const label = createElement('label', labelAttributes);

    if(!innerText && innerText !== undefined) {
        label.innerText = innerText;
    }

    return label;
}
export function createInput(id, name, placeholder) {
    const inputAttributes = [{name: 'type', value: 'text'},
        {name: 'id', value: id},
        {name: 'name', value: name},
        {name: 'placeholder', value: placeholder}]

    return createElement('input', inputAttributes);
}

export function createButton(id, name, value) {
    const buttonAttributes = [{name: 'type', value: 'button'},
        {name: 'id', value: id},
        {name: 'name', value: name},
        {name: 'value', value: value}]

    return createElement('input', buttonAttributes);
}

export function capitalize(value) {
    return (value.length > 1) ? (value[0].toUpperCase() + value.substring(1)) : value.toUpperCase();
}