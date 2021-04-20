import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Consultant from '../Consultant/Consultant';
const Consultants = () => {
    const [doctors, setConsultants] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setConsultants(data))
    }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Consultants</h5>
                <div className="row">
                    {
                     doctors.map(consultant =><Consultant key={consultant._id} consultant={consultant} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Consultants;