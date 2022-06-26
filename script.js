const axios = require ('axios');

async function useGetWeatherSingapore(){
    const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=5b26803c5a88482f99622916222306&q=Singapore&aqi=no');
    console.log(response);
    return response.data;
}
useGetWeatherSingapore();

async function userGetFutureWeatherSingapore(){
    const response = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=5b26803c5a88482f99622916222306&q=Singapore&days=1&aqi=no&alerts=no');
    console.log(response);
    return response.data;
}
userGetFutureWeatherSingapore();

async function useGetWeatherSeoul(){
    const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=5b26803c5a88482f99622916222306&q=Seoul&aqi=no');
    console.log(response);
    return response.data;
}
useGetWeatherSeoul();

async function userGetFutureWeatherSeoul(){
    const response = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=5b26803c5a88482f99622916222306&q=Seoul&days=1&aqi=no&alerts=no');
    console.log(response);
    return response.data;
}
userGetFutureWeatherSeoul();

async function useGetWeatherTaiwan(){
    const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=5b26803c5a88482f99622916222306&q=Taiwan&aqi=no');
    console.log(response);
    return response.data;
}
useGetWeatherTaiwan();

async function userGetFutureWeatherTaiwan(){
    const response = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=5b26803c5a88482f99622916222306&q=Taiwan&days=1&aqi=no&alerts=no');
    console.log(response);
    return response.data;
}
userGetFutureWeatherTaiwan();
/*
const button = document.getElementById("weatherButton");
button.addEventListener("click",()=>{
    var countryName = document.getElementById("country1");
    var timeState = document.getElementById("time-state");
    var currTemp = document.getElementById("currentTemp");
    var maxMinTemp = document.getElementById("max-min-temp");

    countryName.innerHTML = "Singapore";
    timeState.innerHTML = "15:40 Cloudy";
    currTemp.innerHTML = "27";
    maxMinTemp.innerHTML = "Max: 29.5 Min: 27.0";
})
*/