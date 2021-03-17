const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    authors: {
        type: Array,
        require: true,
        default: [] 
    },
    description: {
        type: String,
    },
    image: {
        type: String
    },
    link: {
        type:String
    }

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book