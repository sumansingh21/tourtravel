import React from 'react';
import '../CSS/Quote.css';

const Quote = () =>{
    return(
    <>
       <div className="container-fluid secondParent">             
            <div className="container mr-5 mt-4">
                <div className="row justify-content-start">
                    <div className="col-8">
                        <span className="searchQuote"> "Not all those who wander are lost" </span>
                    </div>
                </div>
                <div className="row justify-content-center mr-5">
                    <span className="quoteSubText"> - J.R.R Tolkine </span> 
                </div>
            </div>
    </div>

    </>
    )
}

export default Quote;