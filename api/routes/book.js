const express = require('express');
const Book = require('../models/book');
const User = require('../models/user');
const router = express.Router();


router.get('/', (req, res) => {
    Book.find(req.query).populate('avis').then(data => {
        data.forEach(function(dataEl){
            let avg = 0;
            let iter = 0;
            dataEl.avis.forEach(function (element) {
                iter++;
                avg += element.notation;
            });
            if(dataEl.notation !== undefined){
                dataEl.notation.note = avg / iter;
                dataEl.notation.numberOfReviews = iter;
            }

        })

        res.json(data)
    });
});

// book/1
router.get("/:id", (req, res) => {
    Book.findById(req.params.id).populate('avis')
        .then(data => {
            let avg = 0;
            let iter = 0;
            data.avis.forEach(function (element) {
                iter++;
                avg += element.notation;
            });
            data.notation.note = avg / iter;
            data.notation.numberOfReviews = iter;
            res.json(data)
        })
        .catch(error => {
            console.log(error);
            if (error.name == "CastError") {
                res.status(422).json({message: "Invalid id"});
            } else {
                res.sendStatus(500);
            }
        });
});

// book/1
router.get("/:id/avis/", (req, res) => {
    const query = Book.findById(req.params.id).populate('avis');
    query.exec((err, book) => {
        return res.status(200).json({book, avis: book.avis})
    })
});

router.post('/', (req, res) => {
    const book = new Book(req.body);
    book.save()
        .then(data => res.status(201).send(data))
        .catch(error => {
            if (error.name === 'ValidationError') {
                res.status(400).json(error.errors);
            } else {
                res.sendStatus(500);
            }
        })
});

router.post('/finds', (req, res) => {
    Book.find({
        '_id': {
            $in:
            req.body
        }
    }).then(data => res.status(201).send(data));
});

router.post('/:bookId/add', (req, res) => {
    User.findById(req.body.userId).exec((err, user) => {
        user.like.push(req.params.bookId);
        user.save(function (err, data) {
            if (err) return console.log(err.stack);
            res.status(201).json(user)
        });
    })
});

router.post('/:bookId/remove', (req, res) => {
    User.findById(req.body.userId).exec((err, user) => {
        user.like.pull(req.params.bookId);
        user.save(function (err, data) {
            if (err) return console.log(err.stack);
            res.status(201).json(user)
        });
    })
});


module.exports = router;