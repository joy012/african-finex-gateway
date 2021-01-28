import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';


const SellFifthPage = () => {
    const [, , , ,country, , quantity, , wallet, , iban, , TXid] = useContext(UserContext);
    const history = useHistory();
    const data = {
        country: country,
        coinQuantity: quantity,
        wallet: wallet,
        IBAN: iban,
        TXid: TXid,
        email: JSON.parse(sessionStorage.getItem('email'))
    };
    const handleAddSell = e => {
        e.preventDefault();
        fetch('https://african-finex-gateway.herokuapp.com/addSell', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Success!')
                    history.push('/');
                }
            })
    }

    return (
        <div className='service-card w-75 d-bolck mx-auto p-5'>
            <h5 className='mb-5 mt-3'>Step 5/5</h5>
            <h6 className='my-5'>Congratulations! You have made it successfully. Remember your internal Transaction ID. If you need any help, customer support will ask for it.</h6>

            <h4 className='my-5'>{TXid}</h4>

            <h5 className='word-wrap'>IBAN:{iban}</h5> 
            <h5 className='word-wrap'>My Wallet: {wallet}</h5>
            <h5>TimeStamp:</h5>
            <input onClick={handleAddSell} className='btn px-5 d-block mx-auto my-5' type="submit" value="I've stored the ID and I'm done" />
        </div>
    );
};

export default SellFifthPage;