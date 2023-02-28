import React from "react";
import './CSS/TrendingPackages.css';
const CardsHeader = () =>{
    return(
        <div className="cards-header">
            Trending Packages
            <p>
            India’s diverse topography, history and culture offers enough experiences to fulfil any type of wanderlust. So do our India tour packages which cover the length and breadth of the land.
            The Himalayas are one of the few sights capable of literally taking your breath away. And you can view them up close in our own country. Ranging across the states of Jammu & Kashmir, Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh and West Bengal, crossing these mountainous terrains will give you an otherworldly sense of joy. We are fortunate to have so many mountain ranges across India in Ladakh, Himachal, Uttarakhand, and even Kerala! It gives mountain lover so many opportunities for their tour and travel plans. And as you move down, you will find the contrasting deserts of Rajasthan - a state with a culturally rich heritage and magnificent structures like the Amber Palace, Hawa Mahal, and City Palace. The elegant architecture is a showcase of our tremendous history. Along with this is the Ranthambore National Park - one of the rare locations of this world which will amaze you with its wildlife in its natural habitat. The other great thing about the country’s location is its proximity to the sea. With ten states along its coastline, you can take your pick from any of them. There is the Arabian Sea whose waves crash against the states of Maharashtra, Kerala and Goa. The entire Konkan belt is known for its beautiful beaches, and a stunning coastline with a gorgeous combination of hills and beaches making it one of the best tour and travel belts in the country. Odisha, Tamil Nadu and Andhra Pradesh are greeted by the waters of the Bay of Bengal. The choppy waters in the Bay of Bengal not to forget the spellbinding Andaman and Nicobar Islands which boasts of Asia’s best beach - Radhanagar Beach.
            Go through more of our holiday packages in India to find your next best tour and travel across the country with the leading tour and travel agency.
            </p>
        </div>
    )
}
const Cards = () => {
    return(
        <div className="cards-inner">
            <div className="imagebox">
                <img src={"andaman.jpg"} alt="No Available" />
            </div>
            <div className="content">
                <h3>Himachal</h3>
                <h6>Price Starting From</h6>
                <h3>17000/-</h3>
            </div>
        </div>
    )
}
export {Cards,CardsHeader}