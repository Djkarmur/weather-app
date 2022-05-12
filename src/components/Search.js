import React, { useState ,useEffect} from "react";
import './search.css';
import Weathercard from "./Weathercard";


const Search = () =>{
    const [searchset,searchfun]=useState('delhi');
    const [tempinfo,settemp] = useState({});
    function setsearch(ev){
        searchfun(ev.target.value);
    }
    const fetchdata = async () => {
        try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchset}&units=metric&appid=93a4ad86a1ade07f5338b63e834be9aa`
            let result = await fetch(url);
            let data = await result.json();
            console.log(data);
            const {temp,humidity,pressure} = data.main;
            const {main} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country,sunset} = data.sys;
           
            const tempobj = {
                temp,humidity,pressure,main,name,speed,country,sunset
            }
            
            settemp(tempobj);
           

        }catch(error){
            console.log(error);
        }
       
    }
    useEffect(() => {
      fetchdata();
    },[]);
    
    return(
        <>
        <div className="mainsearch">
            <input className="searchbar" type="text" placeholder="Enter City Name" onChange={setsearch}/>
            <button className="searchbutton" onClick={fetchdata}>Search</button>
        </div>
        <div className="weathermain">
        
        <Weathercard  tempinfo={tempinfo} />
        </div>
        </>
    )
}
export default Search;