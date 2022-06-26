//=====================================================================================================================================
// for the right side app
//=====================================================================================================================================
function getWeatherData(){
    key = '5b26803c5a88482f99622916222306';
    const userCountry = document.getElementById("countryInput").value;
    console.log(userCountry); 
    const countryName = `${userCountry}`;
    // const countryName = "Singapore";
    const getCountryData = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${countryName}&days=1&aqi=no&alerts=no`;
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

    var currentTimeRight = new Date(countryTime).toLocaleTimeString('it-IT').slice(0,5);
    // Right side app of values to be changed
    document.querySelector(".countryNameRight").innerHTML = countryName;
    document.querySelector(".countryTimeRight").innerHTML = currentTimeRight;
    document.querySelector(".countryTempRight").innerHTML = `${countryTemp} °`;
    document.querySelector(".countryConditionRight").innerHTML = countryCondition;
    document.querySelector(".countryMinTempRight").innerHTML = ` Min: ${countryMinTemp} °`;
    document.querySelector(".countryMaxTempRight").innerHTML = `Max: ${countryMaxTemp} °`;
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
    const getCountryData = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${countryName}&days=1&aqi=no&alerts=no`;
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
    
    // changing the local time format to requirements
    var currentTimeLeft = new Date(countryTime).toString();
    /*// Right side app of values to be changed
    document.querySelector(".countryNameRight").innerHTML = countryName;
    document.querySelector(".countryTimeRight").innerHTML = countryTime;
    document.querySelector(".countryTempRight").innerHTML = countryTemp;
    document.querySelector(".countryConditionRight").innerHTML = countryCondition;
    document.querySelector(".countryMinTempRight").innerHTML = ` Min: ${countryMinTemp}`;
    document.querySelector(".countryMaxTempRight").innerHTML = `Max: ${countryMaxTemp} `;*/
    // Left side app of values to be changed, change to add this when country card is clicked instead.
    document.querySelector(".countryNameLeft").innerHTML = countryName;
    // document.querySelector(".countryTimeLeft").innerHTML = countryTime.slice(0,10);
    // slice to remove unwanted string
    document.querySelector(".countryTimeLeft").innerHTML = currentTimeLeft.slice(4,16);
    document.querySelector(".countryTempLeft").innerHTML = `${countryTemp} °`;
    document.querySelector(".countryConditionLeft").innerHTML = countryCondition;
    document.querySelector(".countryMinTempLeft").innerHTML = `${countryMinTemp} °`;
    document.querySelector(".countryMaxTempLeft").innerHTML = `${countryMaxTemp} °`;
    document.querySelector(".countryPressureLeft").innerHTML = `${countryPressure} hPa`;
    document.querySelector(".countryUvLeft").innerHTML = countryUv;
    document.querySelector(".countryFeelsLikeTempLeft").innerHTML = `${countryFeelsLike} °`;
    
    // Test to swap image
    const weatherImage = data.current.condition.icon;
    console.log(weatherImage);
    document.querySelector(".imageForWeather").innerHTML = `<img src='${weatherImage}'>`;

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

// Function to create a new card
const creatingWeatherCard = document.querySelector('.weatherCard2');
function createWeatherCard(){
    let newWeatherCard = `
    <div class="col-12">
    <div class="card weatherCard">
        <div class="card-body row">
            <div class="col-5">
                <a href="city.html" onclick="getCountryDetail();return false"><h5 class="card-title countryNameRight"></h5></a>
                <p class="card-text countryTimeRight"><br></p>         
                <p class="countryConditionRight"></p>          
            </div>
            <div class="col-7">
                <h5 class="countryTempRight"></h5>
                <p class="card-text"><span class="countryMaxTempRight""></span><span class="countryMinTempRight"></span></p>                   
            </div>
        </div>
    </div>
</div>`;
    creatingWeatherCard.innerHTML += newWeatherCard;
}