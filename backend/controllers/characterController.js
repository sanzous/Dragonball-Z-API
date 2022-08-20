const asyncHandler = require('express-async-handler')


//Get characters
// GET /api/characters
// Private
const getCharacters = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get all kamehameha' })
})
//set character
// POST /api/characters
// Private
const setCharacter = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text')
    }
    res.status(200).json({ message: 'set kamehameha' })
})
//update character
// put /api/characters/:id
// Private
const updateCharacter = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'new all kamehameha' })
})
//delete character
// delete /api/characters/:id
// Private
const deleteCharacter = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'remove all kamehameha' })
})

module.exports = {
    getCharacters,
    setCharacter,
    updateCharacter,
    deleteCharacter
}