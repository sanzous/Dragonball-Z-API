const express = require('express')
const cors = require('cors');
const PORT = 8000

const app = express();

app.use(cors())

const dbzCharacters = {
    "goku": {
        'race': 'Saiyan',
        'special move': 'Kamehameha Wave',
        'img': 'https://static.wikia.nocookie.net/dragonball/images/5/5b/Gokusteppingoutofaspaceship.jpg/revision/latest/scale-to-width-down/242?cb=20211011163724 '

    },

    "krillin": {
        'race': 'Human',
        'special move': 'Destructo Disk',
        'img': 'https://static.wikia.nocookie.net/dragonball/images/b/b0/Krillin_Manga.png/revision/latest/scale-to-width-down/180?cb=20210903011342'
    },

    "tien": {
        'race': 'Human/Triclops',
        'special move': 'Tri-beam',
        'img': 'https://static.wikia.nocookie.net/dragonball/images/e/e3/Tien_Manga.png/revision/latest/scale-to-width-down/201?cb=20210702131516'
    },

    'yamcha': {
        'race': 'Human',
        'special move': 'Wolf Fang Fist/Dying immediately',
        'img': 'https://static.wikia.nocookie.net/dragonball/images/5/59/Yamcha_DB_Episode_138.png/revision/latest/scale-to-width-down/236?cb=20210904213322'
    },

    "piccolo": {
        'race': 'Namekian/Slug',
        'special move': 'Special Beam Cannon',
        'img': 'https://static.wikia.nocookie.net/dragonball/images/c/cd/Piccolo_DBZ_Episode_148.png/revision/latest/scale-to-width-down/182?cb=20211023180024'
    },

    "vegeta": {
        'race': 'Saiyan',
        'special move': 'Galick Gun',
        'img': 'https://static.wikia.nocookie.net/dragonball/images/0/0b/Vegeta_DBZ_Episode_222.png/revision/latest/scale-to-width-down/206?cb=20220113045006'
    },

    "gohan": {
        'race': 'Human/Saiyan',
        'special move': 'Masenko',
        'img': 'https://static.wikia.nocookie.net/dragonball/images/5/51/Dragon_Ball_Gohan_Kanzenban.png/revision/latest/scale-to-width-down/301?cb=20210903210235'
    },

    'unknown': {
        'race': 'unknown',
        'special move': 'unknown'
    }





}






app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:dbzhero', (request, response) => {
    const dbzhero = request.params.dbzhero.toLowerCase()
    if (dbzCharacters[dbzhero]) {
        response.json(dbzCharacters[dbzhero])
    } else {
        response.json(dbzCharacters['unknown'])
    }


})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})