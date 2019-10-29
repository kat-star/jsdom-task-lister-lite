document.addEventListener("DOMContentLoaded", () => {
    addItem();
  });

function addItem() {
  const toDoList = document.getElementById('create-task-form');

  toDoList.addEventListener('submit', function(event) {
    event.preventDefault();
    const userItem = event.target.querySelector('#new-task-description');
    
    const listTasks = document.querySelector('#tasks');
    const newItem = document.createElement('li');
    newItem.textContent = userItem.value;

    userItem.value = "";
    userItem.focus();

    const button = document.createElement('button');
    button.innerHTML = 'X'
    button.dataset.description = newItem.textContent
    newItem.appendChild(button);

    listTasks.appendChild(newItem);
    button.addEventListener('click', function(event) {
      event.target.parentElement.remove();
    })
    
  
  

  });
}

// function deleteItem() {
  
// }


