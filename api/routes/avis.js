const express = require('express');
const Avis = require('../models/avis');
const router =  express.Router();


router.get('/', (req, res) => {
    Avis.find(req.query).then(data => res.json(data));
});

// book/1
router.get("/:id", (req, res) => {
    Avis.findOne({ _id: req.params.id })
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
    const avis = new Avis(req.body);
    avis.save()
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