import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const BuyStepThree = () => {
    const [, , , , , , , setIban] = useContext(UserContext);
    const handleChange = event => {
        setIban(event.target.value);
    }
 
    return (
        <div className='service-card w-75 d-bolck mx-auto p-md-5 p-3'>
            <h5 className='mb-5 mt-3'>Step 3/4</h5>
            <select onChange={handleChange} className="form-control w-50 d-block mx-auto my-4">
                <option>Choose A Local Bank</option>
                <option>Aegis Bancorp</option>
                <option>Emblem Financial Inc.</option>
                <option>Rose Financial Corp.</option>
                <option>Excellence Bank Group</option>
                <option>Midland Bank</option>
                <option>Purity Banks</option>
                <option>Fidelity Banks Inc.</option>
            </select>
            <h5 className='my-5'>Transfer Between Banks are usually faster.If availabel give preferance to your local bank and the system will automatically find the best P2P for you.</h5>

            <Link><p className='text-center my-4 pt-5'>How lonk does it usually take?</p></Link>
            <Link to='/buy-finalPage'>
                <input className='btn px-5 d-block mx-auto my-5' type="submit" value='Next' />
            </Link>
        </div>
    );
};

export default BuyStepThree;