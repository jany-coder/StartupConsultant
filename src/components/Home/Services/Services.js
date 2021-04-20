import React from 'react';
import marketing from '../../../images/marketing-research.png';
import analyst from '../../../images/data-analyst.png';
import design from '../../../images/design-thinking.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Market Researching',
        img: marketing
    },
    {
        name: 'Data Analyst',
        img: analyst
    },
    {
        name: 'Designs Thinking',
        img: design
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5 container-fluid">
            <div className="text-center">
                <h5 style={{color: 'orange'}}>OUR SERVICES</h5>
                <h2 >Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;