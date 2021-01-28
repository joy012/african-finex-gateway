import React from 'react';

const SaleStats = () => {
    return (
        <div className='card-bg'>
            <section className="container">
                <div className="row align-items-center justify-content-center pb-5">
                    <div className="col-md-5 my-3">
                        <h1 className='display-4'>Edge Token Sale</h1>
                        <small>Edge Token Sale
                        Aliquam lorem ante, dapibus in, viverra quis, feugiat tellus. Phasellus viverra nulla ut metus varius laore.
                    </small>
                        <p className='my-3 lead'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
                    </div>
                    <div className="col-md-6 pb-5">
                        <div class="progress my-5" style={{ height: '25px' }}>
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>
                                <h5>Communication 85%</h5>
                            </div>
                        </div>
                        <div class="progress my-5" style={{ height: '25px' }}>
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "88%" }}>
                                <h5>Strategic planning 88%</h5>
                            </div>
                        </div>
                        <div class="progress my-5" style={{ height: '25px' }}>
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                <h5>Analytical skills 80%</h5>
                            </div>
                        </div>
                        <div class="progress my-5" style={{ height: '25px' }}>
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                <h5>Security 90%</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default SaleStats;