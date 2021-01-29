import React, { useEffect, useState } from 'react';

const Data = () => {
    const [buy, setBuy] = useState([])
    const [sell, setSell] = useState([]);

    useEffect(() => {
        fetch('https://african-finex-gateway.herokuapp.com/buy')
            .then(res => res.json())
            .then(data => setBuy(data))
    }, [])

    useEffect(() => {
        fetch('https://african-finex-gateway.herokuapp.com/sell')
            .then(res => res.json())
            .then(data => setSell(data))
    }, [])

    return (
        <>
            <div className='container'>
                <h2 className='text-center my-5'>Buy History:</h2>
                <div class="row align-items-center">
                    {
                        buy.map((data, index) =>

                        <div key={index + 1} class="col-md-6 col-lg-4 col-6 my-4">
                        <div class={`card ${index%2 ? 'bg-success' : 'bg-primary'}`}>
                            <div class="card-title font-weight-bold text-center">
                                Buy: {index + 1}
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Swap ID: {data.swapId}</li>
                                <li class="list-group-item">BANK: {data.IBAN}</li>
                                <li class="list-group-item">Wallet: {data.wallet}</li>
                                <li class="list-group-item">Coin: {data.coinQuantity} T{data.country.currencies[0].code}</li>
                                <li class="list-group-item">Buy Time: {data.timeStamp}</li>
                            </ul>
                        </div>
                    </div>

                        )
                    }
                </div>


                <h2 className='text-center my-5'>Sell History:</h2>
                <div class="row align-items-center">
                    {
                        sell.map((data, index) =>

                        <div key={index +1} class="col-md-6 col-lg-4 col-6 my-4">
                        <div class={`card ${index%2 ? 'bg-success' : 'bg-primary'}`}>
                            <div class="card-title font-weight-bold text-center">
                                Sell: {index + 1}
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">TXID: {data.TXid}</li>
                                <li class="list-group-item">IBAN: {data.IBAN}</li>
                                <li class="list-group-item">Wallet: {data.wallet}</li>
                                <li class="list-group-item">Coin: {data.coinQuantity} {data.country.currencies[0].code}</li>
                                <li class="list-group-item">Sell Time: {data.timeStamp}</li>
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