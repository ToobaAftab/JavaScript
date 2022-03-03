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

function onAddClick()
{
    if (addBtn.value == "Add")
    {
        var listElement = document.createElement("li");
        var labelElement = document.createElement("label");
        var spanElementDelete = document.createElement("span");
        var spanElementEdit = document.createElement("span");
        var iELementMinus = document.createElement("i");
        var iELementPencil = document.createElement("i");
    
        var inputValue = document.getElementById("userInput").value;
        
        labelElement.innerText = inputValue;
        iELementMinus.className = "fa fa-minus";
        spanElementDelete.className = "deleteButton";
        spanElementDelete.addEventListener("click",DeleteTask);
        spanElementDelete.appendChild(iELementMinus);
        
        iELementPencil.className = "fa fa-pencil";
        spanElementEdit.className = "editButton";
        spanElementEdit.addEventListener("click",EditTask);
        spanElementEdit.appendChild(iELementPencil);

        listElement.appendChild(labelElement);
        listElement.appendChild(spanElementDelete);
        listElement.appendChild(spanElementEdit);
        
        if (inputValue === '')
        {
            alert("Please write something");
        }
        else
        {
            incompleteTasks.appendChild(listElement);
            ShowTasksCount(incompleteTasks);
            // var pendingTasks = document.querySelectorAll(".todoList li");
            // pendingTask.textContent = pendingTasks.length;
            // console.log(incompleteTasks.querySelectorAll(".todoList li").length);
        }
        
        document.getElementById("userInput").value = "";
    }

    else if (addBtn.value == "Update")
    {
        console.log("I am update");
        addBtn.value = "Add";
    }
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

function EditTask(e)
{
    userInput.value = e.target.parentNode.childNodes[1].innerText;
    console.log(e.target.parentNode.childNodes);
    addBtn.value = "Update";
    console.log(document.querySelector(".todoList").childNodes);
}