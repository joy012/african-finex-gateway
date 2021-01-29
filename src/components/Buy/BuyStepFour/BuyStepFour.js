import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
var uniqid = require('uniqid');


const BuyStepFour = () => {
    const [country,, quantity,, wallet,, iban] = useContext(UserContext);
    const history = useHistory();
    const time = new Date().toLocaleString();
    const data = {
        country: country,
        coinQuantity: quantity,
        wallet: wallet,
        IBAN: iban,
        swapId: uniqid(),
        timeStamp: time
    };
    const handleAddBuy = e => {
        e.preventDefault();
        fetch('https://african-finex-gateway.herokuapp.com/addBuy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    history.push('/buy-success');
                }
            })
    }
    return (
        <div className='service-card w-75 d-bolck mx-auto p-md-5 p-3'>
            <h5 className='mb-5 mt-3'>Step 4/4</h5>

            <h5 className='my-4'>Transfer funds to the following account</h5>

            <h5 className='text-left w-50 mx-auto'><span className='text-success'>IBAN: </span> 012 0125 332 0123</h5>
            <h5 className='text-left w-50 mx-auto'><span className='text-success'>Swap ID: </span> {uniqid()}</h5>

            <h6 className='my-5'>As soon as the funds are received, the transaction of your BSC Wallet will be made the following address:</h6>
            <h5 className='word-wrap'>{wallet ? `${wallet}` : 'wallet address'}</h5>

            <Link><p className='text-center mt-2 pt-3'>Doubts? Dsicord or Telegram</p></Link>
                <input onClick={handleAddBuy} className='btn px-5 d-block mx-auto my-5' type="submit" value='Buy' />
        </div>
    );
};

export default BuyStepFour;