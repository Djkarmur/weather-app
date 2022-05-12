import React,{useEffect, useState} from "react";
import "./weathercard.css";
function Weathercard  ({
  tempinfo:{temp,humidity,pressure,main,name,speed,country,sunset}
})  {
  const [weatherstate,setweather] = useState();
  useEffect(()=>{
    if(main){
      switch(main){
        case 'clouds':
          setweather('wi-day-cloudy');
          break;
        case 'Haze':
          setweather('wi-day-fog');
          break;
        case 'Clear':
          setweather('wi-day-sunny');
          break;
        case 'Mist':
          setweather('wi-dust');
          break;
        case 'Rain':
          setweather('wi-day-rain');
          break;
        case 'Night':
          setweather('wi-night-clear');
          break;
        default :
         setweather('wi-day-sunny');
         break;
      }
    }

  },[main])
  let sec = sunset;
  let date = new Date(sec*1000);
  let finaltime = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
    <div className="weathercontent">
      <div className="weathericon">
        <i className={`wi ${weatherstate}`}></i>
      </div>
      
        <div className="mainweathercard">
          <div className="weathertemp">
            <span>{temp}&deg;</span>
          </div>
          <div className="weatherdesc">
            <div className="weathercond">{main}</div>
            <div className="weatherloc">{name} {country}</div>
          </div>
          <div className="timing">
            <div>{new Date().toLocaleString()}</div>
          </div>
        </div>
        <div className="extrainfo">
          <div className="suntime">
            <i className={"wi wi-sunset"}></i>
            <div className="sunsetinfo">
              <p>{finaltime} PM</p>
              <p>Sunset</p>
            </div>
          </div>
          <div className="humidity">
            <i className={"wi wi-humidity"}></i>
            <div className="humidityinfo">
              <p>{humidity}</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="rain">
            <i className={"wi wi-rain"}></i>
            <div className="raininfo">
              <p>{pressure}</p>
              <p>Pressure</p>
            </div>
          </div>
          <div className="windspeed">
            <i className={"wi wi-strong-wind"}></i>
            <div className="humidityinfo">
              <p>{speed}</p>
              <p>Speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Weathercard;
