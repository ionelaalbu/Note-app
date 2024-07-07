import { renderNotes } from "./vanilla.js"

let title=document.querySelector(".title")
let note=document.querySelector(".note")
let addBtn=document.querySelector("button")
let container=document.querySelector(".container2")
let currentDate=new Date()
let day=currentDate.getDate()
let month=currentDate.getMonth() +1
let year=currentDate.getFullYear()
let hours=currentDate.getHours()
let min=currentDate.getMinutes()
let date= hours+":"+min+" -  "+  day + "."+month+"."+year
 // whenever refresh the page notes are still there(we use localStorage.getItem)
 //json.parse is using for converting array to string
let arrayNotes= JSON.parse(localStorage.getItem("notes")) || []
let id= Date.now()



 addBtn.addEventListener("click", ()=>{
    if(title.value.trim().length > 0 || note.value.trim().length > 0 ){
        arrayNotes=[...arrayNotes, { isPinned:false, title: title.value, note: note.value, currentDate:date, id: Date.now() }]
    }
    title.value=note.value=""
    console.log(arrayNotes, id);
    container.innerHTML=renderNotes(arrayNotes)
    //whenever refresh the page, notes are still there, for application tool
    localStorage.setItem("notes", JSON.stringify(arrayNotes))
 })

 container.addEventListener("click", (event)=>{
    let uniqueId=event.target.dataset.id
    let type=event.target.dataset.type
    
    switch(type){
        case "del":
            //delete notes using filter
            arrayNotes=arrayNotes.filter(({id}) => id.toString() !== uniqueId)
            //updated notes, without the deleted notes
            container.innerHTML=renderNotes(arrayNotes)
            //delete from localStorage
            localStorage.setItem("notes", JSON.stringify(arrayNotes))
            break;
        case "pinned":
            //if we click on button , value of button become true and vice versa
            arrayNotes=arrayNotes.map(note => note.id.toString() === uniqueId ? {...note, isPinned : !note.isPinned} : note) 
            //updated notes, without the pinned notes   
            container.innerHTML=renderNotes(arrayNotes.filter(({isPinned}) =>!isPinned))
            // update the localStorage
            localStorage.setItem("notes", JSON.stringify(arrayNotes))
            break;
        default:
            console.log("none");    

    }
})


//when i click to refresh, notes are  still there
 container.innerHTML=renderNotes(arrayNotes.filter(({isPinned}) => !isPinned))
