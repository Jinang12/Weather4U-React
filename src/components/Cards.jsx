import React from 'react';

const Cards = ({ weatherData }) => {
    if (!weatherData) {
        return <div>No data available. Please search for a city.</div>;
    }

    const { location, current } = weatherData;

    return (
        <div className="container py-3">
            <main>
                <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '900',color:'white' }}>
                    Weather in {location.name}
                </h2>
                <br />
                <br />
                <div id="selector" className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    {/* Temperature Card */}
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm" style={{ height: '400px', border: '0px' }}>
                            <div className="card-header py-3" style={{ backgroundColor: '#007bff', color: 'white' }}>
                                <h4 className="my-0 fw-normal">Temperature</h4>
                            </div>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <h1 className="card-title pricing-card-title">
                                    {current.temp_c} °C <small className="text-body-secondary fw-light">({current.condition.text})</small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4 text-center">
                                    <li>Feels like: {current.feelslike_c} °C</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Humidity Card */}
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm" style={{ height: '400px', border: '0px' }}>
                            <div className="card-header py-3" style={{ backgroundColor: '#007bff', color: 'white' }}>
                                <h4 className="my-0 fw-normal">Humidity</h4>
                            </div>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <h1 className="card-title pricing-card-title">
                                    {current.humidity}%
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4 text-center">
                                    <li>Last updated: {current.last_updated}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Wind Card */}
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm" style={{ height: '400px', border: '0px' }}>
                            <div className="card-header py-3" style={{ backgroundColor: '#007bff', color: 'white' }}>
                                <h4 className="my-0 fw-normal">Winds</h4>
                            </div>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <h1 className="card-title pricing-card-title">
                                    {current.wind_kph} km/h
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4 text-center">
                                    <li>Direction: {current.wind_dir}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cards;
