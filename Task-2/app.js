const addButton = document.getElementsByClassName('task-add-button')[0];
const todoInput = document.getElementsByClassName('task-write')[0];
const todoList = document.getElementsByClassName('list-of-tasks')[0];
const motivationMessage = document.getElementsByClassName('motivating-message')[0];
const progress = document.getElementsByClassName('progress')[0];
const progressBar = document.getElementsByClassName('progress-bar-fill')[0];
let task_arr = localStorage.getItem('task_arr') || '[]';
var num_tasks = 0;
var completed_tasks = 0;
addButton.addEventListener('click', function() {
    const todoText = todoInput.value.trim();
    if (todoText === '') {
        alert('Please enter a task!');
        return;
    }
    num_tasks++;
    progress.innerHTML = `${completed_tasks} / ${num_tasks}`;
    

    const todoItem = document.createElement('li');
    todoItem.className = 'tasks';
    todoItem.innerHTML = `<input type="checkbox"> 
                        <p class="txt">${todoText}</p> 
                        <button class="delete" id="delete1">
                            <i class="fa-solid fa-trash"></i>
                        </button> `;
    let deleteButton = todoItem.querySelector('.fa-trash');
    let innertext = todoItem.querySelector('.txt');
    let checkbox = todoItem.querySelector('input');

    deleteButton.addEventListener('click', function() {
        console.log('Delete button clicked',todoItem);
        if(checkbox.checked) {
            completed_tasks--;
        }
        todoList.removeChild(todoItem);
        num_tasks--;
        progress.innerHTML = `${completed_tasks} / ${num_tasks}`;
        if(num_tasks === 0){
            motivationMessage.innerHTML = 'Keep it up!';
        }
        if (num_tasks   != 0 && completed_tasks === num_tasks) {
            motivationMessage.innerHTML = 'Congratulations! You have completed all tasks!';                
        }
    });
    checkbox.addEventListener('change', function() {
        console.log('Checkbox changed',checkbox, todoItem);
        if(checkbox.checked) {
            innertext.style.textDecoration = 'line-through';
            completed_tasks++;
        } 
        else {
            innertext.style.textDecoration = 'none';
            console.log('Checkbox unchecked',checkbox);
            completed_tasks--;
            progress.innerHTML = `${completed_tasks} / ${num_tasks}`;
        }      
        progress.innerHTML = `${completed_tasks} / ${num_tasks}`;   
            progressBar.style.width = `${(completed_tasks / num_tasks) * 100}%`;
            if (completed_tasks != num_tasks) {
                motivationMessage.innerHTML = 'Keep it up!';
            }
            
            if (num_tasks   != 0 && completed_tasks === num_tasks) {
                motivationMessage.innerHTML = 'Congratulations! You have completed all tasks!';                
            }
            else{
                if (completed_tasks === 1) {
                    motivationMessage.innerHTML = 'Great start! Keep going!';
                } else if (completed_tasks === 2) {
                    motivationMessage.innerHTML = 'You are doing great!';
                } else if (completed_tasks === 3) {
                    motivationMessage.innerHTML = 'Awesome! You are on a roll!';
                } else if (completed_tasks === 4) {
                    motivationMessage.innerHTML = 'Fantastic! Almost there!';
                } else if (completed_tasks === 5) {
                    motivationMessage.innerHTML = 'Amazing! Just a few more tasks to go!';
                } else if (completed_tasks === 6) {
                    motivationMessage.innerHTML = 'Incredible! You are almost done!';
                } else if (completed_tasks === 7) {
                    motivationMessage.innerHTML = 'You are unstoppable!';
                } else if (completed_tasks === 8) {
                    motivationMessage.innerHTML = 'You are a task master!';
                } else if (completed_tasks === 9) {
                    motivationMessage.innerHTML = 'You are crushing it!';
                } else if (completed_tasks === 10) {
                    motivationMessage.innerHTML = 'You are a productivity machine!';
                } else if (completed_tasks === 11) {
                    motivationMessage.innerHTML = 'You are a superstar!';
                } 
            }
    });
    todoList.appendChild(todoItem);
    todoInput.value = '';
}); 