

let myLeads =[];
let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function(){
	myLeads.push(inputEl.value);
	console.log(myLeads);
});


//let result = document.querySelector("#result-el");

