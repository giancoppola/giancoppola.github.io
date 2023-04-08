let obj = {};

if (localStorage.getItem('obj')){
    obj = JSON.parse(localStorage.getItem('obj'));
    console.log('file exists');
    console.log(obj);
}
else {
    obj = {
        todo : {},
        doing : {},
        done : {},
    };
    console.log('no local file');
    console.log(obj);
}

const todoNew = document.querySelector('#todo-new');
const doingNew = document.querySelector('#doing-new');
const doneNew = document.querySelector('#done-new');

todoNew.addEventListener('click', function () {
    addNewItem('todo');
});
doingNew.addEventListener('click', function () {
    addNewItem('doing');
});
doneNew.addEventListener('click', function () {
    addNewItem('done');
});


const todoList = document.querySelector('#main-grid-to-do-list');
const doingList = document.querySelector('#main-grid-doing-list');
const doneList = document.querySelector('#main-grid-done-list');

function addNewItem(type){
    if (type === 'todo'){
        let number = Object.keys(obj.todo).length + 1;
        let item = document.createElement('div');
        let input = document.createElement('input');
        let close = document.createElement('button');
        close.classList.add('main-grid-to-do-list-item-close');
        close.innerHTML = 'X';
        close.addEventListener('click', function() {
            document.querySelector(`div[data="todo-${number}"]`).remove();
        });
        item.classList.add('main-grid-to-do-list-item');
        item.setAttribute('data', `todo-${number}`)
        input.setAttribute('placeholder', 'Untitled');
        item.appendChild(input);
        item.appendChild(close);
        todoList.appendChild(item);
        obj.todo[`todo-${number}`] = "Untitled";
    }
}