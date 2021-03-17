import React from 'react'
import './style.css'

const BookResult = (props) => {
    
    

    return (
        <div className="card book-result" id={props.key}>
            <div className="row">
                <div className="col-md-6">
                    <div className="card-title">{props.title}</div>
                    <div className="author">{props.author}</div>
                </div>

                <div className="col-md-6 button-choices">
                    <button className="btn btn-primary view-btn">View</button>
                    <button className="btn btn-secondary save-btn" onClick={props.onClick}>Save</button>
                </div>


            </div>
            
            

            <hr/>

            <div className="row mb-4">
                <div className="col-md-4">
                    <img className="book-image" src={props.image}/>
                </div>
                <div className="col-md-8">
                    <p className="summary">Summary</p>
                    <p className="description mx-3">{props.description}</p>
                </div>
            </div>

        </div>
    )
}

export default BookResult
