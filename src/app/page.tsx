"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

let weatherApiKey =process.env.NEXT_PUBLIC_WEATHER_API_KEY

export default function Home() {
  const [place,setPlace] = useState("Mumbai");
  const getWeatherData = async ()=>{
    if(place && place.length>0){
      try{
        let url =  `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${weatherApiKey}`
      }
      catch(err){
        console.log(err)
      }
    }
  }
  useEffect(()=>{},[])
  getWeatherData();
  return (
   <div></div>
  );
}
