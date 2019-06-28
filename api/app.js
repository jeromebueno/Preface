const express = require('express');
const bodyparser = require('body-parser');
const db = require('./lib/db');
const BookRouter = require('./routes/book');
const UserRouter = require('./routes/user');
const router =  express.Router();

const app = express();
console.log("\n\n\n\n|-------  PREFACE REST API  -------|");

app.use(bodyparser.json());

router.get('/', (req, res) => {
   res.sendFile('/static/index.html');
});

app.use('/books', BookRouter);
app.use('/users', UserRouter);
app.listen(3003, () => console.log("|--> 📡 HTTP Ready [:3003]"));

db.once('open', () => {});

db.once('error', (error) => console.log(error));