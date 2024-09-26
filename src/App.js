import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
    const [searchItem, setSearchItem] = useState('');
    const [weatherData, setWeatherData] = useState(null); // State to store fetched weather data

    const fetchData = async (cityName) => {
        try {
            console.log("Fetching data for city:", cityName); // Debugging statement
            const url = `https://api.weatherapi.com/v1/current.json?key=82dfe0246305438aa30140148242609&q=${cityName}&aqi=no`;
            const response = await fetch(url);

            // Check if the response is ok (status 200)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Weather data received:", data); // Debugging statement
            setWeatherData(data); // Store fetched data in state
        } catch (error) {
            console.error("Error fetching data:", error); // Log the error
        }
    };

    const handleCitySearch = (city) => {
        console.log("City searched:", city); // Debugging statement
        setSearchItem(city);
        fetchData(city); // Fetch data when a city is searched
    };

    return (
        <>
            <Navbar onCitySearch={handleCitySearch} />
            <br />
            <br />
            <br />
            <br />
            <Cards weatherData={weatherData} /> {/* Pass weatherData to Cards component */}
        </>
    );
}

export default App;
