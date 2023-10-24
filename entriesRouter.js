const express = require('express');
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
        // searchText = searchText.replace(/\s/g, '\\s');
       const escapedSearchText = escapeParentheses(searchText);
       console.log(escapedSearchText)
    //    const regex = new RegExp(escapedSearchText, 'i');
       const regex = new RegExp(`^${escapedSearchText}`, 'i');
       console.log(regex)

        const entries = await Entry.find({ entry: regex }).sort('entry').limit(20);
       // console.log(entries);
        console.log(entries.length);
        res.json(entries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// router.get('/:searchText', async (req, res) => {
//     try {
//       const searchText = req.params.searchText;
//       const regex = new RegExp(searchText.split('').join('.*?'), 'i');
//       const entries = await Entry.find({ entry: regex }).sort('entry').limit(10);
//       console.log(entries);
//       res.json(entries);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

//   router.get('/:searchText', async (req, res) => {
//     try {
//       const searchText = req.params.searchText;
//       const regex = new RegExp(`.*${searchText}.*`, 'i');
//       const entries = await Entry.find({ entry: regex }).sort('entry').limit(10);
//       console.log(entries);
//       res.json(entries);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

// router.get('/fuzzy1/:searchText', async (req, res) => {
//     try {
//         const searchText = req.params.searchText;
//         const regex = new RegExp(`^${searchText}`, 'i');
//         const entries = await Entry.find({ entry: regex }, { entry: 1, _id: 0 }).sort('entry').limit(10);
//         console.log(entries);
//         res.json(entries);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

router.post('/', (req, res) => {
    
})

router.patch('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})


module.exports = router