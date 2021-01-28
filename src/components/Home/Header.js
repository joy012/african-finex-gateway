import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import bannerImg from '../../image/headerpic.png'
import './Home.css'

const Header = () => {
    return (
        <div className="header">
            <NavBar />
            <section className="container">
                <div className="row align-items-center justify-content-center pb-5">
                    <div className="col-md-5 my-3">
                        <h1>Buy And Sell You Coin With Our Finex Gateway</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
                        <Link className='btn btn-dark text-white px-4 mt-3' to="/dashBoard">Shop</Link>
                    </div>
                    <div className="col-md-6 pb-5">
                        <img className="w-100 d-block mx-auto" src={bannerImg} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;