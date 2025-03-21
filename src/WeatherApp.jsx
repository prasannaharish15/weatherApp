import { useState } from 'react';
import img1 from './assets/img2.png'
import WeatherDetails from "./WeatherDetails";
function WeatherApp(){
    const [city, setCity] = useState("");
    const [showWeather, setShowWeather] = useState(false);

    function handleClick(){
        const cityName=document.getElementById('inc').value;
        setCity(cityName);
        document.getElementById('inc').value="";
        setShowWeather(true);

    }
    function goBack() {
        setShowWeather(false); 
    }
    if (showWeather) {
        return <WeatherDetails city={city}  goBack={goBack}/>;
    }
        
    
    


    return(
        <>
        <div className="cen-div">
            <div className="mydiv">
                <h2 className="h21">Weather App</h2>
                <img src={img1} alt=""/>
                <p>Find Weather of Your City</p>
                <input type="text"  id='inc'/><button onClick={handleClick}>Search</button>
                


            </div>

        </div>
        </>
    )
}
export default WeatherApp;