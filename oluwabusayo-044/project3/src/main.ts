interface TodoInterface {
    todo: string,
    todoDate: string
}


const todoForm: HTMLFormElement= document.querySelector('#todoForm');
const editForm: HTMLFormElement = document.querySelector('#edit-form');
let ulAllTask: HTMLElement = document.getElementById('allTasks');
const cancelEdit: void = document.querySelector('#cancel-edit').addEventListener('click', hideEditForm);

// Delete Todo
function deleteTask(el): void{
    console.log(el.id);
    //remove task from todoDatas Array
    todoDatas.splice(el.id, 1);
    var listLength = ulAllTask.children.length;
    // Remove Li element
    for (let i = 1; i < listLength; i++) {
        ulAllTask.removeChild(ulAllTask.children[1]);
    }
    // Render data from todoDatas on HTML
    for (let i = 0; i < todoDatas.length; i++) {
        listAllTodos(todoDatas[i]);
    }
}

// Show edit form and edit todo
function showEditForm(el): void{
    let editId: number = parseInt(el.id);
    let editValue: TodoInterface = todoDatas[editId];
    
    document.querySelector("#edit-task").setAttribute("value", editValue.todo);
    document.querySelector('#edit-date').setAttribute("value", editValue.todoDate);
    document.querySelector('#edit-id').setAttribute("value", String(editId));


    todoForm.classList.add('hide-element');
    editForm.classList.remove('hide-element');
}

function hideEditForm(): void{
    todoForm.classList.remove('hide-element');
    editForm.classList.add('hide-element');
}

// render todos in table

function listAllTodos(objectValue): void{
        var indexValue = todoDatas.indexOf(objectValue);

        var li:HTMLLIElement = document.createElement('li');     // create li element.
        var div1:HTMLDivElement = document.createElement('div');
        var div2:HTMLDivElement = document.createElement('div');
        var div3:HTMLDivElement = document.createElement('div');
        var img1:HTMLImageElement = document.createElement('img');
        var img2:HTMLImageElement = document.createElement('img');

        div1.setAttribute('class', 'col col-1');
        div2.setAttribute('class', 'col col-3');
        div3.setAttribute('class', 'col col-5');
        div1.setAttribute('data-label', 'Todo');
        div2.setAttribute('data-label', 'Date');
        div3.setAttribute('data-label', 'Delete');
        img1.setAttribute('src', 'images/delete.png');
        img2.setAttribute('src', 'images/edit.png');
        img1.setAttribute('alt', 'delete');
        img2.setAttribute('alt', 'edit');
        img1.setAttribute('title', 'Complete Task');
        img2.setAttribute('title', 'Edit');
        img1.setAttribute('class', 'delete');
        img2.setAttribute('class', 'edit');
        img1.setAttribute('id', `${indexValue}`);
        img2.setAttribute('id', `${indexValue}`);
        img1.setAttribute('onclick', 'deleteTask(this)');
        img2.setAttribute('onclick', 'showEditForm(this)');
        li.setAttribute('class', 'table-row');

        div1.innerHTML = objectValue.todo;
        div2.innerHTML = objectValue.todoDate; 

        div3.appendChild(img1);
        div3.appendChild(img2);
        
        li.appendChild(div1);
        li.appendChild(div2);
        li.appendChild(div3);
        ulAllTask.appendChild(li);
}


let todoDatas: TodoInterface[] = [
    {
        todo: "today todo",
        todoDate: "2021-11-24"
    }
];

for (let i of todoDatas) {
    listAllTodos(i);
}

// create Todo form handling
todoForm.onsubmit = (): boolean => {
    const data: FormData = new FormData(todoForm);
    
    let task = data.get('task') as string;
    let date = data.get('date') as string;

    let todoData = {todo: task, todoDate: date}
    todoDatas.push(todoData);
    listAllTodos(todoData);

    // console.log(todoDatas.length);
    todoForm.reset();
    return false; // prevent reload
};

editForm.onsubmit = (): boolean => {
    const data: FormData = new FormData(editForm);
    
    let id = Number(data.get('id'));
    todoDatas[id].todo = data.get('task') as string;
    todoDatas[id].todoDate = data.get('date') as string;

    // var listLength = ulAllTask.children.length;
    for (let i of todoDatas) {
        ulAllTask.removeChild(ulAllTask.children[1]);
    }

    for (let i of todoDatas) {
        listAllTodos(i);
    }

    editForm.reset();
    hideEditForm();
    return false; 
};

