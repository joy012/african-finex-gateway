import React from 'react';
import Client from './Client';
import Footer from './Footer';
import Header from './Header';
import SaleStats from './SaleStats';
import Services from './Services';

const Home = () => {
    return (
       <div>
           <Header/>
           <Client/>
           <Services/>
           <SaleStats/>
           <Footer/>
       </div>
    );
};

export default Home;