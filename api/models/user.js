const db = require('../lib/db');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Book = require('../models/book');
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
    },
    dob: Date,
    termsAccepted: Boolean,
    termsAcceptedDate: Date,
    like: [{type: Schema.Types.ObjectId, ref: 'Book'}]
}, {toJSON: {virtuals: true}});


UserSchema.virtual('avis', {
    ref: 'Avis',
    localField: '_id',
    foreignField: 'userId',
    justOne: false // set true for one-to-one relationship
});

UserSchema.pre('save', function (next) {
    bcrypt.genSalt(10).then(salt => {
        bcrypt.hash(this.password, salt).then(hash => {
            this.password = hash;
            next();
        })
    });
    console.log(`Saving ${this.firstname} ...`);
});

UserSchema.methods = {
    register: function () {
        return this.save();
    }
};

UserSchema.statics = {
    login: function (email, password) {
        return new Promise((resolve, reject) => {
            User.findOne({'email': email}).then(user => {
                if (!user) return reject('User not found')
                bcrypt.compare(password, `${user.password}`).then(res => res ? resolve(user) : reject('Wrong password'));
            })
        });
    }
}

UserSchema.post('save', function (user) {
    console.log(`${user.firstname} ${user.lastname} saved.`);
});

const User = db.model('User', UserSchema);
module.exports = User;
