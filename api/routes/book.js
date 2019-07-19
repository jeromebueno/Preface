const express = require('express');
const Book = require('../models/book');
const User = require('../models/user')
const router =  express.Router();


router.get('/', (req, res) => {
    Book.find(req.query).then(data => res.json(data));
});

router.get('/search/:query', (req, res) => {
    Book.find({
        $text: { $search: req.params.query },
    }, {score: {$meta: 'textScore'}}).sort({score: {$meta: 'textScore'}}).then(data => res.json(data));
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

// book/1
router.get("/:id/avis/", (req, res) => {
    const query = Book.findById(req.params.id).populate('avis');
    query.exec((err, book) => {
        return res.status(200).json({ book, avis: book.avis })
    })
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

router.post('/finds', (req, res) => {
    Book.find({
        '_id': { $in: 
            req.body
        }}).then(data => res.status(201).send(data));
});

router.post('/:bookId/add', (req, res) => {
    User.findById(req.body.userId).exec((err, user) => {
        user.like.push(req.params.bookId)
        user.save(function(err,data){
            if(err) return console.log(err.stack);
            res.status(201).json(user)
          });
    })
});

router.post('/:bookId/remove', (req, res) => {
    User.findById(req.body.userId).exec((err, user) => {
        user.like.pull(req.params.bookId)
        user.save(function(err,data){
            if(err) return console.log(err.stack);
            res.status(201).json(user)
          });
    })
});


module.exports = router;