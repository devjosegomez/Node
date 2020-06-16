const validator = require ( 'validator' )
const getNotes = require ( './notes.js' )

let message = getNotes ()
console.log ( message )

console.log ( validator.isEmail ( 'devjosegomez@github.com' ) )
console.log ( validator.isDate ( '2020-06-16' ) )
console.log ( validator.isIBAN ( 'AT483200000012345864/' ) )
console.log ( validator.isIBAN ( 'AT483200000012345864' ) )