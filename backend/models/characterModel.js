const mongoose = require('mongoose')

const characterSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Text required']
    }
}, {
    timestamps: true,
}
)

module.exports = mongoose.model('Character', characterSchema)