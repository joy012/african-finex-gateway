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
        <div className='container'>
            <h2 className='center my-5'>Buy History:</h2>
            <div className='my-5'>
                {
                    buy.map((data,index) =>
                        <div>
                            <h5>Buy No: {index + 1}</h5>
                            <p>SwapId: {data.swapId}</p>
                            <p>IBAN: {data.IBAN}</p>
                            <p>Wallet: {data.wallet}</p>
                            <p>Country: {data.Country}</p>
                            <p>coinQuantity: {data.coinQuantity}</p>
                        </div>
                    )
                }
            </div>

            <h2 className='center my-5'>Sell History:</h2>
            <div className='my-5'>
                {
                    sell.map((data, index) =>
                        <div>
                            <h5>Sell No: {index + 1} </h5>
                            <p>SwapId: {data.TXid}</p>
                            <p>IBAN: {data.IBAN}</p>
                            <p>Wallet: {data.wallet}</p>
                            <p>Country: {data.Country}</p>
                            <p>coinQuantity: {data.coinQuantity}</p>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Data;