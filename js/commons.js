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

export function capitalize(value) {
    return (value.length > 1) ? (value[0].toUpperCase() + value.substring(1)) : value.toUpperCase();
}