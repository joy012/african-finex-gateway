import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const BuyStepTwo = () => {
    const [, , , , , setWallet] = useContext(UserContext);
    // const isAddress = address => {
    //     if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    //         return false;
    //     }
    //     else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    //         return true;
    //     }
    // };

    const validateWallet = event => {
        // if (isAddress(event.target.value)) {
        //     setWallet(event.target.value);
        // }
        if (/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(event.target.value)) {
           setWallet(event.target.value);
        }
        else {
            alert('Enter a valid address. DEMO: 1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY');
            event.target.value = '';
        }
    }

    return (
        <div className='service-card w-75 d-bolck mx-auto p-5'>
            <h5 className='mb-5 mt-3'>Step 2/4</h5>
            <input onBlur={validateWallet} type="text" className='form-control w-100' placeholder='Enter your BSC Wallet address' />
            <h6 className='my-4'>You will receive your TAOA in this address</h6>
            <h6 className='text-danger my-5'>Pay close attention. Mistakes will cause you loose all your assets and there is nothing we can do to help</h6>

            <Link><p className='text-center my-2'>Don't have a BSC Wallet yet?</p></Link>
            <Link to='/buy-thirdPage'>
                <input className='btn px-5 d-block mx-auto my-5' type="submit" value='Next' />
            </Link>
        </div>
    );
};

export default BuyStepTwo;