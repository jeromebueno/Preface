const express = require('express');
const Book = require('../models/book');
const router =  express.Router();


router.get('/', (req, res) => {
    Book.find(req.query).then(data => res.json(data));
});

router.post('/', (req, res) => {
    const book = new Book(req.body);
    book.save()
        .then(data => res.status(201).send(data))
        .catch(error => {
            if(error.name === 'ValidationError'){
                res.status(400).json(error.errors);
            } else {
                res.sendStatus(500);
            }
        })
});


module.exports = router;