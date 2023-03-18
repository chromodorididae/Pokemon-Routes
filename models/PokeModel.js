const mongoose =require('mongoose')

const Schema = mongoose.Schema

const pokeSchema = new Schema({
    //objects with properties
    name:{type: String},
    // {type: String, required: true} produces error if no name is present
    img:{type: String}
    // assign properties and type
})

//schema gives us model
//you interact with db through models

//RENAME VARIABLE IF REDUNDANT 17:25 16032023
//CAPITALIZE VARIABLE?
const Pokemon = mongoose.model('pokemon', pokeSchema)
//CAPITALIZE POKESCHEMA?

//give blueprint as argument to access database
//schema uses pokemon model to interact with database
//FUNCTION


//UPPERCASE


module.exports = Pokemon