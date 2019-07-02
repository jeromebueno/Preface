const db = require('../lib/db');
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    createdAt: Date,
    date: {
        type: Number,
        min: 500
    },
    notation: {
        type: Object
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    type: {
        type: Array,
    },
    image: String
});

BookSchema.methods.onScreen = function() {
    return Date.now() > new Date(`${this.year}-01-01`);
}

BookSchema.pre('save', function(next) {
    console.log(`Saving ${this.title} ...`);
    next();
});

BookSchema.post('save', function(book) {
    console.log(`${book.title} saved.`);
});

module.exports = db.model('Book', BookSchema);