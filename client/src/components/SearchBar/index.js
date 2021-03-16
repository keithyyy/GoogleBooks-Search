import React from 'react'

const SearchBar = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4 jumbo-title mb-4">(REACT) Google Books</h1>
            
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search a book title" aria-label="Search book title" aria-describedby="basic-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-dark" type="button">Search</button>
                </div>
            </div>
        
        </div>
    )
}

export default SearchBar
