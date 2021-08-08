

let myLeads =[];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
//et leadsEl = document.getElementById("leads-el");
const ulEl = document.getElementById("ul-el");




	function ClearFields(){
		document.getElementById('input-el').value = "";
	}

inputBtn.addEventListener("click", function(){
	myLeads.push(inputEl.value);
	renderLeads()
	ClearFields()

});



function renderLeads(){
let listItems = "";


for (let i = 0; i < myLeads.length; i++){

		listItems +=  "<li>"+myLeads[i] +"</li>";
		console.log(listItems)
	}

	ulEl.innerHTML = listItems
	
}


