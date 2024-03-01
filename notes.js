const fs = require('fs')

const getNotes = () => {

    //Open file and read existing notes
    try {
        return notes = JSON.parse(fs.readFileSync('notes.json').toString())
    } catch (error) {
        return []
    }
}


const addNote = (title,body)=>{

//Get existing notes
const notes = getNotes()

if(!title)
{
return 'Please pass title'
}

notes.push( { title: title, body:body } )
const stringNotes = JSON.stringify(notes)
// write new notes
fs.writeFileSync('notes.json', stringNotes )

}

module.exports = {addNote}