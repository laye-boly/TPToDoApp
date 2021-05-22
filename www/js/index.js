let tasks = [];
function addTask() {
	if(task.value.trim() != ""){

		if(!tasks.includes(task.value)){
			tasks = [...tasks, task.value];
			let listItem = document.createElement('li');
			listItem.appendChild(document.createTextNode(task.value));
			taskList.appendChild(listItem);
		}else{
			alert("cet tâche existe déjà");
		}


		$("li").on('swiperight', function(){
			// listItem.className =" task-done";
			$(this).toggleClass('task-done');
		});

		$("li").on('swipeleft', function(){
			// listItem.className =" task-done";
			$(this).hide('slow', function(){
				$(this).remove();
			});
		});
		$(taskList).listview('refresh');
		task.value = "";
		$(task).focus();
	}


}

