import React, { useState, useEffect } from 'react';
import API from "../utils/API";


const Saved = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
        .then(res => 
            setBooks(res.data))
        .catch(err => console.log(err))
    }

    function deleteBook(id) {
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err))
    }

    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4 jumbo-title mb-4">(REACT) Google Books</h1>
                
                <h3 className="display-2 jumbo-title mb-4">Your saved books!</h3>
        
            </div>

            <div className="container results">
                <h3>Saved Books</h3>

                {books.length ? (
                    <div> 
                        {books.map(book => (
                            <div className="card book-result" key={book._id}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card-title">{book.title}</div>
                                    <div className="author">{book.authors}</div>
                                </div>
                
                                <div className="col-md-6 button-choices">
                                    <a className="btn btn-primary view-btn" href={book.link} rel="noopener noreferrer" target="_blank" type="button">View</a>
                                    <button className="btn btn-secondary save-btn" onClick={() => deleteBook(book._id)}>Delete</button>
                                </div>
                
                
                            </div>
                            
                            
                
                            <hr/>
                
                            <div className="row mb-4">
                                <div className="col-md-4">
                                    <img className="book-image" src={book.image}/>
                                </div>
                                <div className="col-md-8">
                                    <p className="summary">Summary</p>
                                    <p className="description mx-3">{book.description}</p>
                                </div>
                            </div>
                
                        </div>
                        ))}
                    </div>
                ) : (
                    <h3>No Saved Books here!</h3>
                )}

            </div>
        </>
    )
}

export default Saved
