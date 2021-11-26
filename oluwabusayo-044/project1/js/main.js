// current date 
const currentDate =  new Date();
        document.getElementById('date').innerHTML = currentDate;

// DOM Manipulation
const addToDo = document.getElementById('add-todo');
      toDoForm = document.getElementById('todo-form');
      editForm = document.getElementById('edit-form');
      toDoTable = document.getElementById('todo-table');
      completedTable = document.getElementById('completed-table');
      todayTable = document.getElementById('today-table');
      cancelTask = document.getElementById('cancel-task');
    
      todoEditForm = document.getElementById('todo-edit-form');
    //   editTaskBtn = document.getElementsByClassName('edit');
      cancelEdit = document.getElementById('cancel-edit');

      todayTask = document.getElementById('today-tasks');
      allTasks = document.getElementById('all-tasks');
      completedTasks = document.getElementById('completed-tasks');

addToDo.addEventListener('click', () => {
    toDoForm.classList.remove('hide-element');
    addToDo.classList.add('hide-element');
    toDoTable.classList.add('hide-element');
    completedTable.classList.add('hide-element')
});

cancelTask.addEventListener('click', () => {
    toDoForm.classList.add('hide-element');
    addToDo.classList.remove('hide-element');
    toDoTable.classList.remove('hide-element');
    todayTable.classList.add('hide-element');
    allTasks.classList.add('task-page-links');
    completedTasks.classList.remove('task-page-links');
    todayTask.classList.remove('task-page-links');
});
// for (var i = 0; i < editTaskBtn.length; i++) {
//     editTaskBtn[i].addEventListener('click', () => {
//         todoEditForm.classList.remove('hide-element');
//     });
// }

cancelEdit.addEventListener('click', () => {
    todoEditForm.classList.add('hide-element');
})

// for side bar buttons
completedTasks.addEventListener('click', () => {
    toDoTable.classList.add('hide-element');
    completedTable.classList.remove('hide-element');
    todayTable.classList.add('hide-element');
    toDoForm.classList.add('hide-element');
    completedTasks.classList.add('task-page-links');
    todayTask.classList.remove('task-page-links');
    allTasks.classList.remove('task-page-links');
});

todayTask.addEventListener('click', () => {
    toDoTable.classList.add('hide-element');
    completedTable.classList.add('hide-element');
    todayTable.classList.remove('hide-element');
    toDoForm.classList.add('hide-element');
    todayTask.classList.add('task-page-links');
    completedTasks.classList.remove('task-page-links');
    allTasks.classList.remove('task-page-links');
});

allTasks.addEventListener('click', () => {
    addToDo.classList.remove('hide-element');
    toDoTable.classList.remove('hide-element');
    todayTable.classList.add('hide-element');
    completedTable.classList.add('hide-element');
    toDoForm.classList.add('hide-element');
    allTasks.classList.add('task-page-links');
    completedTasks.classList.remove('task-page-links');
    todayTask.classList.remove('task-page-links');
})

// Dynamic rendering of elements and showing of data
function addToTask(objectValue) {

    var ulAllTask = document.getElementById("all-task");
    var ulTodayTask = document.getElementById("todays_task");

    var inputDate = new Date(objectValue.taskDate);
    var indexValue = formDatas.indexOf(objectValue);

    // Get today's date
    var todaysDate = new Date();

    if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
        var li = document.createElement('li');
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');
        var div4 = document.createElement('div');
        var img1 = document.createElement('img');
        var img2 = document.createElement('img');

        div1.setAttribute('class', 'col col-1');
        div2.setAttribute('class', 'col col-2');
        div3.setAttribute('class', 'col col-3');
        div4.setAttribute('class', 'col col-5');
        div1.setAttribute('data-label', 'Todo');
        div2.setAttribute('data-label', 'Todo Description');
        div3.setAttribute('data-label', 'Date');
        div4.setAttribute('data-label', 'Delete');
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
        img1.setAttribute('onclick', 'markAsCompleted(this)');
        img2.setAttribute('onclick', 'showEdit(this)');
        li.setAttribute('class', 'table-row');

        div1.innerHTML = objectValue.name;
        div2.innerHTML = objectValue.description;
        div3.innerHTML = objectValue.taskDate; 

        div4.appendChild(img1);
        div4.appendChild(img2);
        
        li.appendChild(div1);
        li.appendChild(div2);
        li.appendChild(div3);
        li.appendChild(div4);
    
        // ulAllTask.appendChild(li);
        ulTodayTask.appendChild(li);
    }

        var li = document.createElement('li');     // create li element.
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');
        var div4 = document.createElement('div');
        var img1 = document.createElement('img');
        var img2 = document.createElement('img');

        div1.setAttribute('class', 'col col-1');
        div2.setAttribute('class', 'col col-2');
        div3.setAttribute('class', 'col col-3');
        div4.setAttribute('class', 'col col-5');
        div1.setAttribute('data-label', 'Todo');
        div2.setAttribute('data-label', 'Todo Description');
        div3.setAttribute('data-label', 'Date');
        div4.setAttribute('data-label', 'Delete');
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
        img1.setAttribute('onclick', 'markAsCompleted(this)');
        img2.setAttribute('onclick', 'showEdit(this)');
        li.setAttribute('class', 'table-row');

        div1.innerHTML = objectValue.name;
        div2.innerHTML = objectValue.description;
        div3.innerHTML = objectValue.taskDate; 

        div4.appendChild(img1);
        div4.appendChild(img2);
        
        li.appendChild(div1);
        li.appendChild(div2);
        li.appendChild(div3);
        li.appendChild(div4);
        ulAllTask.appendChild(li);
    
}
// show edit form
function showEdit(el) {
    editValue = formDatas[el.id];
    document.getElementById('edit-name').value = editValue.name;
    document.getElementById('edit-date').value = editValue.taskDate;
    document.getElementById('edit-id').value = el.id;
    todoEditForm.classList.remove('hide-element');
}
// Remove deleted/completed tasks from all tasks array and put it inside completed array
function markAsCompleted(el) {
    var ulAllTask = document.getElementById("all-task");
    var ulTodayTask = document.getElementById("todays_task");
    console.log(el.id);
    
    //Add object to Completed Data
    completedDatas.push(formDatas[el.id]);
    //show task in html by calling function
    addToCompletedTask(formDatas[el.id]);
    //remove task from formDatas
    formDatas.splice(el.id, 1);

    var listLength = ulAllTask.children.length;

    for (i = 1; i < listLength; i++) {
        ulAllTask.removeChild(ulAllTask.children[1]);
    }

    var listLength = ulTodayTask.children.length;

    for (i = 1; i < listLength; i++) {
        ulTodayTask.removeChild(ulTodayTask.children[1]);
    }

    // Loop through all todo list array and call function AddToTask
    for (i = 0; i < formDatas.length; i++) {
        addToTask(formDatas[i]);
    }
}

function addToCompletedTask(objectValue) {
    var ulCompletedTask = document.getElementById("completed-task");

        var li = document.createElement('li');
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');
        var del1 = document.createElement('del');
        var del2 = document.createElement('del');
        var del3 = document.createElement('del');

        div1.setAttribute('class', 'col col-1');
        div2.setAttribute('class', 'col col-2');
        div3.setAttribute('class', 'col col-3');
        div1.setAttribute('data-label', 'Todo');
        div2.setAttribute('data-label', 'Todo Description');
        div3.setAttribute('data-label', 'Date');        
        li.setAttribute('class', 'table-row');

        del1.innerHTML = objectValue.name;
        del2.innerHTML = objectValue.description;
        del3.innerHTML = objectValue.taskDate; 

        div1.appendChild(del1);
        div2.appendChild(del2);
        div3.appendChild(del3);
        
        li.appendChild(div1);
        li.appendChild(div2);
        li.appendChild(div3);
    
        // ulAllTask.appendChild(li);
        ulCompletedTask.appendChild(li);
}



// Getting and handling form data
const submitBtn = document.getElementById('todo-form');

//All todo list Array
let formDatas = [
    {
        description: "Wash My roof",
        name: "House Chores",
        taskDate: "2021-11-24"
    },
    {
        description: "Travel to Malawi",
        name: "Travel",
        taskDate: "2021-11-21"
    }
];

// Loop through all todo list array and call function AddToTask
for (i = 0; i < formDatas.length; i++) {
    addToTask(formDatas[i]);
}
//Completed Array
let completedDatas = [
    {
        description: "Clean my House",
        name: "House Chores",
        taskDate: "2021-11-24"
    },
    {
        description: "Travel to Kenya",
        name: "House Chores",
        taskDate: "2021-11-21"
    }
];
// Loop through all completed task array and call function addToCompletedTask
for (i = 0; i < completedDatas.length; i++) {
    addToCompletedTask(completedDatas[i]);
}

// Error Messages
let errorMessages = {
    "nameError": "Name is Required",
    "descriptionError": "Description is required",
    "dateError": "Date is required",
    "priorityError": "Priority is required"
}

// Form submission
submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = document.getElementById("task").value;
    const taskDate = document.getElementById("todo-date").value;
    const taskDescription = document.getElementById("description").value;

    if(taskName === "" && taskDate=== "" && taskDescription === ""){
        document.getElementById('name-message').innerHTML= errorMessages.nameError;
        document.getElementById('date-message').innerHTML= errorMessages.dateError;
        document.getElementById('description-message').innerHTML= errorMessages.descriptionError;

        console.log(errorMessages)
    }else {
        // console.log(formData);
        let formData = {};

        var id = "id" + Math.random().toString(16).slice(2)
        formData.id = id;
        formData.name = taskName;
        formData.taskDate = taskDate;
        formData.description = taskDescription;

        formDatas.push(formData);
        addToTask(formData);
        console.log(formDatas); 

        document.getElementById("task").value = "";
        document.getElementById("todo-date").value = "";
        document.getElementById("description").value = "";

        toDoForm.classList.add('hide-element');
        addToDo.classList.remove('hide-element');
        toDoTable.classList.remove('hide-element');
        todayTable.classList.add('hide-element');
        allTasks.classList.add('task-page-links');
        completedTasks.classList.remove('task-page-links');
        todayTask.classList.remove('task-page-links');
        
    }
    
});


editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log()
    let editId = Number(document.getElementById("edit-id").value);
    formDatas[editId].name = document.getElementById("edit-name").value;
    formDatas[editId].taskDate = document.getElementById("edit-date").value;

    var ulAllTask = document.getElementById("all-task");
    var ulTodayTask = document.getElementById("todays_task");

    var listLength = ulAllTask.children.length;

    for (i = 1; i < listLength; i++) {
        ulAllTask.removeChild(ulAllTask.children[1]);
    }

    var listLength = ulTodayTask.children.length;

    for (i = 1; i < listLength; i++) {
        ulTodayTask.removeChild(ulTodayTask.children[1]);
    }

    // Loop through all todo list array and call function AddToTask
    for (i = 0; i < formDatas.length; i++) {
        addToTask(formDatas[i]);
    }
    todoEditForm.classList.add('hide-element');

})
