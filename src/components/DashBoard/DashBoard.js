import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../image/logo3.png';
import './DashBoard.css';
import BuyFrontPage from '../Buy/BuyFrontPage/BuyFrontPage';
import SellFrontPage from '../Sell/SellFrontPage/SellFrontPage';
import Data from '../Data/Data';
import './DashBoard.css'
import BuyStepTwo from '../Buy/BuyStepTwo/BuyStepTwo';
import BuyStepThree from '../Buy/BuyStepThree/BuyStepThree';
import BuyStepFour from '../Buy/BuyStepFour/BuyStepFour';
import BuySuccess from '../Buy/BuySuccess/BuySuccess';
import SellStepTwo from '../Sell/SellStepTwo/SellStepTwo';
import SellStepThree from '../Sell/SellStepThree/SellStepThree';
import SellStepFourth from '../Sell/SellStepFourth/SellStepFourth';
import SellFifthPage from '../Sell/SellFifthPage/SellFifthPage';

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();

    return (
        <div className='container px-0 mx-auto'>
            <div className='row mt-3 align-items-center justify-content-around my-0 my-sm-4'>
                <div className="col-4 px-4">
                    <img src={logo} className="d-block w-50 mx-auto mx-sm-0" alt="" />
                </div>
                <div className='col-4 mx-auto mx-sm-0 text-center text-sm-left'>
                    <h4 className="text-center">DashBoard</h4>
                </div>
                <div className='col-4 mx-auto mx-sm-0 text-center text-sm-left'>
                    <h5 className="text-right">{loggedInUser.name}</h5>
                </div>
            </div>

            <div className="row full-height">
                <div className="col-sm-3">
                    <nav className="nav flex-column align-items-center my-5 ml-auto">
                        <Link to='/dashboard' className="mt-4 text-dark side-link"><i class="fas fa-shopping-cart"></i> History</Link>
                        <Link to='/dashboard/buy' className="my-4 text-dark"><i class="fas fa-suitcase"></i> Buy Coin</Link>
                        <Link to='/dashboard/sell' className="mb-4 text-dark"><i class="fas fa-comment-alt"></i> Sell Coin</Link>
                        <Link to='/' className="text-dark"><i class="fas fa-arrow-left"></i> Home</Link>
                    </nav>
                </div>
                <div className="col-sm-9 p-0 p-md-5" style={{ backgroundColor: "#F4F7FC", borderRadius: '16px' }}>
                    {
                        (location.pathname === '/dashBoard') &&
                        <Data />
                    }
                    {
                        location.pathname === '/dashboard/buy' &&
                        <BuyFrontPage />
                    }
                     {
                        location.pathname === '/dashboard/buy-secondPage' &&
                        <BuyStepTwo/>
                    }
                     {
                        location.pathname === '/dashboard/buy-thirdPage' &&
                        <BuyStepThree/>
                    }
                     {
                        location.pathname === '/dashboard/buy-finalPage' &&
                        <BuyStepFour/>
                    }
                    {
                        location.pathname === '/dashboard/buy-succedd' &&
                        <BuySuccess/>
                    }

                    {
                        location.pathname === '/dashboard/sell' &&
                        <SellFrontPage />
                    }
                    {
                        location.pathname === '/dashboard/sell-secondPage' &&
                        <SellStepTwo/>
                    }
                    {
                        location.pathname === '/dashboard/sell-thirdPage' &&
                        <SellStepThree/>
                    }
                    {
                        location.pathname === '/dashboard/sell-fourthPage' &&
                        <SellStepFourth/>
                    }
                    {
                        location.pathname === '/dashboard/sell-fifthPage' &&
                        <SellFifthPage/>
                    }
                </div>
            </div>
        </div>
    );
};


export default DashBoard;