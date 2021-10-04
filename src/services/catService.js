const Cat = require('../models/Cats.js');
const Breed = require('../models/Breed.js');

const addBreed = (name) => {
    let breed = new Breed({
        name
    });
    return breed.save();
}

const getAllBreeds = () => Breed.find({}).lean();

const getBreed = (breedName) => Breed.find({ name: breedName }).lean();



const addCat = (name, description, image, breed) => {
    let cat = new Cat({
        name,
        description,
        image,
        breed
    })
    return cat.save();
}

const getAllCats = () => Cat.find({}).lean();

const getCat = (id) => Cat.findById(id).lean();


const catService = {
    addBreed,
    getAllBreeds,
    getBreed,
    addCat,
    getAllCats,
    getCat
}

module.exports = catService;