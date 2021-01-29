import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SellStepTwo = () => {
    const [ , , , , , setWallet] = useContext(UserContext);
    const validateWallet = event => {
        if(!(/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(event.target.value))){
            alert('Enter a valid address. DEMO: 1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY');
            event.target.value ='';
        }
        else{
            setWallet(event.target.value);
        }
    }

    return (
        <div className='service-card w-75 d-bolck mx-auto p-md-5 p-3'>
            <h5 className='mb-5 mt-3'>Step 2/5</h5>
            <input onBlur={validateWallet} type="text" className='form-control w-100' placeholder='Enter your BSC Wallet address'/>
            <h5 className='my-5'>If for some reason we cannot proceed with your sale (which is rare) we will completely return your assets. Please provide a BSC valid Wallet address that you have access to. Pay close attention to not put any incorrect information.</h5>
          
          <Link><p className='text-center my-2'>Don't have a BSC Wallet yet?</p></Link>
            <Link to='/sell-thirdPage'>
                <input className='btn px-5 d-block mx-auto my-5' type="submit" value='Next' />
            </Link>
        </div>
    );
};

export default SellStepTwo;