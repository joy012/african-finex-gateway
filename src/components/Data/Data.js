import React, { useEffect, useState } from 'react';

const Data = () => {
    const [buy, setBuy] = useState([])
    const [sell, setSell] = useState([]);
    const email = JSON.parse(sessionStorage.getItem('email'));

    useEffect(() => {
        fetch('https://african-finex-gateway.herokuapp.com/buy?email=' + email, {
            method: "GET",
            headers: {
                authorization: `Bearer ${sessionStorage.getItem('token')}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setBuy(data))
    }, [email])

    useEffect(() => {
        fetch('https://african-finex-gateway.herokuapp.com/sell?email=' + email, {
            method: "GET",
            headers: {
                authorization: `Bearer ${sessionStorage.getItem('token')}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setSell(data))
    }, [email])

    return (
        <>
            <div className='container'>
                <h2 className='text-center my-5'>Buy History:</h2>
                <div class="row justify-content-center align-items-center">
                    {
                        buy.map((data, index) =>

                        <div key={index + 1} class="col-md-4 col-lg-3 col-6">
                        <div class="card" style={{ width: '18rem' }}>
                            <div class="card-header">
                                Buy: {index + 1}
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Swap ID: {data.swapId}</li>
                                <li class="list-group-item">IBAN: {data.IBAN}</li>
                                <li class="list-group-item">Wallet: {data.wallet}</li>
                                <li class="list-group-item">Country: {data.country.name}</li>
                                <li class="list-group-item">Currency: {data.country.currencies[0].code}</li>
                                <li class="list-group-item">Coin Quantity: {data.coinQuantity}</li>
                            </ul>
                        </div>
                    </div>

                        )
                    }
                </div>


                <h2 className='text-center my-5'>Sell History:</h2>
                <div class="row justify-content-center align-items-center">
                    {
                        sell.map((data, index) =>

                        <div key={index +1} class="col-md-4 col-lg-3 col-6 ">
                        <div class="card" style={{ width: '18rem' }}>
                            <div class="card-header">
                                Buy: {index + 1}
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">TXID: {data.TXid}</li>
                                <li class="list-group-item">IBAN: {data.IBAN}</li>
                                <li class="list-group-item">Wallet: {data.wallet}</li>
                                <li class="list-group-item">Country: {data.country.name}</li>
                                <li class="list-group-item">Currency: {data.country.currencies[0].code}</li>
                                <li class="list-group-item">Coin Quantity: {data.coinQuantity}</li>
                            </ul>
                        </div>
                    </div>

                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Data;