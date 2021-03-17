import React, { useState, useEffect } from 'react'
import SearchBar from "../components/SearchBar"
import BookResult from "../components/BookResult"
import axios from 'axios';
import API from '../utils/API'



const Search = () => {

    const [book, setBook] = useState("");
    const [result, setResult]= useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyApeATiH12wsGB3uPjN4fcEUacX-uKqVvI")

    
    // function loadBooks() {
    //     axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=5")
    //     .then(data => {
    //         setResult(data.data.items)
    //     })
    // }

    // useEffect(() => {
    //     loadBooks()
    // }, [])
    
    function handleChange(event) {
        const book = event.target.value
        setBook(book)
    }

    function handleSubmit(e) {
        e.preventDefault();
        // axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=5")
        API.searchBook(book)
        .then(data => {
            console.log(data.data.items)
            setResult(data.data.items)
        })
    }

    return (
        <>
        <SearchBar onClick={handleSubmit} onChange={handleChange}/>

        <div className="container results">
        <h3>Results</h3>

        {result.map(book => {
            console.log(book)
            return (
                <BookResult 
                key={book.volumeInfo.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://dummyimage.com/150x200/5c666e/ced0f2&text=No+Image"}/>
            )
        })}
        
        </div>
        
        

        </>

        
    )
}

export default Search
