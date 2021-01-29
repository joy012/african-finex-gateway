import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';


const SellFifthPage = () => {
    const [country, setCountry, quantity, setQuantity, wallet, setWallet, iban, setIban, TXid, setTXid] = useContext(UserContext);
    const history = useHistory();
    const time = new Date().toLocaleString();
    const data = {
        country: country,
        coinQuantity: quantity,
        wallet: wallet,
        IBAN: iban,
        TXid: TXid,
        timestamp:time
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
        setCountry({});
        setQuantity(0);
        setWallet('');
        setIban('');
        setTXid('');
        history.push('/');
    }

    return (
        <div className='service-card w-75 d-bolck mx-auto p-md-5 p-3'>
            <h5 className='mb-5 mt-3'>Step 5/5</h5>
            <h5 className='my-5'><span className='text-success h3'>Congratulations!</span> You have made it successfully. Remember your internal Transaction ID. If you need any help, customer support will ask for it.</h5>

            <h5 className='text-left w-75 mx-auto word-wrap'><span className='text-success'>Internal TXid:</span> {TXid}</h5>
            <h5 className='text-left w-75 mx-auto word-wrap'><span className='text-success'>IBAN:</span> {iban}</h5>
            <h5 className='text-left w-75 mx-auto word-wrap'><span className='text-success'>My Wallet:</span> {wallet}</h5>
            <h5 className='text-left w-75 mx-auto word-wrap'><span className='text-success'>Coin:</span> {quantity} {country.currencies[0].code}</h5>
            <h5 className='text-left w-75 mx-auto word-wrap'><span className='text-success'>TimeStamp:</span> {time}</h5>
                <button onClick={handleAddSell} className='btn px-5 d-block mx-auto my-5'>I've stored the ID and I'm done</button>
        </div>
    );
};

export default SellFifthPage;