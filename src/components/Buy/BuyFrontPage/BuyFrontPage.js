import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../../../App';


const BuyFrontPage = () => {
    const [country,setCountry, quantity,setQuantity] = useContext(UserContext)
    const [countryDetail, setCountryDetail] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountryDetail(data));
    }, [])

    const handleCountry = event => {
        setCountry(
            countryDetail.find(country => country.currencies[0].code === event.target.value.split(' ')[1])
        )
    }

    const handleQuantity = event => {
        setQuantity(event.target.value);
    }
    return (
        <div className='pageBox'>
            <h3 className='mb-5 mt-3'>Stablecoin gateway - BUY</h3>
            <select onChange={handleCountry} className="form-control w-50 my-4">
                <option>Select Your Coin</option>
                {
                    countryDetail.map(country =>
                        <option key={country.alpha2Code}>{country.currencies[0].symbol} {country.currencies[0].code}</option>
                    )
                }
            </select>
            <input onBlur={handleQuantity} className='form-control my-3 w-25' type="number" placeholder='Quantity' />
            <h5 className='mt-5 pt-5'>Total cost @price AOA/TAOA</h5>
            <Link to='/buy-secondPage'>
                <input className='nextBtn' type="submit" value='Next' />
            </Link>
        </div>
    );
};

export default BuyFrontPage;