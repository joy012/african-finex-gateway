import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const BuySuccess = () => {
    const [country, setCoutnry, quantity,setQuantity, wallet, setWallet] = useContext(UserContext);
    const currency = country.name ? `${country.currencies[0].symbol}` : 'currency';
    const resetAll = () => {
        setCoutnry({});
        setQuantity(0);
        setWallet('');
    }
    return (
        <div className='pageBox'>
        <h2 className='my-5 py-5'><span className='text-success'>Congratulations! </span>{`${currency}${quantity}`} has added to your wallet successfully!</h2>
       
       
      
        <Link to='/sell-frontPage'>
            <button onClick={resetAll} className='btn btn-success mt-5 text-center'>Sell Coin</button>
        </Link>
    </div>
    );
};

export default BuySuccess;