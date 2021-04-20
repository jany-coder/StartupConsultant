import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonials from '../Testimonials/Testimonials';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import Consultants from '../Consultants/Consultants';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Cultures from '../Cultures/Cultures';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Cultures></Cultures>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Consultants></Consultants>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;