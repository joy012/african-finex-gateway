import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';


const SellFifthPage = () => {
    const [country, setCountry, quantity, setQuantity, wallet, setWallet, iban, setIban, TXid, setTXid] = useContext(UserContext);

    const history = useHistory();
    const handleAddSell = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('country', country);
        formData.append('coinQuantity', quantity);
        formData.append('wallet', wallet);
        formData.append('IBAN', iban);
        formData.append('TXid', TXid);

        fetch('https://apartment-hunt-spa.herokuapp.com/addUserBooking', {
            method: 'POST',
            body: formData
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
        <div className='pageBox'>
            <h5 className='mb-5 mt-3'>Step 5/5</h5>
            <h6 className='my-5'>Congratulations! You have made it successfully. Remember your internal Transaction ID. If you need any help, customer support will ask for it.</h6>

            <h4 className='my-5'>{TXid}</h4>

            <h5>ID X, qtt token, token, timestamp</h5>
            <input onClick={handleAddSell} className='nextBtn' type="submit" value="I've stored the ID and I'm done" />
        </div>
    );
};

export default SellFifthPage;