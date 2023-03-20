//controller here
//server => routes => controllers => views

const pokemon = require('../models/pokemon')

// Load the pokemon model
const Pokemon = require('../models/PokeModel')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {

    try {
        // Use the pokemon model to interact with the database
        // find will get all documents from the pokemon collection
        const pokemon = await Pokemon.find() 
        console.log('inside controller')

        // Looks in the views folder for "pokemon/Index" and passes { pokemon } data to the view (kind of like a server props object)
        // res.render('pokemon/Index', { pokemon })
        res.render('Index', { pokemon })

        // res.render('Index')

    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// Those anonymous callback functions now have names: "index" (above) and "show" (below)
module.exports.show = async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        // res.render('pokemon/Show', { pokemon })
        res.render('Show', { pokemon })

    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// GET /pokemon/new
module.exports.new = (req, res) => {
    res.render('New')
    //res.render('./views/pokemon/New')
}

// POST /pokemon
// update a pokemon
module.exports.create = async (req, res) => {
    
//if present, update the pokemon
    if (req.body.pokemon) {
        req.body.pokemon = true
    } else {
        req.body.pokemon = false
    }
// otherwise, create a new pokemon
    try {
        // use the model to interact with db and create a new document in the pokemon collection
        const result = await Pokemon.create(req.body)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
    
    res.redirect('/pokemon')
}

// DELETE /pokemon/:id
// delete a pokemon from the database
module.exports.delete = async (req, res) => {
  
    try {
        await Pokemon.findByIdAndDelete(req.params.id)
        res.redirect('/pokemon')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
} 

// GET /pokemon/:name/edit
// edit a pokemon
module.exports.edit = async (req, res) => {
  
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        // res.render('pokemon/Edit', { pokemon })
        res.render('Edit', { pokemon })

    } catch(err) {
        console.log(err)
        res.send(err.message)
    }    
}

// PUT /pokemon/:id
//update a pokemon
module.exports.update = async (req, res) => {
 
    console.log(req.body)

    if (req.body.pokemon) {
        req.body.pokemon = true
    } else {
        req.body.pokemon = false
    }

   try {
        // pass the id to find the document in the db and the form data (req.body) to update it
        await Pokemon.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/pokemon/${req.params.id}`)
   } catch(err) {
        console.log(err)
        res.send(err.message)
   }
}

// POST /pokemon/seed
// seed the database
module.exports.seed = async (req, res) => {

    try {
        await Pokemon.deleteMany({})
        await Pokemon.create(pokemon)
        res.redirect('/pokemon')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

//FROM SERVER:
// app.get("/seed", async(req, res) => {
//     try {
//         await Pokemon.deleteMany({})
//         await Pokemon.create(pokemonData)
//         res.redirect('/pokemon')
//         //pass pokemon data array
//     } catch(err) {
//         console.log(err)
//         res.send(err.message)
//     }
// })

// DELETE /pokemon/clear
// clear the database
module.exports.clear = async (req, res) => {

    try {
        await Pokemon.deleteMany({})
        res.redirect('/pokemon')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}
