import React from 'react';
import service1 from '../../image/service1.png';
import service2 from '../../image/service2.png';
import service3 from '../../image/service3.png';
import './Home.css'

const services = [
    { img: service1, title: 'Our Solution', des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita." }, { img: service2, title: 'Code Blocks', des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita." }, { img: service3, title: 'Global Network', des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita." }
]

const Services = () => {
    return (
        <section id='service' className='py-5'>
            <h2 className='text-center display-4 py-4'>Our Services</h2>
            <div className="container">
                <div className="row justify-content-center align-items-center py-4">
                    {
                        services.map(service =>
                            <div className="col-md-4 my-4">
                                <div className="card h-100 card-bg">
                                    <div className="card-body service-card">
                                        <img src={service.img} className='rounded-circle d-block service-logo mx-auto my-3' alt="" />
                                        <h4 className="card-title">{service.title}</h4>
                                        <p className='card-text'>{service.des}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;