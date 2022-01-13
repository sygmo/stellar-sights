const astroApiSecret = '6f14831c8a735ba5d7c78419de6f4bd9a270586412858868719ccdb6c3ddf7f6f70d3f443c9b23b35acecacdadd9f74cefc634489ee774930c3150d63b1116b8ffd176c694ec0c8c9288fb86cd4c9fa84c3a7cf78d1f501292fe3eb8113b32dc19816d4f77e35c4977b00a527d9bc829'
const astroApiId = '1ef02872-a5fd-4790-bebe-b572308c9bb6'
const hash = btoa(`${astroApiId}:${astroApiSecret}`);




var requestUrl = new URL("https://api.astronomyapi.com/api/v2/bodies/positions")

var params = {
    longitude: "-84.39733",
    latitude: "33.775867",
    elevation: "50",
    from_date: "2022-01-12",
    to_date: "2022-01-13",
    time: "20:00:00",
  }
 Object.keys(params).forEach(key => requestUrl.searchParams.append(key, params[key]))

function getAstro() {
    fetch( 'https://salty-mountain-68764.herokuapp.com/' + requestUrl ,
{       
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                Authorization: `Basic ${btoa(
                    `${astroApiId}:${astroApiSecret}`
                )}`,
            }
        })
        .then(function (response) {
            console.log("outer response", response);
            if (response.ok) {
                console.log("response",response);
            }
            return response.json()
        })
        .then(function (data) {
            console.log("data",data);
            console.log('body position');
            console.log(data.body);

        });

}


getAstro()

//** start of get weather function
var weatherAPIKEY =  '27bbc4e6b84a47d1b13160933221101' ;

// this parameter will change, depending to input from user 
var weatherLOCNUM = '30.542747,-97.550011' ;

// save a copy of the data received from API call
var weatherDATA;

// Get weather function 
// will grab weather information from API based on weatherLOCNUM
// data responds in current, forecast , location
function getWeather () {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=' + weatherAPIKEY + '&q=' + weatherLOCNUM + '&days=3')
    
      .then(function(response){
        if (response.ok){

          response.json()
            .then(function(data) {
              // save data to global parameter to use in display function
              weatherDATA = data;

              // moon phases, sunrise, susnset by day
              console.log("Moon Phase " + data.forecast.forecastday[0].astro.moon_phase);
              console.log("Moonrise "+ data.forecast.forecastday[0].astro.moonrise);
              console.log("Moonset " + data.forecast.forecastday[0].astro.moonset);
              console.log("Sunrise " + data.forecast.forecastday[0].astro.sunrise);
              console.log("Sunset " + data.forecast.forecastday[0].astro.sunset);
              
              // display weather on results page
              weatherDATAdisplay();
          });
        } else {
          console.log("error");
        }
      })
} 
// end of getWeather

getWeather(); 

// these variables will change depeending on user input/slider
var weatherDAY = 0 ; //present = 0, future = 1,2
var weatherTIME = 14; // militari time 0 - 23

// global parameters used on weather display
var Wind = "Wind: ";
var Humidity = "Humidity: ";
var Rain = "Chance of Rain: ";
var sckyCondition = "SKY Condition: ";
var mph = " mph";
var persentageIcon = "%"
var icon = "http:";
 
var weatherDisplay = document.querySelector('.weather');
var iconEl = document.createElement('img');
var projectRow = document.createElement('ul');
var TemperatureEl = document.createElement('li');
var TemperatureEl2 = document.createElement('li');
var WindEl = document.createElement('li');
var RainEl = document.createElement('li');
var HumidityEl = document.createElement('li');
var skyConditionEl = document.createElement('li');

// function will Display weather on results page
// needs the parameters of date and time to pull data from the weatherDATA
// weatherDAY , weatherTIME
function weatherDATAdisplay (){
  var weatherE1;
 
  // console.log("weatherDATA ");
  // console.log(weatherDATA);

  // display icon
  weatherE1 = weatherDATA.forecast.forecastday[weatherDAY].hour[weatherTIME].condition.icon;
  iconEl.src = icon + weatherE1;

  // display temperature
  weatherE1 = weatherDATA.forecast.forecastday[weatherDAY].hour[weatherTIME].temp_f;
  TemperatureEl.textContent = weatherE1;
  TemperatureEl2.textContent = "Temperature";

  // display wind speed
  weatherE1 = weatherDATA.forecast.forecastday[weatherDAY].hour[weatherTIME].wind_mph;
  WindEl.textContent = Wind + weatherE1 + mph;

  // display humidity
  weatherE1 = weatherDATA.forecast.forecastday[weatherDAY].hour[weatherTIME].humidity;
  HumidityEl.textContent = Humidity + weatherE1 + persentageIcon;

  // display precipitation percentage
  weatherE1 = weatherDATA.forecast.forecastday[weatherDAY].hour[weatherTIME].chance_of_rain;
  RainEl.textContent = Rain + weatherE1 + persentageIcon;

  // display skycondition
  weatherE1 = weatherDATA.forecast.forecastday[weatherDAY].hour[weatherTIME].condition.text;
  skyConditionEl.textContent = sckyCondition + weatherE1;

  // append to list
  projectRow.append(
      TemperatureEl,
      TemperatureEl2,
      WindEl,
      HumidityEl,
      RainEl,
      skyConditionEl);

  // append list to the results page
  weatherDisplay.append(iconEl,projectRow);
  weathersetAtributes();
}
// end of weatherDATAdisplay

function weathersetAtributes(){
  //s set weather aatributes
    iconEl.setAttribute("style", "width:100% ");
    TemperatureEl.setAttribute("style", "font-size: 40px; font-weight: bold");
    TemperatureEl2.setAttribute("style", "font-size: 18px; font-weight: bold");
    projectRow.setAttribute("style", "font-size: 12px");
}
// end of weather atributes


    //pull from MapBox API for latitude and longitude
const geocode = async()=>{
    const response = await fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY3B0cGxhbmV0IiwiYSI6ImNreWFiNXA5OTAzcXkydnA5NWs1NXY1OWwifQ.jMJiAvDc9I0KPpUfg18U8g')
    if(response.status === 200){
      const data = await response.json()
      console.log(data.features[0].center[0])
    }
    
  }
  geocode()
  
  // let address
  // const geocode = async(address)=>{
  //   const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiY3B0cGxhbmV0IiwiYSI6ImNreWFiNXA5OTAzcXkydnA5NWs1NXY1OWwifQ.jMJiAvDc9I0KPpUfg18U8g`)
  //   if(response.status === 200){
  //     const data = await response.json()
  //     console.log(data.features[0].center[0])
  //   }
    
  // }
  // geocode(address)
  
  let locationSaved = []
  
  const createdLocation = (input)=>{
      locationSaved.push(input)
      saveLocation()
  }
  
  
  const saveLocation = ()=>{
    localStorage.setItem('location', JSON.stringify(locationSaved))
  }
  
  
  const loadLocation = ()=>{
    const locationJSON = locationStorage.getItem('locationSaved')
  
    try{
      locationSaved = locationJSON ? JSON.parse(locationJSON) : []
    }catch (error){
      locationSaved = []
    }
  }
  
  
  const generateSavedLocation = (location)=>{
    const locationEl = document.createElement('label')
  
    const locationText = document.createElement('span')
    locationText.textContent = location.textContent
    locationEl.appendChild(locationText)
 
  }


