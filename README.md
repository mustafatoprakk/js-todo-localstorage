![Screenshot_1](https://user-images.githubusercontent.com/37051222/147726741-4252cb63-6e65-4c2d-9737-eb816255c0be.png)


```

### html

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">

    <title>My ToDo</title>
  </head>
  <body>

    <div class="container my-4">
        <h1 class="app-title text-center" id="header">To Do App</h1>
        <div class="card">
            <div class="card-header">New Task</div>
            <div class="card-body">
                <form action="" id="addTaskForm">
                    <div class="input-group">
                        <input type="text" id="txtTaskName" class="form-control" placeholder="What do you do Today">                  
                        <button href="" id="btnAddTask" class="btn btn-primary">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="card mt-3">
            <div class="card-header">Task List
                <a href="#" id="btnDelete" class="btn btn-outline-danger bi bi-trash-fill float-end delete-all"> Delete All</a>
            </div>
            <ul class="list-group" id="task-list">
            </ul>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="app.js"></script>
  </body>
</html>


### js


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



```
