const asyncHandler = require('express-async-handler')

const Character = require('../models/characterModel')


//Get characters
// GET /api/characters
// Private
const getCharacters = asyncHandler(async (req, res) => {
    const characters = await Character.find()
    res.status(200).json(characters)
})
//set character
// POST /api/characters
// Private
const setCharacter = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text')
    }

    const character = await Character.create({
        text: req.body.text
    })
    res.status(200).json(character)
})
//update character
// put /api/characters/:id
// Private
const updateCharacter = asyncHandler(async (req, res) => {
    const character = await Character.findById(req.params.id)

    if (!character) {
        res.status(400)
        throw new Error('Character not found')
    }

    const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedCharacter)
})
//delete character
// delete /api/characters/:id
// Private
const deleteCharacter = asyncHandler(async (req, res) => {
    const character = await Character.findById(req.params.id)

    if (!character) {
        res.status(400)
        throw new Error('Character not found')
    }

    await character.remove()

    res.status(200).json({ id: req.params.id })

})

module.exports = {
    getCharacters,
    setCharacter,
    updateCharacter,
    deleteCharacter
}