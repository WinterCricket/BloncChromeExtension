


let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function(){
	
});

let myLeads =[];

let inputEl = document.getElementById("input-el");
let result = document.querySelector("#result-el");

inputEl.addEventListener("input", function(){
	myLeads = result.textContent = this.value;
});