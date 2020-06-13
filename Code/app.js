const fs = require ( 'fs' )
const file = 'notes.txt'

console.log ( 'Hi! This is going to be a notes app.' )
fs.writeFileSync ( file, 'This file was created by Node JS ' )
fs.appendFileSync ( file, ':)!' )