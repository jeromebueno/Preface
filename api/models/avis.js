const db = require('../lib/db');
const mongoose = require('mongoose');

const AvisSchema = new mongoose.Schema({
    title: String,
    description: String,
    score: {
        type: Number,
        min: 0,
        max: 5
    }
});

AvisSchema.methods.onScreen = function() {
    return Date.now() > new Date(`${this.year}-01-01`);
}

AvisSchema.pre('save', function(next) {
    console.log(`Saving ${this.title} ...`);
    next();
});

AvisSchema.post('save', function(movie) {
    console.log(`${movie.title} saved.`);
});

module.exports = db.model('Avis', AvisSchema);