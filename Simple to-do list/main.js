const noteInputfield = document.getElementById("noteInput");
const addnoteButton = document.getElementById("noteButton");
const notesList = document.getElementById("notesListContainer");


function createNote() {

    //Prevent empty notes
    if (noteInputfield.value.trim() === "") {
        return;
    }
    

    //Create new note
    const newNote = document.createElement("div");
    newNote.classList.add("newnoteContainer");


    //Create note content
    const noteElement = document.createElement("p");
    const noteText = document.createTextNode(noteInputfield.value);
    noteElement.appendChild(noteText);


    //Create hr
    const newHR = document.createElement("hr");
    newHR.classList.add("noteHR");


    //Create delete button
    const deleteElement = document.createElement("button");
    const deleteText = document.createTextNode("X");
    deleteElement.appendChild(deleteText);
    deleteElement.classList.add("deleteButton");


    //Attach note, delete button, hr to note container
    newNote.appendChild(noteElement);
    newNote.appendChild(deleteElement);
    newNote.appendChild(newHR);
    newNote.classList.add("individualNote");


    //Attach note container to notes list
    notesList.appendChild(newNote);


    //Delete individual note
    deleteElement.onclick = () => {
        deleteElement.parentElement.remove();
    }
}

addnoteButton.addEventListener("click", createNote);