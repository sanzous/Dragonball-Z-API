const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Text required']
    }
}, {
    timestamps: true,
}
)

module.exports = mongoose.model('Goals', goalSchema)