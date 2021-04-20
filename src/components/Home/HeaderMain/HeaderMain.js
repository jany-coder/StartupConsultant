import React from 'react';
import { Link } from 'react-router-dom';


const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center container-fluid">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>We Are <strong>Solabiz</strong> <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
                <Link to="/appointment" className="btn btn-brand">Get Consultants</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">

            </div>
        </main>
    );
};

export default HeaderMain;