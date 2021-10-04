const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage });
const catService = require('../services/catService.js');

const getAddCat = async (req, res) => {
    let breeds = await catService.getAllBreeds();
    res.render('cats/add', { breeds });
}

const addCat = async (req, res) => {
    let { name, description, breed } = req.body;
    let breeds = await catService.getBreed(breed);
    let image = req.file.filename;
    try {
        await catService.addCat(name, description, image, breeds);
        res.redirect('/');
    } catch (err) {
        res.status(400).end({ message: err.message });
    }
}

const editCat = (req, res) => {
    res.render('cats/edit');
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
router.post('/add-cat', upload.single('upload'), addCat);
// router.post('/add-cat', upload.single('upload'), (req, res) => {
//     res.send('Image Uploaded');
// });
router.get('/add-breed', getAddBreed);
router.post('/add-breed', addBreed);
router.get('/edit', editCat);


module.exports = router;