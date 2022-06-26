(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//=====================================================================================================================================
// for the right side app
//=====================================================================================================================================
function getWeatherData(){
    key = '5b26803c5a88482f99622916222306';
    const userCountry = document.getElementById("countryInput").value;
    console.log(userCountry); 
    const countryName = `${userCountry}`;
    // const countryName = "Singapore";
    const getCountryData = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${countryName}&days=1&aqi=no&alerts=no`;
    fetch(getCountryData)
    .then((response) => response.json())
    .then((data) => {
        this.showCountryData(data)
    });
}
function showCountryData(data){
    const countryName = data.location.name;
    const countryTime = data.location.localtime;
    const countryTemp = data.current.temp_c;
    const countryCondition = data.current.condition.text;
    const countryMaxTemp = data.forecast.forecastday[0].day.maxtemp_c;
    const countryMinTemp = data.forecast.forecastday[0].day.mintemp_c;
    // const countryPressure = data.current.pressure_mb;
    // const countryUv = data.current.uv;
    // const countryFeelsLike = data.current.feelslike_c;
    console.log(countryName, countryTime, countryTemp, countryCondition, countryMaxTemp, countryMinTemp);

    // Right side app of values to be changed
    document.querySelector(".countryNameRight").innerHTML = countryName;
    document.querySelector(".countryTimeRight").innerHTML = countryTime;
    document.querySelector(".countryTempRight").innerHTML = `${countryTemp} ﾂｰ`;
    document.querySelector(".countryConditionRight").innerHTML = countryCondition;
    document.querySelector(".countryMinTempRight").innerHTML = ` Min: ${countryMinTemp} ﾂｰ`;
    document.querySelector(".countryMaxTempRight").innerHTML = `Max: ${countryMaxTemp} ﾂｰ`;
    /*// Left side app of values to be changed, change to add this when country card is clicked instead.
    document.querySelector(".countryNameLeft").innerHTML = countryName;
    document.querySelector(".countryTimeLeft").innerHTML = countryTime;
    document.querySelector(".countryTempLeft").innerHTML = countryTemp;
    document.querySelector(".countryConditionLeft").innerHTML = countryCondition;
    document.querySelector(".countryMinTempLeft").innerHTML = countryMinTemp;
    document.querySelector(".countryMaxTempLeft").innerHTML = countryMaxTemp;
    document.querySelector(".countryPressureLeft").innerHTML = countryPressure;
    document.querySelector(".countryUvLeft").innerHTML = countryUv;
    document.querySelector(".countryFeelsLikeTempLeft").innerHTML = countryFeelsLike;*/

}
//=============================================================================================================================
// for the left side weather app
//=============================================================================================================================
function getCountryDetail(){
    key = '5b26803c5a88482f99622916222306';
    const userCountry = document.getElementById("countryInput").value;
    console.log(userCountry); 
    const countryName = `${userCountry}`;
    // const countryName = "Singapore";
    const getCountryData = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${countryName}&days=1&aqi=no&alerts=no`;
    fetch(getCountryData)
    .then((response) => response.json())
    .then((data) => {
        this.showCountryDetail(data)
    })
}
function showCountryDetail(data){
    const countryName = data.location.name;
    const countryTime = data.location.localtime;
    const countryTemp = data.current.temp_c;
    const countryCondition = data.current.condition.text;
    const countryMaxTemp = data.forecast.forecastday[0].day.maxtemp_c;
    const countryMinTemp = data.forecast.forecastday[0].day.mintemp_c;
    const countryPressure = data.current.pressure_mb;
    const countryUv = data.current.uv;
    const countryFeelsLike = data.current.feelslike_c;
    console.log(countryName, countryTime, countryTemp, countryCondition, countryMaxTemp, countryMinTemp);

    /*// Right side app of values to be changed
    document.querySelector(".countryNameRight").innerHTML = countryName;
    document.querySelector(".countryTimeRight").innerHTML = countryTime;
    document.querySelector(".countryTempRight").innerHTML = countryTemp;
    document.querySelector(".countryConditionRight").innerHTML = countryCondition;
    document.querySelector(".countryMinTempRight").innerHTML = ` Min: ${countryMinTemp}`;
    document.querySelector(".countryMaxTempRight").innerHTML = `Max: ${countryMaxTemp} `;*/
    // Left side app of values to be changed, change to add this when country card is clicked instead.
    document.querySelector(".countryNameLeft").innerHTML = countryName;
    document.querySelector(".countryTimeLeft").innerHTML = countryTime;
    document.querySelector(".countryTempLeft").innerHTML = `${countryTemp} ﾂｰ`;
    document.querySelector(".countryConditionLeft").innerHTML = countryCondition;
    document.querySelector(".countryMinTempLeft").innerHTML = `${countryMinTemp} ﾂｰ`;
    document.querySelector(".countryMaxTempLeft").innerHTML = `${countryMaxTemp} ﾂｰ`;
    document.querySelector(".countryPressureLeft").innerHTML = countryPressure;
    document.querySelector(".countryUvLeft").innerHTML = countryUv;
    document.querySelector(".countryFeelsLikeTempLeft").innerHTML = `${countryFeelsLike} ﾂｰ`;
    
    // For the UV Information, have to create logical statement to determine level.
    const countryUvInfo = document.querySelector(".countryUvInfoLeft");
    let uvInfo = "";
    if (countryUv < 3){
        uvInfo = 'Low';
        }
    else if (countryUv < 6){
        uvInfo = 'Moderate';
    }
    else if (countryUv < 8){
        uvInfo = 'High';
    }
    else if (countryUv < 11){
        uvInfo = 'Very High';
    }
    else{
        uvInfo = 'Extreme';
    }
    countryUvInfo.innerHTML = uvInfo;
}
},{}]},{},[1]);
