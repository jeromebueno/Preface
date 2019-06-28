const express = require('express');
const bodyparser = require('body-parser');
const db = require('./lib/db');
const BookRouter = require('./routes/book');
const UserRouter = require('./routes/user');
const RootRouter = require('./routes/root');

const app = express();
console.log("\n\n\n\n|-------  PREFACE REST API  -------|");

app.use(bodyparser.json());

// ROUTES
app.use('', RootRouter);
app.use('/books', BookRouter);
app.use('/users', UserRouter);

app.listen(3003, () => console.log("|--> 📡 HTTP Ready [:3003]"));

db.once('open', () => {});

db.once('error', (error) => console.log(error));