const express = require('express');
const router = require('./router');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = 8080;
const app = express();




app.use(cookieParser('key'));

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.cookie('time', new Date().toString());
    next();
});


app.use('/', router);
// app.use('', router)


app.listen(PORT, () => {
    console.log(`App runen in ${PORT}  port`);
});