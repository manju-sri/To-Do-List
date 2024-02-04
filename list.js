const addTaskButton = document.getElementById("add-task");
const modal = document.getElementById("modal");
const form = document.getElementById("create-task-form");
const taskSection = document.getElementById("task-section");

let todoStatus = document.getElementById("to-do");
let inprogressStatus = document.getElementById("in-progress");
let doneStatus = document.getElementById("done");

let todoUpdate = document.getElementById("to-do-count");
let priorityUpdate = document.getElementById("priority-count");

let todoCount = 0;
let inprogressCount=0;
let doneCount=0;
let taskId=0;
let highPriority =0;

let taskObj= {};
function toggleFunction(){
   modal.classList.toggle("hide-modal");
}


addTaskButton.addEventListener("click",()=>{
   toggleFunction();
})

{/* <div class="task-card">
<div>
    <div>Task Name</div>
    <div>Due Date:</div>
</div>
<div>
    <div class="options">
    <button class="material-symbols-outlined editOpt">edit</button>
    <button class="material-symbols-outlined deleteOpt">delete</button>
    </div>
    <div> status</div>
</div>
</div>  */}

function deleteTask(e){
    e.preventDefault();
    const taskCard = e.target.closest('.task-card');
    if (taskCard) {
        taskCard.remove();
    }
    
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const taskInfo = {
        id: taskId,
        title: form.title.value,
        estimatedDate: form.dueDate.value,
        priorityLevel: form.priorityLevel.value,
        status: form.status.value
    }

    taskObj[taskId]=taskInfo;

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `<div>
    <div>${taskInfo.title}</div>
    <div>${taskInfo.estimatedDate}</div>
    </div>
    <div>
       <div class="options">
        <button class="material-symbols-outlined editOpt" >edit</button>
        <button class="material-symbols-outlined deleteOpt">delete</button>
       </div>
       <div>${taskInfo.status}</div>
    </div>`;

    taskSection.appendChild(taskCard);
    taskId++;

    // let editButton = document.querySelector();

    taskSection.addEventListener('click', function (e) {
        if (e.target.classList.contains('deleteOpt')) {
            deleteTask(e);
        }

    });


    if(taskInfo.status==="TODO"){
        todoCount++;
    }
    else if(taskInfo.status==="INPROGRESS"){
        inprogressCount++;
    }
    else{
        doneCount++;
    }

    if(taskInfo.priorityLevel==="HIGH"){
        highPriority++; 
    }

    //update the to do list count and high priority count
    todoUpdate.innerText = todoCount;
    priorityUpdate.innerText = highPriority;

    todoStatus.innerText = todoCount;
    inprogressStatus.innerText = inprogressCount;
    doneStatus.innerText = doneCount;

    form.reset();
    
}); 