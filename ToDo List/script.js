const inputBox = document.querySelector(".inputItem input");
var userInput = document.getElementById("userInput");
const addBtn = document.querySelector(".inputItem button");
const totalListCount = document.querySelectorAll(".todoList li")
var pendingTask = document.querySelector(".pendingTask");
var incompleteTasks = document.getElementById("todo");

inputBox.onkeyup = ()=> {
    let userData = inputBox.value;
    if (userData.trim() != 0){
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    }
}

pendingTask.textContent = totalListCount.length;
getAllToDos();

function onAddClick()
{
    if (addBtn.value == "Add")
    {
        var inputValue = document.getElementById("userInput").value;
        
        if (inputValue === '')
        {
            alert("Please write something");
        }
        else
        {
            incompleteTasks.appendChild(creatingUlElements(inputValue));
            ShowTasksCount(incompleteTasks);
            // var pendingTasks = document.querySelectorAll(".todoList li");
            // pendingTask.textContent = pendingTasks.length;
            // console.log(incompleteTasks.querySelectorAll(".todoList li").length);
        }
        
        document.getElementById("userInput").value = "";
    }

    // else if (addBtn.value == "Update")
    // {
    //     console.log("I am update");
    //     addBtn.value = "Add";
    // }
}

function DeleteTask(e)
{
    var deleteTask = e.target;
    // console.log('elem==>',deleteTask.parentNode);
    e.target.parentNode.remove(deleteTask);
    ShowTasksCount(incompleteTasks);
}

function ShowTasksCount(pendingTasks){
    var countTasks = pendingTasks.querySelectorAll(".todoList li");
    pendingTask.textContent = countTasks.length;
}

function ClearAll()
{
    document.getElementById("todo").innerHTML = "";
    ShowTasksCount(incompleteTasks);
}

function getAllToDos()
{
    var toDos = ["First Todo", "Second Todo", "Third Todo"];
    let text = "<ul>";
    for (let i=0; i<toDos.length; i++)
    {
        incompleteTasks.appendChild(creatingUlElements(toDos[i]));
    }
}

function creatingUlElements(value)
{
    var listElement = document.createElement("li");
    var labelElement = document.createElement("label");
    var spanElementDelete = document.createElement("span");
    var iELementMinus = document.createElement("i");
    iELementMinus.className = "fa fa-minus";

    spanElementDelete.className = "deleteButton";
    spanElementDelete.addEventListener("click",DeleteTask);
    spanElementDelete.appendChild(iELementMinus);

    labelElement.innerText = value;
    listElement.appendChild(labelElement);
    listElement.appendChild(spanElementDelete);

    return listElement;
}

// function EditTask(e)
// {
//     userInput.value = e.target.parentNode.childNodes[1].innerText;
//     console.log(e.target.parentNode.childNodes);
//     addBtn.value = "Update";
//     console.log(document.querySelector(".todoList").childNodes);
// }