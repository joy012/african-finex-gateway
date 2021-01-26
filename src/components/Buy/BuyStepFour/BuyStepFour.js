import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
var uniqid = require('uniqid');


const BuyStepFour = () => {
    const [country, setCoutnry, quantity, setQuantity, wallet, setWallet, iban, setIban] = useContext(UserContext);
    const history = useHistory();
    const handleAddBuy = e => {
        e.preventDefault();
        const data = {
            country: country,
            coinQuantity: quantity,
            wallet: wallet,
            IBAN: iban,
            TXid: uniqid()
        };

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
        <div className='pageBox'>
            <h5 className='mb-5 mt-3'>Step 4/4</h5>

            <h6 className='my-4'>Transfer funds to the following account</h6>

            <h5>IBAN: </h5>
            <h5>Swap ID: {uniqid()}</h5>

            <h6 className='mt-4'>As soon as the funds are received, the transaction of your BSC Wallet will be made the following address:</h6>
            <h5 className='mt-3'>{wallet ? `${wallet}` : 'wallet address'}</h5>

            <Link><p className='text-center mt-2 pt-3'>Doubts? Dsicord or Telegram</p></Link>
                <input onClick={handleAddBuy} className='btn mt-5' type="submit" value='Next' />
        </div>
    );
};

export default BuyStepFour;