import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import tick from '../../../image/tick.png';

const BuySuccess = () => {
    const [, , , ,country, setCoutnry, quantity,setQuantity, , setWallet] = useContext(UserContext);
    const currency = country.name ? `${country.currencies[0].symbol}` : 'currency';
  
    return (
        <div className='service-card w-75 d-bolck mx-auto p-5'>
        <h2><span className='text-success'>Congratulations! </span>{`${currency}${quantity}`} has added to your wallet successfully!</h2>
        <div className='my-5'>
            <img className='w-50 d-block mx-auto' src={tick} alt=""/>
        </div>
    </div>
    );
};

export default BuySuccess;