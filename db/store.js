//Imports fs & util to be used
const fs = require('fs');
const util = require('util');
//Package that creates a random ID for each entry
const { v4: uuid } = require('uuid');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFile('db/db.json', 'utf-8')
    }


    write(note) {
        return writeFile('db/db.json', JSON.stringify(note))
    }


    collectAllNotes() {
        return this.read().then((notes) => {
            let allNotes;
            try {
                allNotes = [].concat(JSON.parse(notes))
            }
            catch (err) {
                allNotes = [];
            }
            return allNotes;
        })
    }


    addingNotes(note) {
        const { title, text } = note
        if (!title || !text) {
            throw new err('Please add a title & text.')
        }
        const newNote = { title, text, id: uuid() }
        return this.collectAllNotes()
            .then((notes) => [...notes, newNote])
            .then((updateNotes) => this.write(updateNotes))
            .then(() => newNote)
    }


    deletingNotes(id) {
        return this.collectAllNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes))
    }
}

module.exports = new Store();