"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

let weatherApiKey = "8f6200216e7a219e044fb1179fea87b6";

export default function Home() {
  const [place, setPlace] = useState("Mumbai");
  const getWeatherData = async () => {
    if (place && place.length > 0) {
      try {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${weatherApiKey}`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {}, []);
  getWeatherData();
  return (
    <div className="h-screen bg-[url('https://images.unsplash.com/photo-1601225691237-b0a1dfa036e0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex flex-col items-center">
      <div className="flex bg-[rgba(0,0,0,0.25)] px-2 py-2 items-center rounded-2xl mt-10">
        <input className="bg-transparent outline-none text-white p-2" type="search" placeholder="City Name" onChange={(e)=>setPlace(e.target.value)} />
        <button className="flex items-center text-gray-500 gap-2" onClick={getWeatherData}>Search<IoSearch /></button>
      </div>
    </div>
  );
}
