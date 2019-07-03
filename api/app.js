const express = require('express');
const bodyparser = require('body-parser');
const isOnline = require('is-online');
const db = require('./lib/db');
const BookRouter = require('./routes/book');
const UserRouter = require('./routes/user');
const RootRouter = require('./routes/root');
const verifyToken = require('./middlewares/security');
const getData = require('./provider/getData');

const app = express();
console.log("\n\n\n\n|-------  PREFACE REST API  -------|");

app.use(bodyparser.json());
// ROUTES
app.use('/', RootRouter);
app.use(verifyToken);
app.use('/book', BookRouter);
app.use('/user', UserRouter);

app.listen(3003, () => console.log("|--> 📡 HTTP Ready [:3003]"));

isOnline().then(online => {
    if(online){
        console.log("|--> 💾 Update database with books");
        //getData();
    }else{
        console.log("|--> 💾 Unable to update database, no internet connection");
    }
});

db.once('open', () => {});

db.once('error', (error) => console.log(error));