const fs = require('fs')

const getNotes = () => {

    //Open file and read existing notes
    try {
        return notes = JSON.parse(fs.readFileSync('notes.json').toString())
    } catch (error) {
        return []
    }
}


const addNote = (title, body) => {

    //Get existing notes
    const notes = getNotes()

    if (!title) {
        return 'Please pass title'
    }

    notes.push({ title: title, body: body })
    const stringNotes = JSON.stringify(notes)
    // write new notes
    fs.writeFileSync('notes.json', stringNotes)

}



const listNode = () => {

    //Get all notes
    const notes = getNotes()

    if (notes.length === 0) {
        console.log('No notes to list')

    }

    console.log(notes)


}

const readNote = (title) => {

    if (!title) {
        console.log('provide title to search')
    }

    const notes = getNotes()

    //search for the note with title and get the body

    const found = notes.find((element) => element.title = title)
    console.log(found.body)

}


const removeNote = (title) => {

    if (!title) {
        console.log('provide title to search')
    }
    const notes = getNotes()
 

    const result = notes.filter((element) =>  element.title.valueOf() != title.valueOf() )

    const stringNotes = JSON.stringify(result)
    // write new notes
    fs.writeFileSync('notes.json', stringNotes)

}


module.exports = { addNote, listNode, readNote, removeNote }