let obj;

// onload function reads local storage to determine if object exists,
// if it does it runs the recoverItems function for all three columns,
// if it doesn't it creates an empty object ready to populate
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

// new item create button elements
const todoNew = document.querySelector('#todo-new');
const doingNew = document.querySelector('#doing-new');
const doneNew = document.querySelector('#done-new');

// new item input field elements
const todoInput = document.querySelector('#todo-new-input');
const doingInput = document.querySelector('#doing-new-input');
const doneInput = document.querySelector('#done-new-input');

// adds event to the create buttons that calls the addNewItem function
// passing the input value along with the type of new item
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
// same as above but allows user to just hit enter after text input
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

// elements for each column
const todoList = document.querySelector('#main-grid-to-do-list');
const doingList = document.querySelector('#main-grid-doing-list');
const doneList = document.querySelector('#main-grid-done-list');

// on page load this function is called to recover the to do list items
// that are held within local storage
function recoverItems(type, key, value){
    if (type === 'todo'){
        // creating new elements to populate with info from localStorage
        let item = document.createElement('div');
        let text = document.createElement('p');
        let close = document.createElement('button');
        // close button just has an x in, and event listener to play a delete
        // animation and delete said item from local storage
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
        // set item class, data value to determine its relation to the object,
        // text, and sets it to be draggable to move from list to list
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
        // adds to JS object to be referenced easily
        obj.todo[`${key}`] = text.innerHTML;
        todoInput.value = '';
    }
    else if (type === 'doing'){
        // creating new elements to populate with info from localStorage
        let item = document.createElement('div');
        let text = document.createElement('p');
        let close = document.createElement('button');
        // close button just has an x in, and event listener to play a delete
        // animation and delete said item from local storage
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
        // set item class, data value to determine its relation to the object,
        // text, and sets it to be draggable to move from list to list
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
        // adds to JS object to be referenced easily
        obj.doing[`${key}`] = text.innerHTML;
        doingInput.value = '';
    }
    else if (type === 'done'){
        // creating new elements to populate with info from localStorage
        let item = document.createElement('div');
        let text = document.createElement('p');
        let close = document.createElement('button');
        // close button just has an x in, and event listener to play a delete
        // animation and delete said item from local storage
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
        // set item class, data value to determine its relation to the object,
        // text, and sets it to be draggable to move from list to list
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
        // adds to JS object to be referenced easily
        obj.done[`${key}`] = text.innerHTML;
        doneInput.value = '';
    }
}

// this function is called to when user adds a new list item
function addNewItem(type, value){
    if (type === 'todo'){
        // figures out id based on length of keys in object section plus 1
        let number = Object.keys(obj.todo).length + 1;
        // creating new elements to populate with info from input field
        let item = document.createElement('div');
        let text = document.createElement('p');
        let close = document.createElement('button');
        // close button just has an x in, and event listener to play a delete
        // animation and delete said item from local storage
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
        // set item class, data value to determine its relation to the object,
        // text, and sets it to be draggable to move from list to list
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
        // adds to JS object to be referenced easily
        obj.todo[`todo-${number}`] = text.innerHTML;
        // updates object within local storage
        localStorage.setItem('obj', JSON.stringify(obj));
        todoInput.value = '';
    }
    else if (type === 'doing'){
        // figures out id based on length of keys in object section plus 1
        let number = Object.keys(obj.todo).length + 1;
        // creating new elements to populate with info from input field
        let item = document.createElement('div');
        let text = document.createElement('p');
        let close = document.createElement('button');
        // close button just has an x in, and event listener to play a delete
        // animation and delete said item from local storage
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
        // set item class, data value to determine its relation to the object,
        // text, and sets it to be draggable to move from list to list
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
        // adds to JS object to be referenced easily
        obj.doing[`doing-${number}`] = text.innerHTML;
        // updates object within local storage
        localStorage.setItem('obj', JSON.stringify(obj));
        doingInput.value = '';
    }
    else if (type === 'done'){
        // figures out id based on length of keys in object section plus 1
        let number = Object.keys(obj.todo).length + 1;
        // creating new elements to populate with info from input field
        let item = document.createElement('div');
        let text = document.createElement('p');
        let close = document.createElement('button');
        // close button just has an x in, and event listener to play a delete
        // animation and delete said item from local storage
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
        // set item class, data value to determine its relation to the object,
        // text, and sets it to be draggable to move from list to list
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
        // adds to JS object to be referenced easily
        obj.done[`done-${number}`] = text.innerHTML;
        // updates object within local storage
        localStorage.setItem('obj', JSON.stringify(obj));
        doneInput.value = '';
    }
}