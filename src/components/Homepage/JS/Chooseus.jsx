import React from 'react';
import '../CSS/Chooseus.css';

const Chooseus = () =>{
    return(
        <>
           <div className="container-fluid thirdParent mt-5">
            <div className="text-center planText py-4 holiday-text"> PLAN YOUR TOUR EASILY </div>
            <div className="container btCardParent mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 cardOne">
                         <div  className="mx-2">
                           <img  src="globe2.png" alt="globe" className="cardChild"></img>
                           <div className="text-center pb-3 mb-5"> World class service </div> 
                         </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 cardOne">
                        <div  className="mx-2">
                            <img  src="piggy.png" alt="globe" className="cardChild"></img>
                            <div  className="text-center pb-3 mb-5"> Value for money </div> 
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 cardOne">
                        <div  className="mx-2">
                           <img  src="tent.png" alt="globe" className="cardChild"></img>
                           <div  className="text-center pb-3 mb-5"> Passinoate Travel </div> 
                        </div>
                    </div>
                </div>
            </div>
    </div>
        </>
    )
}

export default Chooseus;