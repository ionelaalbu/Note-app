import { renderNotes } from "./vanilla.js";

let arrayNotes= JSON.parse(localStorage.getItem("notes")) || []
let container=document.querySelector(".container2")


container.addEventListener("click", (event)=>{
    let uniqueId=event.target.dataset.id
    let type=event.target.dataset.type
   
    switch(type){
        case "del":
            arrayNotes=arrayNotes.filter(({id})=> id.toString() !== uniqueId)
            container.innerHTML=renderNotes(arrayNotes.filter(({isPinned}) => isPinned))
            localStorage.setItem("notes", JSON.stringify(arrayNotes))
            break;
        default:
            console.log("error");       
    }
})

container.innerHTML=renderNotes(arrayNotes.filter(({isPinned}) => isPinned))