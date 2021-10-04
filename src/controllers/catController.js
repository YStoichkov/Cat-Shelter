const express = require('express');

const router = express.Router();


const addCat = (req,res)=>{
    res.render('cats/add');
}

const editCat = (req,res)=>{
    res.render('cats/edd');
}

const addBreed = (req,res)=>{
    res.render('addBreed');
}

router.get('/add-cat',addCat);
router.get('/add-breed',addBreed);
router.get('/edit',editCat);


module.exports = router;