const express = require('express');
const bodyparser = require('body-parser');
const db = require('./lib/db');
const BookRouter = require('./routes/book');
const UserRouter = require('./routes/user');


const app = express();


app.use(bodyparser.json());

app.use('/books', BookRouter);
app.use('/users', UserRouter);

app.listen(3003, () => console.log(">>> 📡 Server Listening on 3003"));

db.once('open', () => {});

db.once('error', (error) => console.log(error));