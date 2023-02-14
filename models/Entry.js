const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    entry: {
        type: String,
        required: true,
    }
    //,
    // meaning1: {
    //     synonyms: {
    //         type: [],
    //         required: true
    //     }
    // },
    // meaning2: {
    //     synonyms: {
    //         type: [],
    //         required: false
    //     },
    //     required: false
    // },
    // meaning3: {
    //     synonyms: {
    //         type: [],
    //         required: false
    //     }
    // },
    // meaning4: {
    //     synonyms: {
    //         type: [],
    //         required: false
    //     }
    // },
    // meaning5: {
    //     synonyms: {
    //         type: [],
    //         required: false
    //     }
    // },
    // meaning6: {
    //     synonyms: {
    //         type: [],
    //         required: false
    //     }
    // },
    // meaning7: {
    //     synonyms: {
    //         type: [],
    //         required: false
    //     }
    // },
    // meaning8: {
    //     synonyms: {
    //         type: [],
    //         required: false
    //     }
    // },
    // meaning9: {
    //     synonyms: {
    //         type: [],
    //         required: false
    //     }
    // }
})

module.exports = mongoose.model('Entry', entrySchema) 