var todoForm = document.querySelector('#todoForm');
var editForm = document.querySelector('#edit-form');
var ulAllTask = document.getElementById('allTasks');
var cancelEdit = document.querySelector('#cancel-edit').addEventListener('click', hideEditForm);
// Delete Todo
function deleteTask(el) {
    console.log(el.id);
    //remove task from todoDatas Array
    todoDatas.splice(el.id, 1);
    var listLength = ulAllTask.children.length;
    // Remove Li element
    for (var i = 1; i < listLength; i++) {
        ulAllTask.removeChild(ulAllTask.children[1]);
    }
    // Render data from todoDatas on HTML
    for (var i = 0; i < todoDatas.length; i++) {
        listAllTodos(todoDatas[i]);
    }
}
// Show edit form and edit todo
function showEditForm(el) {
    var editId = parseInt(el.id);
    var editValue = todoDatas[editId];
    document.querySelector("#edit-task").setAttribute("value", editValue.todo);
    document.querySelector('#edit-date').setAttribute("value", editValue.todoDate);
    document.querySelector('#edit-id').setAttribute("value", String(editId));
    todoForm.classList.add('hide-element');
    editForm.classList.remove('hide-element');
}
function hideEditForm() {
    todoForm.classList.remove('hide-element');
    editForm.classList.add('hide-element');
}
// render todos in table
function listAllTodos(objectValue) {
    var indexValue = todoDatas.indexOf(objectValue);
    var li = document.createElement('li'); // create li element.
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var img1 = document.createElement('img');
    var img2 = document.createElement('img');
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
    img1.setAttribute('id', "".concat(indexValue));
    img2.setAttribute('id', "".concat(indexValue));
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
var todoDatas = [
    {
        todo: "today todo",
        todoDate: "2021-11-24"
    }
];
for (var _i = 0, todoDatas_1 = todoDatas; _i < todoDatas_1.length; _i++) {
    var i = todoDatas_1[_i];
    listAllTodos(i);
}
// create Todo form handling
todoForm.onsubmit = function () {
    var data = new FormData(todoForm);
    var task = data.get('task');
    var date = data.get('date');
    var todoData = { todo: task, todoDate: date };
    todoDatas.push(todoData);
    listAllTodos(todoData);
    // console.log(todoDatas.length);
    todoForm.reset();
    return false; // prevent reload
};
editForm.onsubmit = function () {
    var data = new FormData(editForm);
    var id = Number(data.get('id'));
    todoDatas[id].todo = data.get('task');
    todoDatas[id].todoDate = data.get('date');
    // var listLength = ulAllTask.children.length;
    for (var _i = 0, todoDatas_2 = todoDatas; _i < todoDatas_2.length; _i++) {
        var i = todoDatas_2[_i];
        ulAllTask.removeChild(ulAllTask.children[1]);
    }
    for (var _a = 0, todoDatas_3 = todoDatas; _a < todoDatas_3.length; _a++) {
        var i = todoDatas_3[_a];
        listAllTodos(i);
    }
    editForm.reset();
    hideEditForm();
    return false;
};
