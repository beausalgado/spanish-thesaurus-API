const express = require('express');
const diacritics = require('diacritics');
const router = express.Router();
const Entry = require('../models/Entry')

router.get('/', async (req, res) => {

    try {
       const entries = await Entry.find().limit(30)
       console.log(entries)
       res.json(entries)
    } catch (err) {
        res.status(500).json({message: err.message})

    }


})

router.get('/random*', async (req, res) => {
    try {
        const count = await Entry.countDocuments();
        const random = Math.floor(Math.random() * count);
        const randomEntry = await Entry.findOne().skip(random);

        res.json([randomEntry]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const escapeParentheses = (text) => {
    return text.replace(/[()]/g, '\\$&');
  };

router.get('/:searchText', async (req, res) => {
    try {
        const searchText = req.params.searchText;
        console.log(searchText)
       const escapedSearchText = escapeParentheses(searchText);
       console.log(escapedSearchText)  
       const regex = new RegExp(`^${escapedSearchText}`);
       console.log(regex)

        const entries = await Entry
        .find({ entry: regex })
        .collation({locale: "es", strength: 1})
        .sort('entry')
        .limit(20);
       // console.log(entries);
        console.log(entries.length);
        res.json(entries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router