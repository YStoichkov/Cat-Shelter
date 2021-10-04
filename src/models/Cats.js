const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: [10, `Minimum length must be above 10 symbols`],
        maxlength: [100, `Maximum length should be 100 symbols`]
    },
    image :{
        data:Buffer,
        contentType:String
    },
    breed: {
        type:String,
        required:true
    }
});

const Cat = mongoose.model('Cat',catSchema);

module.exports = Cat;