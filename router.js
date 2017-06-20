const express = require('express');
const router = express.Router();


const persons  = [];

router.get('/', (req, res) => {
    const time = req.cookies.time;
    res.render('index', {time});
});

router.get('/myrout/:id', (req,res) => {
    const {
        id
    } = req.params;
    const {
    query,
    cookies,
    headers
    } = req
    console.log();
    res.render('myrout', {
    id,
    query,
    cookies,
    headers
    })
});

router.get('/form', (req, res) => {
    console.log('person is - ',persons)
    res.render('form', {persons})
})

router.post('/form', (req, res) => {
    let {name, pass, gender, check } = req.body;
    
    persons.push({name, pass, gender, check});
    res.redirect('/form')
})




module.exports = router;
