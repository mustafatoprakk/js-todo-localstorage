
const form=document.querySelector("#addTaskForm")
const addTask=document.querySelector("#btnAddTask")
const deleteTask=document.querySelector("#btnDelete")
const inputTask=document.querySelector("#txtTaskName")
const taskList=document.querySelector("#task-list")

let items;

// add new task
form.addEventListener("submit",function(e){

    items=getLocalStorage()

    if(inputTask.value==""){
        alert("Boş bırakma")
    }else{
        // create li
        const list=document.createElement("li")
        list.className="list-group-item list-group-item-warning"
        list.textContent=inputTask.value

        // create a
        const a=document.createElement("a")
        a.classList="float-end"
        a.setAttribute("href","#")
        a.innerHTML='<i class="bi bi-x"></i>'

        // add child
        list.appendChild(a)
        taskList.appendChild(list)

        // localStorage
        let inputValue=inputTask.value
        let taskArray;

        if(localStorage.getItem("task")===null){
            taskArray=[]
        }else{
            taskArray=JSON.parse(localStorage.getItem("task"))
        }
        taskArray.push(inputValue)
        localStorage.setItem("task",JSON.stringify(taskArray))

        inputTask.value=""
    }

    e.preventDefault()
})

function getLocalStorage(){}

taskList.addEventListener("click",function(e){
    if(confirm("Are you sure this delete item?")){
        if(e.target.className==="bi bi-x"){
            e.target.parentElement.parentElement.remove()
        }
    }   
    e.preventDefault()
})

deleteTask.addEventListener("click",function(e){
    if(confirm("Are you sure delete all data?")){
        while(taskList.firstChild){
            taskList.removeChild()
        }
    }
    e.preventDefault()
})

