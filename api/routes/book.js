const express = require('express');
const Book = require('../models/book');
const router =  express.Router();


router.get('/', (req, res) => {
    Book.find(req.query).then(data => res.json(data));
});

// book/1
router.get("/:id", (req, res) => {
    Book.findOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(error => {
            console.log(error);
            if (error.name == "CastError") {
                res.status(422).json({ message: "Invalid id" });
            } else {
                res.sendStatus(500);
            }
        });
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