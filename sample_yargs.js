const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./practice_adding_a_note')

// Customize yargs version


// Create add command
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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({

    command: 'list',
    describe: 'listing out notes',
    demandOption: {},
    handler: function () {


        console.log(" listing out all notes")
        notes.list_notes()
    }
})


// // Create list command
// yargs.command({
//     command: 'list',
//     describe: 'List your notes',
//     handler: function () {
//         console.log('Listing out all notes')
//     }
// })

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse()