// const applicationSecret = '6f14831c8a735ba5d7c78419de6f4bd9a270586412858868719ccdb6c3ddf7f6f70d3f443c9b23b35acecacdadd9f74cefc634489ee774930c3150d63b1116b8ffd176c694ec0c8c9288fb86cd4c9fa84c3a7cf78d1f501292fe3eb8113b32dc19816d4f77e35c4977b00a527d9bc829'
// const applicationId = '1ef02872-a5fd-4790-bebe-b572308c9bb6'
// const hash = btoa(`${applicationId}:${applicationSecret}`);

// const getAstro = async() =>{
//     const response = await fetch('https://salty-mountain-68764.herokuapp.com/https://api.astronomyapi.com/api/v2/bodies', {
//     headers: new Headers(
//       {
//         "X-Requested-With": "XMLHttpRequest",
//         Authorization: `Basic ${hash}`
//     })
// })
// if(response.status===200){
//         const data = await response.json()
//         console.log(data)
// }
// }

// getAstro()

//** start of get weather function
var weatherAPIKEY =  '27bbc4e6b84a47d1b13160933221101' ;
var zipcodeNUM = '78634' ;

// Get weather function 
// will grab weather information from API 
// data responds in current, forecast , location

console.log("start Get Weather funtion");

function getWeather () {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=' + weatherAPIKEY + '&q=' + zipcodeNUM + '&days=3')
    
      .then(function(response){
        if (response.ok){

          console.log("response ");
          console.log(response);

          response.json()
            .then(function(data) {

              console.log("data ");
              console.log(data);

              console.log("data current conditions ");
              console.log(data.current.condition);
              console.log("day 1 ");
              console.log(data.forecast.forecastday[0]);
              console.log("Moon Phase " + data.forecast.forecastday[0].astro.moon_phase);
              console.log("Moonrise "+ data.forecast.forecastday[0].astro.moonrise);
              console.log("Moonset " + data.forecast.forecastday[0].astro.moonset);
              console.log("Sunrise " + data.forecast.forecastday[0].astro.sunrise);
              console.log("Sunset " + data.forecast.forecastday[0].astro.sunset);
              console.log("humidity " + data.forecast.forecastday[0].day.avghumidity);
              console.log("chances of rain " + data.forecast.forecastday[0].day.daily_chance_of_rain);
              console.log("By the hour conditions ");
              console.log("Chance of rain " + data.forecast.forecastday[0].hour[0].chance_of_rain);
              console.log("Cloud " + data.forecast.forecastday[0].hour[0].cloud);
              console.log("Sky condition " + data.forecast.forecastday[0].hour[0].condition.text);              // console.log("day 2 ");
              // console.log(data.forecast.forecastday[1]);
              // console.log("day 3 ");
              // console.log(data.forecast.forecastday[2]);
          });
        } else {
          console.log("error");
        }
      })
}

getWeather(); 

