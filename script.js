var input = document.querySelector(".add");

//getting an input and creating li.
input.addEventListener("keypress",function(e){
	if(e.which === 13){
		getInput();
		function getInput(){
			let inputValue = input.value;
			inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
			input.value = "";

			createTodo();
			function createTodo(){
				if(inputValue === "") return;
				let li = document.createElement("li");
				li.innerHTML = `<i class="fa fa-trash-o bin"></i><span class="todo-item">${inputValue}</span>`;
				document.querySelector(".ulList").append(li);
			}
		}
	}return;
})

//Checking Todo
document.querySelector("body").addEventListener("click",checkedLi);
document.querySelector("body").addEventListener("click",del);

function checkedLi(e){
	if(e.target.className.includes("todo-item")){
		e.target.classList.toggle("checked");
	}
}
function del(e){
	if(e.target.className.includes("bin")){
		e.target.parentNode.classList.add("bin-del")
	}
}

// Making sticky
