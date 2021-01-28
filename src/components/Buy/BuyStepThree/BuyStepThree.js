import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const BuyStepThree = () => {
    const [, , , ,country, , , , , , , setIban] = useContext(UserContext);
    const handleChange = event => {
        setIban(`${country.alpha2Code}98${country.alpha3Code}${country.population}`);
    }
    return (
        <div className='service-card w-75 d-bolck mx-auto p-5'>
            <h5 className='mb-5 mt-3'>Step 3/4</h5>
            <select onChange={handleChange} className="form-control w-50 my-4">
                <option>Choose A Local Bank</option>
                <option>Aegis Bancorp</option>
                <option>Emblem Financial Inc.</option>
                <option>Rose Financial Corp.</option>
                <option>Excellence Bank Group</option>
                <option>Midland Bank</option>
                <option>Purity Banks</option>
                <option>Fidelity Banks Inc.</option>
            </select>
            <h6 className='my-4'>Transfer Between Banks are usually faster.If availabel give preferance to your local bank and the system will automatically find the best P2P for you.</h6>

            <Link><p className='text-center my-4 pt-5'>How lonk does it usually take?</p></Link>
            <Link to='/dashboard/buy-finalPage'>
                <input className='btn px-5 d-block mx-auto my-5' type="submit" value='Next' />
            </Link>
        </div>
    );
};

export default BuyStepThree;