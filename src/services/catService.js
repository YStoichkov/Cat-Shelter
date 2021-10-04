const Cat = require('../models/Cats.js');
const Breed = require('../models/Breed.js');

const addBreed = (name) => {
    let breed = new Breed({
        name
    });
    console.log(`From service: ${breed}`);
    return breed.save();
}



const catService = {
    addBreed,
}

module.exports = catService;