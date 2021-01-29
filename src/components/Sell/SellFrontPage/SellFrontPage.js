import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SellFrontPage = () => {
    const [country,setCountry,quantity ,setQuantity] = useContext(UserContext)
    const [countryDetail, setCountryDetail] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountryDetail(data));
    }, [])

    const handleCountry = event => {
        setCountry(
            countryDetail.find(country => country.currencies[0].code === event.target.value.split('/')[1])
        )
    }

    const handleQuantity = event => {
        setQuantity(event.target.value);
    }
    return (
        <div className='service-card w-75 d-bolck mx-auto p-5'>
            <h3 className='mb-5 mt-3'>Stablecoin gateway - Sell</h3>
            <select onChange={handleCountry} className="form-control w-75 d-block mx-auto my-4">
                <option>Select Your Coin</option>
                {
                    countryDetail.map(country =>
                        <option key={country.alpha2Code}>T{country.currencies[0].code}/{country.currencies[0].code}</option>
                    )
                }
            </select>
            <input onBlur={handleQuantity} className='form-control my-3 w-50 d-block mx-auto' type="number" placeholder='Quantity' />
            <h5 className='mt-5 pt-5 text-success'>You Will Get {quantity? `${quantity - (quantity*.01)}`:''} {country.name? `${country.currencies[0].code}`: 'AOA'} from {quantity? `${quantity}`:''} {country.name? `T${country.currencies[0].code}`: 'TAOA'}</h5>
            <Link to='/sell-secondPage'>
                <input className='btn px-5 d-block mx-auto my-5' type="submit" value='Sell Now' />
            </Link>
        </div>
    )
};

export default SellFrontPage;