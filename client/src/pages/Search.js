import React from 'react'
import SearchBar from "../components/SearchBar"
import BookResult from "../components/BookResult"

const Search = () => {
    return (
        <>
        <SearchBar />

        <div className="container results">
        <h3>Results</h3>
        <BookResult />
        </div>
        
        

        </>

        
    )
}

export default Search
