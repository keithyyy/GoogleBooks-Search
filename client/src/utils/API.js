import axios from "axios"

const searchURL = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    // get all the books
    getBooks: function() {
        return axios.get("/api/books");
    },
    
    // getting just one single book
    getBook: function(id) {
        return axios.get("/api/books/"+id)
    },

    // deleting a book
    deleteBook: function(id) {
        return axios.delete("/api/books/"+id)
    },

    // saving our book and its data
    saveBook: function(book) {
        return axios.post("/api/books", book)
    },

    searchBook: function(query) {
        return axios.get(searchURL+query)
    }
}