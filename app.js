const yargs = require('yargs')
//const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!')
    }

})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note!')
    }

})


yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function() {
        console.log('List Note!')
    }

})


yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note!')
    }

})

yargs.parse()