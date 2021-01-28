import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const SellStepFourth = () => {
    const [, , , , country, , , , , , , , , setTXid] = useContext(UserContext);
    const currency = country.currencies[0].code;

    const handleChange = event => {
        setTXid(event.target.value)
    }
    return (
        <div className='service-card w-75 d-bolck mx-auto p-5'>
            <h5 className='mb-5 mt-3'>Step 4/5</h5>
            <h6 className='my-5'>Transfer Your Token T{currency} to the following BSC (Binance smart chain) address and enter the resulting TXid.</h6>

            <h4 className='my-5 w-50'>
                0x069aa074c1881eb59421acd0a76850eaa6b</h4>

            <input onBlur={handleChange} type="text" className='form-control w-100 my-5' placeholder='TXid (mandatory Info)' />
            <Link to='/dashboard/sell-fifthPage'>
                <input className='btn px-5 d-block mx-auto my-5' type="submit" value='Next' />
            </Link>
        </div>
    );
};

export default SellStepFourth;