const express = require('express')
const router = express.Router()
const { getCharacters, setCharacter, updateCharacter, deleteCharacter } = require('../controllers/characterController')

router.route('/').get(getCharacters).post(setCharacter)


router.route('/:id').delete(deleteCharacter).put(updateCharacter)




module.exports = router