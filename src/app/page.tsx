/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

let weatherApiKey = "8f6200216e7a219e044fb1179fea87b6";

export default function Home() {
  const [place, setPlace] = useState("Mumbai");
  const [placeData, setPlaceData] = useState<any>(null);
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const getWeatherData = async () => {
    if (place && place.length > 0) {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${weatherApiKey}`;
        let res = await fetch(url);
        let data = await res.json();
        setPlaceData(data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="h-screen bg-[url('https://images.unsplash.com/photo-1601225691237-b0a1dfa036e0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex flex-col items-center">
      <div className="flex bg-[rgba(0,0,0,0.25)] px-2 py-2 items-center rounded-2xl mt-10">
        <input
          className="bg-transparent outline-none text-zinc-300 p-2"
          type="search"
          placeholder="City Name"
          onChange={(e) => setPlace(e.target.value)}
        />
        <button
          className="flex items-center text-zinc-300 gap-2"
          onClick={getWeatherData}
        >
          Search
          <IoSearch />
        </button>
      </div>
      {placeData && (
        <div className="row w-full flex justify-between items-center p-3 gap-10">
          <div className="section1 flex justify-between items-center text-zinc-400 bg-[rgba(0,0,0,.3)] px-5 w-2/3 rounded-2xl">
            <div className="section11 flex items-center justify-center  " >
              <img className="h-[70px]"
                src={`http://openweathermap.org/img/wn/${placeData.weather[0].icon}@2x.png`}
                alt={placeData.weather[0].description}
              />
              <p>
                {(placeData?.main.temp - 273.5).toFixed(1)} <span>°C</span>
              </p>
            </div>

            <div className="section11  flex items-center justify-center gap-10 ">
              <p>{placeData?.name}</p>
              <p>{placeData?.weather[0].main}</p>
            </div>
          </div>
          <div className="time-div flex items-center justify-center w-1/3  text-zinc-400 bg-[rgba(0,0,0,.3)] px-5 rounded-2xl h-[70px]">
            <p className="time">{currentTime}</p>
          </div>
        </div>
      )}
      {placeData && (
        <div className="section2 flex justify-between p-5 gap-10 w-full flex-wrap ">
          <div className="flex items-center text-zinc-400 bg-[rgba(0,0,0,.3)] p-6 rounded-lg w-1/3 justify-between">
            <p>Temperature</p>
            <p>{(placeData?.main.temp - 273.15).toFixed(1)} °C</p>
          </div>
          <div className="flex items-center text-zinc-400 bg-[rgba(0,0,0,.3)] p-6 rounded-lg w-1/3 justify-between">
            <p>Temperature Min</p>
            <p>{(placeData?.main.temp_min - 273.15).toFixed(1)} °C</p>
          </div>
          <div className="flex items-center text-zinc-400 bg-[rgba(0,0,0,.3)] p-6 rounded-lg w-1/3 justify-between">
            <p>Temperature Max</p>
            <p>{(placeData?.main.temp_max - 273.15).toFixed(1)} °C</p>
          </div>
          <div className="flex items-center text-zinc-400 bg-[rgba(0,0,0,.3)] p-6 rounded-lg w-1/2 justify-between">
            <p>Humidity</p>
            <p>{placeData?.main.humidity}</p>
          </div>
          <div className="flex items-center text-zinc-400 bg-[rgba(0,0,0,.3)] p-6 rounded-lg w-1/2 justify-between">
            <p>pressure</p>
            <p>{placeData?.main.pressure}</p>
          </div>
          <div className="flex items-center text-zinc-400 bg-[rgba(0,0,0,.3)] p-6 rounded-lg w-1/3 justify-between">
            <p className="">Visibility</p>
            <p>{placeData?.visibility}</p>
          </div>
          <div className="flex items-center text-zinc-400 bg-[rgba(0,0,0,.3)] p-6 rounded-lg justify-between w-1/3">
            <p >Wind Speed</p>
            <p>{placeData?.wind.speed} km/hr</p>
          </div>
        </div>
      )}
    </div>
  );
}
