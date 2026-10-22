const todoList = [{
  name:'make dinner',  
  dueDate:'2025-06-29'
},{
  name: 'wash plate',
  dueDate: '2025-06-29'
 }];
 renderTodoList();

function renderTodoList(){
  let todoListHtml = '';
 
for (let i = 0; i< todoList.length; i++){
    const todoObject =todoList[i];
    // const name = todoObject.name;
    // const dueDate= todoObject.dueDate;
    const {name, dueDate}= todoObject;
    const html =`
     <div>${name} </div>
     <div>  ${dueDate}</div>
      <button class="delete-todo-buttoon" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    
     `;
    todoListHtml += html;
}


 
document.querySelector('.js-todo-list')
  .innerHTML = todoListHtml;
}

function addTodo (){
 const inputElement = document.querySelector('.js-name-Input');
 const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;


 todoList.push({
//   name: name,
//  dueDate:dueDate,
 name,
 dueDate
});

 inputElement.value = '';

  renderTodoList();
}