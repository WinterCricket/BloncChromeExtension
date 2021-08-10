// chrome://extensions/
let myLeads = []

// myLeads = JSON.parse(myLeads)



// myLeads = JSON.stringify(myLeads)



const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
	myLeads = leadsFromLocalStorage
}
renderLeads()

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "" 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
   	

   	console.log(myLeads)
    renderLeads()

    
})

deleteBtn.addEventListener("click", function() {
    myLeads.clear(inputEl.value)
    inputEl.value = "" 
    localStorage.clear()
   	

   	console.log(myLeads)
    renderLeads()

    
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

