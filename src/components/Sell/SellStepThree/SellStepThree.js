import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const SellStepThree = () => {
    const [, , , , , , iban, setIban] = useContext(UserContext);

    const handleChange = event => {
        if(event.target.value){
            setIban(event.target.value);
        }
        else{
            alert('Input Your IBAN address properly')
        }
       
    }
    return (
        <div className='service-card w-75 d-bolck mx-auto p-md-5 p-3'>
        <h5 className='mb-5 mt-3'>Step 3/4</h5>
        <input onBlur={handleChange} type="text" className='form-control w-100' placeholder='Enter your IBAN account details to be credited'/>
      
      <Link><p className='text-center my-5 pt-5'>Where can I find my IBAN?</p></Link>
        <Link to={`${iban? '/sell-fourthPage' : '/sell-thirdPage'}`}>
            <input className='btn px-5 d-block mx-auto my-5' type="submit" value='Next' />
        </Link>
    </div>
    );
};

export default SellStepThree;