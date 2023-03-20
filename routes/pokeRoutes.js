const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const pokeController = require('../controllers/pokeController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for pokemon, attach it to router along with the controller logic
router.get('/', pokeController.index)

// Setup a "new" route for creating pokemon
router.get('/new', pokeController.new)

// Setup a "clear" route for removing all data from pokemon collection
router.delete('/clear', pokeController.clear)

// Setup a "delete" route for removing a specific pokemon
router.delete('/:id', pokeController.delete)

// Setup a "update" route for updating a specific pokemon
router.put('/:id', pokeController.update)

// Setup a "seed" route for repopulating our database
router.post('/seed', pokeController.seed)

// Setup a "create" route for adding pokemon data
router.post('/', pokeController.create)

// Setup a "edit" route for editing a pokemon
router.get('/:id/edit', pokeController.edit)

// Setup an "show" route for pokemon, attach it to router along with the controller logic
router.get('/:id', pokeController.show)


module.exports = router