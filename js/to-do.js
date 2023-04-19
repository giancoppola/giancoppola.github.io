let obj;

window.addEventListener('load', function () {
    console.log('here');
    if (localStorage.getItem('obj')){
        obj = localStorage.getItem('obj');
        obj = JSON.parse(obj);
        console.log('file exists');
        console.log(obj);
        for (let key of Object.keys(obj.todo)){
            recoverItems('todo', key, obj.todo[key]);
        }
        for (let key of Object.keys(obj.doing)){
            recoverItems('doing', key, obj.doing[key]);
        }
        for (let key of Object.keys(obj.done)){
            recoverItems('done', key, obj.done[key]);
        }
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
});

const todoNew = document.querySelector('#todo-new');
const doingNew = document.querySelector('#doing-new');
const doneNew = document.querySelector('#done-new');

const todoInput = document.querySelector('#todo-new-input');
const doingInput = document.querySelector('#doing-new-input');
const doneInput = document.querySelector('#done-new-input');

todoNew.addEventListener('click', function () {
    let value = todoInput.value;
    addNewItem('todo', value);
});
doingNew.addEventListener('click', function () {
    let value = doingInput.value;
    addNewItem('doing', value);
});
doneNew.addEventListener('click', function () {
    let value = doneInput.value;
    addNewItem('done', value);
});

todoInput.addEventListener('keypress', (event) => {
    if (event.code == 'Enter') {
        let value = todoInput.value;
        addNewItem('todo', value);
    }
})
doingInput.addEventListener('keypress', (event) => {
    if (event.code == 'Enter') {
        let value = doingInput.value;
        addNewItem('doing', value);
    }
})
doneInput.addEventListener('keypress', (event) => {
    if (event.code == 'Enter') {
        let value = doneInput.value;
        addNewItem('done', value);
    }
})

const todoList = document.querySelector('#main-grid-to-do-list');
const doingList = document.querySelector('#main-grid-doing-list');
const doneList = document.querySelector('#main-grid-done-list');

function recoverItems(type, key, value){
    if (type === 'todo'){
        let item = document.createElement('div');
        let text = document.createElement('p');
        let close = document.createElement('button');
        close.classList.add('main-grid-to-do-list-item-close');
        close.innerHTML = 'X';
        close.addEventListener('click', function() {
            document.querySelector(`div[data="${key}"]`).style.animation = 'deleteItem 0.4s linear';
            setTimeout(function() {
                document.querySelector(`div[data="${key}"]`).remove();
                delete obj.todo[`${key}`];
                localStorage.setItem('obj', JSON.stringify(obj));
            }, 390);
        });
        item.classList.add('main-grid-to-do-list-item');
        item.setAttribute('data', `${key}`);
        item.setAttribute('draggable', 'true');
        if (value === ''){
            text.innerHTML = 'Untitled';
        }
        else{
            text.innerHTML = value;
        }
        item.appendChild(text);
        item.appendChild(close);
        todoList.appendChild(item);
        obj.todo[`${key}`] = text.innerHTML;
        todoInput.value = '';
    }
    else if (type === 'doing'){
        let item = document.createElement('div');
        let text = document.createElement('p');
        let close = document.createElement('button');
        close.classList.add('main-grid-doing-list-item-close');
        close.innerHTML = 'X';
        close.addEventListener('click', function() {
            document.querySelector(`div[data="${key}"]`).style.animation = 'deleteItem 0.4s linear';
            setTimeout(function() {
                document.querySelector(`div[data="${key}"]`).remove();
                delete obj.doing[`${key}`];
                localStorage.setItem('obj', JSON.stringify(obj));
            }, 390);
        });
        item.classList.add('main-grid-doing-list-item');
        item.setAttribute('data', `${key}`);
        item.setAttribute('draggable', 'true');
        if (value === ''){
            text.innerHTML = 'Untitled';
        }
        else{
            text.innerHTML = value;
        }
        item.appendChild(text);
        item.appendChild(close);
        doingList.appendChild(item);
        obj.doing[`${key}`] = text.innerHTML;
        doingInput.value = '';
    }
    else if (type === 'done'){
        let item = document.createElement('div');
        let text = document.createElement('p');
        let close = document.createElement('button');
        close.classList.add('main-grid-done-list-item-close');
        close.innerHTML = 'X';
        close.addEventListener('click', function() {
            document.querySelector(`div[data="${key}"]`).style.animation = 'deleteItem 0.4s linear';
            setTimeout(function() {
                document.querySelector(`div[data="${key}"]`).remove();
                delete obj.done[`${key}`];
                localStorage.setItem('obj', JSON.stringify(obj));
            }, 390);
        });
        item.classList.add('main-grid-done-list-item');
        item.setAttribute('data', `${key}`);
        item.setAttribute('draggable', 'true');
        if (value === ''){
            text.innerHTML = 'Untitled';
        }
        else{
            text.innerHTML = value;
        }
        item.appendChild(text);
        item.appendChild(close);
        doneList.appendChild(item);
        obj.done[`${key}`] = text.innerHTML;
        doneInput.value = '';
    }
}

function addNewItem(type, value){
    if (type === 'todo'){
        let number = Object.keys(obj.todo).length + 1;
        let item = document.createElement('div');
        let text = document.createElement('p');
        let close = document.createElement('button');
        close.classList.add('main-grid-to-do-list-item-close');
        close.innerHTML = 'X';
        close.addEventListener('click', function() {
            document.querySelector(`div[data="todo-${number}"]`).style.animation = 'deleteItem 0.4s linear';
            setTimeout(function() {
                document.querySelector(`div[data="todo-${number}"]`).remove();
                delete obj.todo[`todo-${number}`];
                localStorage.setItem('obj', JSON.stringify(obj));
            }, 390);
        });
        item.classList.add('main-grid-to-do-list-item');
        item.setAttribute('data', `todo-${number}`);
        item.setAttribute('draggable', 'true');
        if (value === ''){
            text.innerHTML = 'Untitled';
        }
        else{
            text.innerHTML = value;
        }
        item.appendChild(text);
        item.appendChild(close);
        todoList.appendChild(item);
        obj.todo[`todo-${number}`] = text.innerHTML;
        localStorage.setItem('obj', JSON.stringify(obj));
        todoInput.value = '';
    }
    else if (type === 'doing'){
        let number = Object.keys(obj.todo).length + 1;
        let item = document.createElement('div');
        let text = document.createElement('p');
        let close = document.createElement('button');
        close.classList.add('main-grid-doing-list-item-close');
        close.innerHTML = 'X';
        close.addEventListener('click', function() {
            document.querySelector(`div[data="doing-${number}"]`).style.animation = 'deleteItem 0.4s linear';
            setTimeout(function() {
                document.querySelector(`div[data="doing-${number}"]`).remove();
                delete obj.doing[`doing-${number}`];
                localStorage.setItem('obj', JSON.stringify(obj));
            }, 390);
        });
        item.classList.add('main-grid-doing-list-item');
        item.setAttribute('data', `doing-${number}`);
        item.setAttribute('draggable', 'true');
        if (value === ''){
            text.innerHTML = 'Untitled';
        }
        else{
            text.innerHTML = value;
        }
        item.appendChild(text);
        item.appendChild(close);
        doingList.appendChild(item);
        obj.doing[`doing-${number}`] = text.innerHTML;
        localStorage.setItem('obj', JSON.stringify(obj));
        doingInput.value = '';
    }
    else if (type === 'done'){
        let number = Object.keys(obj.todo).length + 1;
        let item = document.createElement('div');
        let text = document.createElement('p');
        let close = document.createElement('button');
        close.classList.add('main-grid-done-list-item-close');
        close.innerHTML = 'X';
        close.addEventListener('click', function() {
            document.querySelector(`div[data="done-${number}"]`).style.animation = 'deleteItem 0.4s linear';
            setTimeout(function() {
                document.querySelector(`div[data="done-${number}"]`).remove();
                delete obj.done[`done-${number}`];
                localStorage.setItem('obj', JSON.stringify(obj));
            }, 390);
        });
        item.classList.add('main-grid-done-list-item');
        item.setAttribute('data', `done-${number}`);
        item.setAttribute('draggable', 'true');
        if (value === ''){
            text.innerHTML = 'Untitled';
        }
        else{
            text.innerHTML = value;
        }
        item.appendChild(text);
        item.appendChild(close);
        doneList.appendChild(item);
        obj.done[`done-${number}`] = text.innerHTML;
        localStorage.setItem('obj', JSON.stringify(obj));
        doneInput.value = '';
    }
}