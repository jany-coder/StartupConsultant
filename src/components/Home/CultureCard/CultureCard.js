import React from 'react';

const CultureCard = (props) => {
    const {quote,name,from ,img} = props.culture;
    return (

        <div class="card" style={{width: '18rem'}}>
            <img src={img} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h2>{name}</h2>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>

    );
};

export default CultureCard;