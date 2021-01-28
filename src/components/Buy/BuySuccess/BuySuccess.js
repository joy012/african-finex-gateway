import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const BuySuccess = () => {
    const [, , , ,country, setCoutnry, quantity,setQuantity, , setWallet] = useContext(UserContext);
    const currency = country.name ? `${country.currencies[0].symbol}` : 'currency';
  
    return (
        <div className='service-card w-75 d-bolck mx-auto p-5'>
        <h2><span className='text-success'>Congratulations! </span>{`${currency}${quantity}`} has added to your wallet successfully!</h2>
       
    </div>
    );
};

export default BuySuccess;