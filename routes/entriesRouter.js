const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry')

router.get('/', async (req, res) => {

    try {
       const entries = await Entry.find()
       console.log(entries)
       res.json(entries)
    } catch (err) {
        res.status(500).json({message: err.message})

    }


})

router.get('/:id', async (req, res) => {
    try {
        const entry = await Entry.findOne({entry: req.params.id})
        console.log(entry)
        res.json(entry) 
     } catch (err) {
         res.status(500).json({message: err.message})
 
     }
    
})

router.post('/', (req, res) => {
    
})

router.patch('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})

module.exports = router