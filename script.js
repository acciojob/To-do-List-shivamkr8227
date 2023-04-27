//your code here
let nti=document.getElementById("newTodoInput");
let sub=document.getElementById("addTodoBtn");
 let tdl=document.getElementById("todoList");
sub.addEventListener("click", function(){
	let ntivalue=nti.value.trim();
	if(ntivalue!=""){
		let ne=document.createElement("li");
		ne.textContent=ntivalue;
		tdl.appendChild(ne);
		nti.value="";
	}
});