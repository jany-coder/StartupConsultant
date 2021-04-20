import React from 'react';
import culture1 from '../../../images/culture-01.jpg';
import culture2 from '../../../images/culture-02.jpg';
import culture3 from '../../../images/culture-03.jpg';
import CultureCard from '../CultureCard/CultureCard';


const culturesData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : culture1
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : culture2
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : culture3
    }
]

const Cultures= () => {
    return (
        <section className="my-5 py-5">
        <div className="container">
            <div className="section-header">
                <h5 className="text-primary text-uppercase">Company Culture</h5>
                <h1>What We <span style={{color: "orange"}}> <strong>Make</strong></span>  </h1>
            </div>
            <div className="card-deck mt-5">
                 {
                     culturesData.map(culture => <CultureCard culture={culture} key={culture.name}></CultureCard>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Cultures;