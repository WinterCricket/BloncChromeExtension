

let myLeads =[];
let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
let leadsEl = document.getElementById("leads-el");


function renderLeads(){
	leadsEl.textContent = "Leads: " ;
	for (let i = 0; i < myLeads.length; i++){

		leadsEl.textContent +=  myLeads[i] + "   ";
	}
}


inputBtn.addEventListener("click", function(){
	myLeads.push(inputEl.value);
	console.log(myLeads);
	renderLeads();
});
	






// function newCard(){
	
// 	cards.push(card);
// } 

	
