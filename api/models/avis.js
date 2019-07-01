const db = require('../lib/db');
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    description: String,
    score: {
        type: Number,
        min: 0,
        max: 5
    }
});

BookSchema.methods.onScreen = function() {
    return Date.now() > new Date(`${this.year}-01-01`);
}

BookSchema.pre('save', function(next) {
    console.log(`Saving ${this.title} ...`);
    next();
});

BookSchema.post('save', function(movie) {
    console.log(`${movie.title} saved.`);
});

module.exports = db.model('Book', BookSchema);