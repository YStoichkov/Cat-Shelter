const express = require('express');
const router = express.Router();
const catService = require('../services/catService.js');

const getAddCat = (req, res) => {
    res.render('cats/add');
}

const editCat = (req, res) => {
    res.render('cats/edd');
}

const getAddBreed = (req, res) => {
    res.render('addBreed');
}
const addBreed = async (req, res) => {
    let name = req.body.name;
    try {
        await catService.addBreed(name);
        res.redirect('/');
    } catch (err) {
        res.status(400).end({ message: err.message });
    }
}

router.get('/add-cat', getAddCat);
router.get('/add-breed', getAddBreed);
router.post('/add-breed', addBreed);
router.get('/edit', editCat);


module.exports = router;