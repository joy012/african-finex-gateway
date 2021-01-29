import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import tick from '../../../image/tick.png';

const BuySuccess = () => {
    const [country, setCoutnry, quantity, setQuantity, , setWallet] = useContext(UserContext);
    const currency = country.name ? `${country.currencies[0].code}` : 'currency';

    const reset = () => {
        setCoutnry({});
        setQuantity(0);
        setWallet('');
    }
    return (
        <div className='service-card w-75 d-bolck mx-auto p-5'>
            <h3><span className='text-success'>Congratulations! </span>
                <span className='text-danger'>{`${quantity} T${currency}`} </span>
         has been added to your wallet successfully!</h3>
            <div className='my-5'>
                <img className='w-50 d-block mx-auto' src={tick} alt="" />
            </div>
            <Link to='/sell'>
                <button onClick={reset} className='btn d-inline-block mx-5'>Sell Coin</button>
            </Link>
            <Link to='/'>
                <button onclick={reset} className='btn d-inline-block'>History</button>
            </Link>
        </div>
    );
};

export default BuySuccess;