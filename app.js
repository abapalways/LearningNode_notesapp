const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote( argv.title, argv.body)
    }

})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(argv) {
        notes.removeNote(argv.title)
    }

})


yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function() {
        notes.listNode()
    }

})


yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title)
    }

})

yargs.parse()