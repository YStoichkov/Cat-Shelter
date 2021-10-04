const express = require('express');
const router = express.Router();
const catService = require('../services/catService.js');
const path = require('path');

const home = async (req, res) => {
    let cats = await catService.getAllCats();
    res.render('index', { cats });
}

router.use(express.static(path.resolve(__dirname, './public')));
router.get('/', home);

module.exports = router;