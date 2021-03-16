import React from 'react'
import './style.css'

const BookResult = () => {
    return (
        <div className="card book-result">
            <div className="row">
                <div className="col-md-6">
                    <div className="card-title">Harry Potter: Order of the Phoenix</div>
                    <div className="author">Written by J.K Rowling</div>
                </div>

                <div className="col-md-6 button-choices">
                    <button className="btn btn-primary view-btn">View</button>
                    <button className="btn btn-secondary save-btn">Save</button>
                </div>


            </div>
            
            

            <hr/>

            <div className="row mb-4">
                <div className="col-md-4">
                    <img className="book-image" src="http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"/>
                </div>
                <div className="col-md-8">
                    <p className="summary">Summary</p>
                    <p className="description mx-3">Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.</p>
                </div>
            </div>

            <div className="row">
                
            </div>

        </div>
    )
}

export default BookResult
