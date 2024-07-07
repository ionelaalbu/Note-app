export let renderNotes= (notes)=>{
  
        let newNote=notes.map(({ id, title, note, currentDate})=>{
            return (
            `
            <div class="notes-display">
              <div class="title-div">${title} </div>
              <div class="date"> ${currentDate}</div>
              <div class="note-div">${note} </div>
              <div class="btn">
                <button type="button" id="pin-btn" data-id=${id} data-type="pinned" >Add to Priority</button>
                <button type="button" id="del-btn" data-type="del" data-id=${id}>Delete</button>
              </div>
            </div>
            `)
        })
        newNote=newNote.join("")
        return newNote
}
   







































// {
//     // let newNote= notes.map(({
//     //     // id,
//     //     note,
//     //     title,
//     //     // isPinned
//     // }) =>{
//         return 
//         `
//         // <div >
//         //    <div class="title-container">
//         //       <span class="single-note-title" ${title} </span>
//         //       <button class="del-btn" data-type="del" data-id="${id}">
//         //           <span data-type="del" data-id="${id}" class="material-icons-outlined"> delete </span>
//         //       </button>
//         //     </div>
//         //     <p> ${note} </p>
//         //     <div>
//         //        <button class="pinned-btn" data-pinned="${isPinned}" data-type="pinned" data-id="${id}">
//         //           <span class=" ${isPinned ? "material-icon" : "material-icon-outlined"} data-pinned="${isPinned}" data-type="pinned" data-id="${id}"> push_pin </span>
//         //        </button>
//         //     </div>
//         // </div>   
        
        
//         <h1> ${title}</h1>
//         <p> ${note} </p>




//         `
//     // })
//     // newNote=newNote.join("")
//     // return newNote
// }

