import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const BuyFrontPage = () => {
    const [country, setCountry, quantity, setQuantity] = useContext(UserContext)
    const [countryDetail, setCountryDetail] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountryDetail(data));
    }, [])

    const handleCountry = event => {
        setCountry(
            countryDetail.find(country => country.currencies[0].code === event.target.value.split('/')[0])
        )
    }

    const handleQuantity = event => {
        setQuantity(event.target.value);
    }
    return (
        <div className='service-card w-75 d-bolck mx-auto p-5'>
            <h3 className='mb-5 mt-3'>Stablecoin gateway - BUY</h3>
            <select onChange={handleCountry} className="form-control d-block mx-auto w-75 my-4">
                <option>Select Your Coin</option>
                {
                    countryDetail.map(country =>
                        <option key={country.alpha2Code}>{country.currencies[0].code}/T{country.currencies[0].code}</option>
                    )
                }
            </select>
            <input onBlur={handleQuantity} className='form-control my-3 d-block mx-auto w-50' type="number" placeholder='Quantity' />
            <h5 className='my-5 text-danger'>Total cost {quantity ? `${quantity}` : 'price'} {country.name ? `${country.currencies[0].code}` : 'AOA'}</h5>
            <h5 className='my-4 text-success'>You Will Recieve {quantity ? `${quantity - (quantity * 0.01)}` : 'price'} {country.name ? `T${country.currencies[0].code}` : 'TAOA'}</h5>
            <Link to={`${(country.name && quantity) ? '/buy-secondPage' : '/buy'}`}>
                <input className='btn px-5 d-block mx-auto my-5' type="submit" value='Next' />
            </Link>
        </div>
    );
};

export default BuyFrontPage;