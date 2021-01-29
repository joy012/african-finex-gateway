import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const SellStepFourth = () => {
    const [country, , , , , , , , TXid, setTXid] = useContext(UserContext);
    const currency = country.currencies[0].code;

    const handleChange = event => {
        if(event.target.value){
            setTXid(event.target.value)
        }
        else{
            alert('Put the Transaction Id given by your Bank')
        }
    }
    return (
        <div className='service-card w-75 d-bolck mx-auto p-md-5 p-3'>
            <h5 className='mb-5 mt-3'>Step 4/5</h5>
            <h5 className='my-5'>Transfer Your Token <span className='h3 text-success'>T{currency}</span> to the following BSC (Binance smart chain) address and enter the resulting TXid.</h5>

            <h4 className='my-5 word-wrap'>
                0x069aa074c1881eb59421acd0a76850eaa6b</h4>

            <input onBlur={handleChange} type="text" className='form-control w-100 my-5' placeholder='TXid (mandatory Info)' />
            <Link to={`${TXid? '/sell-fifthPage' : '/sell-fourthPage'}`}>
                <input className='btn px-5 d-block mx-auto my-5' type="submit" value='Next' />
            </Link>
        </div>
    );
};

export default SellStepFourth;