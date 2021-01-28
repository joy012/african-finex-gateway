import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../image/logo3.png';
import './Home.css';

const NavBar = () => {
    const [user, setUser] = useContext(UserContext);
    const location = useLocation();
    const isLocation = location.pathname === '/login' || location.pathname === '/register';

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light pt-0">
                <img className={`logo d-block ${isLocation? 'mx-auto' : 'mr-auto'}`} src={logo} alt="" />
                {
                    !isLocation &&
                    <>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto text-center">
                                <Link className="nav-link mt-3 mt-sm-0" to="/">Home</Link>
                                <Link className="nav-link" to="#services">Services</Link>
                                <Link className="nav-link" to="#contact">Contact</Link>
                                <Link className="nav-link" to="/dashboard">Shop</Link>
                                {
                                    (user.email && user.name)?
                                    <Link to="/dashboard" className="nav-link">{user.name}</Link>
                                    :
                                    <>
                                        <Link className="btn px-4 rounded-pill mt-2 mt-lg-0 mr-lg-2 mx-auto" to="/login">LogIn</Link>
                                    </>
                                }
                            </div>
                        </div>
                    </>
                }
            </nav>
        </div>
    );
};

export default NavBar;