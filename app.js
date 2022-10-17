const express = require('express');
const path = require('path');
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}..`));
