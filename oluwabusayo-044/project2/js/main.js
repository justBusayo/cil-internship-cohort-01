// // DOM Manipulation
// $(document).ready(function(){
// 	// Activate tooltip
// 	$('[data-toggle="tooltip"]').tooltip();
	
// 	// Select/Deselect checkboxes
// 	var checkbox = $('table tbody input[type="checkbox"]');
// 	$("#selectAll").click(function(){
// 		if(this.checked){
// 			checkbox.each(function(){
// 				this.checked = true;                        
// 			});
// 		} else{
// 			checkbox.each(function(){
// 				this.checked = false;                        
// 			});
// 		} 
// 	});
// 	checkbox.click(function(){
// 		if(!this.checked){
// 			$("#selectAll").prop("checked", false);
// 		}
// 	});
// });
let editId = 0;
function assignId(id) {
    editId = id;
}
// API calls
document.getElementById('getTodos').addEventListener('click', getTodos);
document.getElementById('addTodo').addEventListener('submit', addTodo);
document.getElementById('editTodo').addEventListener('submit', editTodo);

function getTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => {
        let output;
        data.forEach(function(todo){
            output += `
            <tr>
                <td></td>
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>
                    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" onclick="assignId(${todo.id})" title="Edit">&#xE254;</i></a>
                </td>              
                </tr>
            `;
            // console.log(todo);
        })
        document.getElementById('printTodo').innerHTML = output;
        
    });
}


function addTodo(e){
    e.preventDefault();

    let todo = document.getElementById('todoName').value;

    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'content-type': 'application/json'
        },
        body: JSON.stringify({todo:todo})
    })
    .then((res) => res.json())
    .then((data) => {
        if(data){
            console.log(data);
            alert('Task was created successfully');
        }else{
            alart('Failed to create Task')
        }

    })
}

function editTodo(e){
    e.preventDefault();
    
    let editedTodo = document.getElementById('editedTodoTitle').value;

    editedData = {
        id: editId,
        title: editedTodo
    }
    fetch('https://jsonplaceholder.typicode.com/todos/'+editedData.id, {
        method: 'PUT',
        headers: {
            'Accept': 'Application/json, text/plain, */*',
            'content-type': 'Application/json'
        },
        body: JSON.stringify({editedData})
    })
    .then((res) =>res.json())
    .then(data => {
        if(data){
            console.log(data);
            alert("Todo edited successfully")
        }else{
            alert("Failed")
        }
    })
}