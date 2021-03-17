const mongoose = require("mongoose");
const db = require('../models')

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
)

const bookSeed = [
    {
        title: "Harry Potter",
        authors: ['J.K Rowling'],
        description: "lorem ipsum",
        image: "blank",
        link: "google.com"
    }
]

db.Book.remove({})
.then(() => db.Book.collection.insertMany(bookSeed))
.then(data => {
    console.log(data.result.n + "records inserted")
})
.catch(err => console.log(err))