import React, { useState, useEffect } from 'react'
import SearchBar from "../components/SearchBar"
import BookResult from "../components/BookResult"
import axios from 'axios';
import API from '../utils/API'



const Search = () => {

    const [book, setBook] = useState("");
    const [result, setResult]= useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyApeATiH12wsGB3uPjN4fcEUacX-uKqVvI")

    
    function handleChange(event) {
        const book = event.target.value
        setBook(book)
    }

    function handleSubmit(e) {
        e.preventDefault();
        API.searchBook(book)
        .then(data => {
            setResult(data.data.items)
        })
    }

    function saveBook(id) {
        console.log(id)
        const { volumeInfo } = result.filter(book => book.id === id)[0]

        console.log(volumeInfo)

        API.saveBook({
            title: volumeInfo.title,
            authors: volumeInfo.authors,
            link: volumeInfo.infoLink,
            image: volumeInfo.imageLinks.thumbnail,
            description: volumeInfo.description
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
                onClick={() => saveBook(book.id)} 
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
