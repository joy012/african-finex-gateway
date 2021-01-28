import React from 'react';
import clientLogo1 from '../../image/airbnb.png'
import clientLogo2 from '../../image/google.png'
import clientLogo3 from '../../image/netflix.png'
import clientLogo4 from '../../image/slack.png'
import clientLogo5 from '../../image/uber.png'

const Client = () => {
    return (
        <div className='container-fluid'>
            <div className="row align-items-center justify-content-center py-5">
                <div className="col-4 col-md-offset-1 mt-3 mt-md-0">
                    <img className='w-50 d-block mx-auto' src={clientLogo1} alt=""/>
                    </div>
                <div className="col-4 mt-3 mt-md-0">
                    <img className='w-50 d-block mx-auto' src={clientLogo2} alt=""/>
                    </div>
                <div className="col-4 mt-3 mt-md-0">
                    <img className='w-50 d-block mx-auto' src={clientLogo3} alt=""/>
                    </div>
                <div className="col-4 mt-3 mt-md-0">
                    <img className='w-50 d-block mx-auto' src={clientLogo4} alt=""/>
                    </div>
                <div className="col-4 mt-3 mt-md-0">
                    <img className='w-50 d-block mx-auto' src={clientLogo5} alt=""/>
                    </div>
            </div>
        </div>
    );
};

export default Client;