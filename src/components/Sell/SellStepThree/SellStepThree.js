import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const SellStepThree = () => {
    const [country, setCountry, quantity, setQuantity, wallet, setWallet,iban, setIban] = useContext(UserContext);

    const handleChange = event => {
        setIban(event.target.value);
    }
    return (
        <div className='pageBox'>
        <h5 className='mb-5 mt-3'>Step 3/4</h5>
        <input onBlur={handleChange} type="text" className='form-control w-100' placeholder='Enter your IBAN account details to be credited'/>
      
      <Link><p className='text-center my-5 pt-5'>Where can I find my IBAN?</p></Link>
        <Link to='/sell-fourthPage'>
            <input className='nextBtn my-5' type="submit" value='Next' />
        </Link>
    </div>
    );
};

export default SellStepThree;