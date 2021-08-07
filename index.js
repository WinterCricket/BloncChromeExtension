

let myLeads =[];

let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
//et leadsEl = document.getElementById("leads-el");
const ulEl = document.getElementById("ul-el");



function renderLeads(){
	ulEl.textContent = "Leads: " ;
	for (let i = 0; i < myLeads.length; i++){

		ulEl.innerHTML +=  "<li>"+myLeads[i] +"</li>";
	}
}


inputBtn.addEventListener("click", function(){
	myLeads.push(inputEl.value);
	console.log(myLeads);
	renderLeads();
});
	


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// document.getElementById("demo").innerHTML = text;


// function newCard(){
	
// 	cards.push(card);
// } 

	
