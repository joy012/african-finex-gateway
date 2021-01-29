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
        const amount = event.target.value;
        if (amount >= 0) {
            setQuantity(amount - (amount * 0.01));
        }
        else {
            alert("Invalid Coin Value.");
            event.target.value = 0;
        }
    }
    return (
        <div className='service-card w-75 d-bolck mx-auto p-md-5 p-3'>
            <h3 className='mb-5 mt-3'>Stablecoin gateway - BUY</h3>
            <select onChange={handleCountry} className="form-control d-block mx-auto w-75 my-4">
                <option>Select Your Coin</option>
                {
                    countryDetail.map((country, index) =>
                        <option key={country.alpha2Code}>{country.currencies[0].code}/T{country.currencies[0].code}</option>
                    )
                }
            </select>
            <input onBlur={handleQuantity} className='form-control my-3 d-block mx-auto w-50' type="number" min='0' placeholder='Quantity' />

            <h5 className='my-4'>Total cost
            <span className='h3 text-danger'> {quantity ? `${quantity}` : ''} {country.name ? `${country.currencies[0].code}` : ''}</span>
            </h5>

            <h5>You Will Recieve
            <span className='h3 text-success'> {quantity ? `${quantity - (quantity * 0.01)}` : ''} {country.name ? `T${country.currencies[0].code}` : ''}</span>
            </h5>

            <small className='text-danger font-weight-bold'>1% cost deduct for Transaction</small>

            <Link to={`${(country.name && quantity) ? '/buy-secondPage' : '/buy'}`}>
                <input className='btn px-5 d-block mx-auto my-5' type="submit" value='Next' />
            </Link>
        </div>
    );
};

export default BuyFrontPage;