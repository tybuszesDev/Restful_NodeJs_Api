const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({                 // Schema describes how is looking your data.
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', PostSchema);