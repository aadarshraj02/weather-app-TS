"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

let weatherApiKey = "8f6200216e7a219e044fb1179fea87b6";

export default function Home() {
  const [place,setPlace] = useState("Mumbai");
  const getWeatherData = async ()=>{
    if(place && place.length>0){
      try{
        let url =  `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${weatherApiKey}`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
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
