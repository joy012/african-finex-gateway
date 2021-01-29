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
    const name = JSON.parse(sessionStorage.getItem('name'));
    const location = useLocation();


    return (
        <div className='background'>
            <div className='container px-0 mx-auto'>
                <div className='row mt-3 align-items-center justify-content-around my-0 my-sm-4'>
                    <div className="col-4 px-4">
                        <Link to='/'>
                            <img src={logo} className="d-block w-25 mx-auto mx-sm-0" alt="" />
                        </Link>
                    </div>
                    <div className='col-4 mx-auto mx-sm-0 text-center text-sm-left'>
                        <h2 className="text-center">African Finex Gateway</h2>
                    </div>
                    <div className='col-4 mx-auto mx-sm-0 text-center text-sm-left'>
                        <h5 className="text-right">{name}</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-2">
                        <nav className="nav flex-column align-items-center my-5 ml-auto">
                            <Link to='/' className="mt-4 text-dark side-link"><i class="fas fa-shopping-cart"></i> History</Link>
                            <Link to='/buy' className="my-4 text-dark"><i class="fas fa-suitcase"></i> Buy Coin</Link>
                            <Link to='/sell' className="mb-4 text-dark"><i class="fas fa-comment-alt"></i> Sell Coin</Link>
                        </nav>
                    </div>
                    <div className="col-sm-10 p-0 p-md-5" style={{ backgroundColor: "#F4F7FC", borderRadius: '16px' }}>
                        {
                            (location.pathname === '/') &&
                            <Data />
                        }
                        {
                            location.pathname === '/buy' &&
                            <BuyFrontPage />
                        }
                        {
                            location.pathname === '/buy-secondPage' &&
                            <BuyStepTwo />
                        }
                        {
                            location.pathname === '/buy-thirdPage' &&
                            <BuyStepThree />
                        }
                        {
                            location.pathname === '/buy-finalPage' &&
                            <BuyStepFour />
                        }
                        {
                            location.pathname === '/buy-success' &&
                            <BuySuccess />
                        }

                        {
                            location.pathname === '/sell' &&
                            <SellFrontPage />
                        }
                        {
                            location.pathname === '/sell-secondPage' &&
                            <SellStepTwo />
                        }
                        {
                            location.pathname === '/sell-thirdPage' &&
                            <SellStepThree />
                        }
                        {
                            location.pathname === '/sell-fourthPage' &&
                            <SellStepFourth />
                        }
                        {
                            location.pathname === '/sell-fifthPage' &&
                            <SellFifthPage />
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};


export default DashBoard;