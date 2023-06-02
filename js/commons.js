export function hello() {
    console.log("Hola Mundo");
}

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

export function capitalize(value) {
    return (value.length > 1) ? (value[0].toUpperCase() + value.substring(1)) : value.toUpperCase();
}