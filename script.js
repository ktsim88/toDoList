//initialize empty array called task
let tasks = []

// add an ON CLICK event listener to my add task button that calls a function
document.getElementById('addTaskBtn').addEventListener('click', function (){
    //get value of input box and store it in a variable called taskInput
    let taskInput = document.getElementById('taskInput').value
    //check if taskInput has value
    if (taskInput) {
        //add tasks to task array
        tasks.push(taskInput)
        //clear input field after adding task
        document.getElementById('taskInput').value = ''
        //call the function to update the task list display
        displayTasks()

    }
})
//function to display tasks in the list
function displayTasks() {
    //select an unordered list 
    let taskList = document.getElementById('taskList')
// clear the existing list before updating it
    taskList.innerHTML = ''
    //loop through each task in teh array and create a list item
    tasks.forEach((task, index ) => {
        // create a new <li> element for each task
        let li = document.createElement('li')
        //add css classes for styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )
        li.innerHTML = `${task} <button class='btn btn-dark btn-sm' onclick='removeTask(${index})'> √ </button>`
        //append the new task
        taskList.appendChild(li)
    }

    )
}
//remove task when the checkmark button is clikced
function removeTask(index) {
    //task at the given index from the array
    tasks.splice(index, 1)
    //cals function to update the task list display
    displayTasks()
}
//event listener for the clear all tasks
document.getElementById('clearTaskBtn').addEventListener('click', function () {
    //empty the tasks array to remove all tasks
    tasks = []
    //call the function update the task list display
        displayTasks()
    }
)
