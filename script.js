let inputElement = document.querySelector('input[name="input"]')
let buttonElement = document.querySelector('button');
let ulElement = document.querySelector('ul');

let array = JSON.parse(localStorage.getItem('list')) || [];



function renderTodo() {
    
    ulElement.innerHTML = '';

    for(let arr of array) {
    
        let liElement = document.createElement('li');
        let arrayText = document.createTextNode(arr);

        let linkElement = document.createElement('a');
        let linkText = document.createTextNode('Excluir');
        linkElement.setAttribute('class', 'li-space');
        linkElement.setAttribute('href', '#');
        linkElement.appendChild(linkText);
        
        var pos = array.indexOf(arr)
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        liElement.appendChild(arrayText);
        liElement.appendChild(linkElement);
        ulElement.appendChild(liElement);

        
    }

}

renderTodo();

buttonElement.onclick = addTodo;

function addTodo() {

    var todoText = inputElement.value;

    array.push(todoText);
    inputElement.value = '';
    renderTodo();
    saveToStorage();
}


function deleteTodo(pos) {
    array.splice(pos, 1);
    renderTodo();
    saveToStorage();
}

function saveToStorage() {
    
    localStorage.setItem('list', JSON.stringify(array));
}
