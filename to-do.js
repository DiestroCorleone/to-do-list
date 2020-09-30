function addTask(){
	var newTask = document.getElementById("newTask").value;
	var taskList = document.getElementById("taskList");
	
	if(newTask == "" || newTask == null){
		alert("Add a task to your list, dummy!");
	}else{
		var list = document.createElement("li");
		list.className = "bg-blue padded margin";
		list.innerHTML = newTask;
		list.addEventListener("dblclick", eliminar);
		taskList.appendChild(list);
		document.getElementById("newTask").value = "";		
	}
}

window.onload = function(){
	var newTask = document.getElementById("newTask");
	newTask.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			document.getElementById("addTask").click();
		}
	});
}

function eliminar(){
	this.parentNode.removeChild(this);
}
