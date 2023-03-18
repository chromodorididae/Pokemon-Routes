//sample code
//ADD .ENV HERE
require('dotenv').config()

// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 3000 

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

// Load our poke data from models folder
const pokemonData = require('./models/pokemon')
const Pokemon = require('./models/PokeModel')
app.get("/seed", async(req, res) => {
    try {
        await Pokemon.deleteMany({})
        await Pokemon.create(pokemonData)
        res.redirect('/pokemon')
        //pass pokemon data array
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
})
// //not in controller - in server
// //ASYNC FUNCTION
// module.exports.index = async(req, res) => {
//     const result = await Pokemon.find()
//     console.log(result)
//     res.render('pokemon/Index', {pokemon:result})
//     //saved in pokemon property in database, not array
//     //Index already rendered? 17:38 16032023
//     //looks in the MODELS FOLDER for pokemon/Index and passes {pokemon} data to the view (similar to a server props object)
// }

//NEXT: render module.exports.show/new/create









// // Load our poke routes
// const pokeRoutes = require('./routes/pokeRoutes')
//NONE USED 16032023 ADD LATER

// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Load the method-override middleware
const methodOverride = require('method-override')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// a middleware that formats the form data (currently a string that looks like query params) into a object we can use
app.use(express.urlencoded({ extended: true }))

// hack into our form and give it more HTTP methods (like DELETE and PUT)
app.use(methodOverride('_method'))

// // Connect our routes to our express app
// app.use('/pokeRoutes', pokeRoutes)

//ORIGINAL HOMEPAGE 15032023
// app.get('/', (req, res) => {
//     res.send('Welcome to the Pokemon App!')
//     // res.render('Index')
// })

//SNAZZY HOMEPAGE
app.get('/', (req, res) => {
    res.render('Home')
})


// Setup an "index" route for pokemon
app.get('/pokemon', (req, res) => {
    res.send('pokemon')
    // res.render('Index', {pokemon})
    //render Index.jsx and display pokemon array with {}
})

// // Setup a "show" route for pokemon
// app.get('/pokemon/:index', (req, res) => {
//     res.send(pokemon[req.params.index])
// })

// Setting up your show route 21:11 15032023

//CONNECT SHOW TO INDEX 14:06 16032023
app.get('/pokemon/:id', (req, res) => {
    // res.send(`${req.params.id}`)
    res.render(`Show`, {pokemon})
    //prints any text entered after /pokemon
    //pokemon/asdfjkl; = asdfjkl;
})



// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})