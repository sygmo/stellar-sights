let queryString = document.location.search
let queryStringSplit = queryString.split('&')
let latitude = queryStringSplit[0].split('=')
let longitude = queryStringSplit[1].split('=')

const astroApiSecret = '6f14831c8a735ba5d7c78419de6f4bd9a270586412858868719ccdb6c3ddf7f6f70d3f443c9b23b35acecacdadd9f74cefc634489ee774930c3150d63b1116b8ffd176c694ec0c8c9288fb86cd4c9fa84c3a7cf78d1f501292fe3eb8113b32dc19816d4f77e35c4977b00a527d9bc829'
const astroApiId = '1ef02872-a5fd-4790-bebe-b572308c9bb6'
const hash = btoa(`${astroApiId}:${astroApiSecret}`);

let startDate = moment().format("YYYY-MM-DD, 00:00:00")
let endDate = moment().add(3, 'days').format("YYYY-MM-DD, 23:59:59")
let fromDate = moment(startDate).format('YYYY-MM-DD')
let titleDate = moment(startDate).format('dddd, MMM Do YYYY')
let toDate = moment(endDate).format("YYYY-MM-DD")
let time = moment(startDate).format('HH:mm:ss')
let titleTime = moment(startDate).format('LT')
document.querySelector('#currentDay').textContent = `${titleDate}, ${titleTime}`

let weathDate = 0
let weathTime = moment(startDate).format('H')

let planetInfo = [[],[],[],[],[],[],[],[],[],[],[]] 
let pics = ['assets/img/planets/Sun.png','assets/img/planets/Moon.png','assets/img/planets/Mercury.png','assets/img/planets/Venus.png','assets/img/planets/Mercury.png','assets/img/planets/Mars.png','assets/img/planets/Jupiter.png','assets/img/planets/Saturn.png','assets/img/planets/Neptune.png','assets/img/planets/Uranus.png','assets/img/planets/Pluto.png']


let getPlanetInfo = async()=>{
var requestUrl = new URL("https://api.astronomyapi.com/api/v2/bodies/positions")

var params = {
    longitude: longitude[1],
    latitude: latitude[1],
    elevation: "50",
    from_date: fromDate,
    to_date: toDate,
    time: time,
  }
 Object.keys(params).forEach(key => requestUrl.searchParams.append(key, params[key]))
 const planets = ['The Sun', 'The Moon', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus', 'Pluto']
 var planetCounter = 0;
 
const response = await fetch( 'https://salty-mountain-68764.herokuapp.com/' + requestUrl ,
{       
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                Authorization: `Basic ${btoa(
                    `${astroApiId}:${astroApiSecret}`
                )}`,
            }
        })
        if(response.status === 200){
          const data = await response.json()

          var yContainer =  {
            solDummyY: data.data.table.rows[0].cells[0].position.horizonal.azimuth.degrees,
            lunaY: data.data.table.rows[1].cells[0].position.horizonal.azimuth.degrees,
            mercuryY: data.data.table.rows[2].cells[0].position.horizonal.azimuth.degrees,
            venusY: data.data.table.rows[3].cells[0].position.horizonal.azimuth.degrees,
            earthDummyY: data.data.table.rows[4].cells[0].position.horizonal.azimuth.degrees,
            marsY: data.data.table.rows[5].cells[0].position.horizonal.azimuth.degrees,
            jupiterY: data.data.table.rows[6].cells[0].position.horizonal.azimuth.degrees,
            saturnY: data.data.table.rows[7].cells[0].position.horizonal.azimuth.degrees,
            neptuneY: data.data.table.rows[8].cells[0].position.horizonal.azimuth.degrees,
            uranusY: data.data.table.rows[9].cells[0].position.horizonal.azimuth.degrees,
            plutoY: data.data.table.rows[10].cells[0].position.horizonal.azimuth.degrees,
       }
       var plutoY = data.data.table.rows[10].cells[0].position.horizonal.azimuth.degrees
       var uranusY = data.data.table.rows[9].cells[0].position.horizonal.azimuth.degrees
   
    //    var yKeys = Object.keys(yContainer)
       var yValues = Object.values(yContainer)
       var xContainer = {
           solDummyX: data.data.table.rows[0].cells[0].position.horizonal.altitude.degrees,
           lunaX: data.data.table.rows[1].cells[0].position.horizonal.altitude.degrees,
           mercuryX: data.data.table.rows[2].cells[0].position.horizonal.altitude.degrees,
           venusX: data.data.table.rows[3].cells[0].position.horizonal.altitude.degrees,
           earthDummyX: data.data.table.rows[4].cells[0].position.horizonal.altitude.degrees,
           marsX: data.data.table.rows[5].cells[0].position.horizonal.altitude.degrees,
           jupiterX: data.data.table.rows[6].cells[0].position.horizonal.altitude.degrees,
           saturnX: data.data.table.rows[7].cells[0].position.horizonal.altitude.degrees,
           neptuneX: data.data.table.rows[8].cells[0].position.horizonal.altitude.degrees,
           uranusX: data.data.table.rows[9].cells[0].position.horizonal.altitude.degrees,
           plutoX: data.data.table.rows[10].cells[0].position.horizonal.altitude.degrees
       }
    //    var xKeys = Object.keys(xContainer)
       var xValues = Object.values(xContainer)
       var riseContainer = {
           solDummyRise: data.data.table.rows[0].cells[0].position.equatorial.rightAscension.hours,
           lunaRise: data.data.table.rows[1].cells[0].position.equatorial.rightAscension.hours,
           mercuryRise: data.data.table.rows[2].cells[0].position.equatorial.rightAscension.hours,
           venusRise: data.data.table.rows[3].cells[0].position.equatorial.rightAscension.hours,
           earthDummyRise: data.data.table.rows[4].cells[0].position.equatorial.rightAscension.hours,
           marsRise: data.data.table.rows[5].cells[0].position.equatorial.rightAscension.hours,
           jupiterRise: data.data.table.rows[6].cells[0].position.equatorial.rightAscension.hours,
           saturnRise: data.data.table.rows[7].cells[0].position.equatorial.rightAscension.hours,
           neptuneRise: data.data.table.rows[8].cells[0].position.equatorial.rightAscension.hours,
           uranusRise: data.data.table.rows[9].cells[0].position.equatorial.rightAscension.hours,
           plutoRise: data.data.table.rows[10].cells[0].position.equatorial.rightAscension.hours
       }
    //    var rKeys = Object.keys(riseContainer)
       var rValues = Object.values(riseContainer)
       var magnitudeContainer = {
           solDummyM: data.data.table.rows[0].cells[0].extraInfo.magnitude,
           lunaM: data.data.table.rows[1].cells[0].extraInfo.magnitude,
           mercuryM: data.data.table.rows[2].cells[0].extraInfo.magnitude,
           venusM: data.data.table.rows[3].cells[0].extraInfo.magnitude,
           earthDummyM: data.data.table.rows[4].cells[0].extraInfo.magnitude,
           marsM: data.data.table.rows[5].cells[0].extraInfo.magnitude,
           jupiterM: data.data.table.rows[6].cells[0].extraInfo.magnitude,
           saturnM: data.data.table.rows[7].cells[0].extraInfo.magnitude,
           neptuneM: data.data.table.rows[8].cells[0].extraInfo.magnitude,
           uranusM: data.data.table.rows[9].cells[0].extraInfo.magnitude,
           plutoM: data.data.table.rows[10].cells[0].extraInfo.magnitude
       }
       var mValues = Object.values(magnitudeContainer)

 
    planetInfo = [[],[],[],[],[],[],[],[],[],[],[]] 
let planetInfoXValue = (xValue, statement)=>{
    planetInfo[planetCounter].push(planets[planetCounter])
    planetInfo[planetCounter].push(statement)
    planetInfo[planetCounter].push(xValue)
    planetCounter++
}
let planetInfoYValue = (yValue, statement)=>{
    planetInfo[planetCounter].push(statement)
    planetInfo[planetCounter].push(yValue)
    planetCounter++
}
let planetInfoMValue = (mValue, statement)=>{
    planetInfo[planetCounter].push(statement)
    planetInfo[planetCounter].push(mValue)
    planetCounter++
}


       xValues.forEach((xValue)=>{
            if(planetCounter !== 4){
                    if (xValue < 0){
                        statement = 'Position: below the horizon'
                        planetInfoXValue(statement, '')
               
                    }else if (xValue < 30){
                        statement = 'Position: low in the sky'
                        planetInfoXValue(statement, '')
                
                    }else if (xValue < 60){
                        statement = 'Position: around 45 degrees in the sky.'
                        planetInfoXValue(statement, '')
                
                    }else if (xValue <= 89){
                        statement = 'Position: very high in the sky'
                        planetInfoXValue(statement, '')
                    }else if (xValue > 90){
                        statement = 'Position: below the horizon.'
                        planetInfoXValue(statement, '')
                
                    }else{
                        statement = 'ERROR: X Coordinates are not functioning.'
                        planetInfoXValue(statement, '')
                    }
            }else{
                planetCounter++
                }
       })
       
        planetCounter = 0
        yValues.forEach((yValue)=> {
           if(planetCounter !== 4){
                if (yValue < 30){
                statement = 'Direction: North'
                planetInfoYValue(statement, '')        
            
                }else if (yValue < 60){
                    statement = 'Direction: North-East'
                planetInfoYValue(statement, '')        
                    
                }else if (yValue < 120){
                    statement = 'Direction: East'
                planetInfoYValue(statement, '')        
                    
                }else if (yValue < 150){
                    statement = 'Direction: South-East'
                    planetInfoYValue(statement, '')        
                   
                }else if (yValue < 210){
                    statement = 'Direction: South'
                    planetInfoYValue(statement, '')        

                }else if (yValue < 240){
                    statement = 'Direction: South-West'
                    planetInfoYValue(statement, '')        

                }else if (yValue < 300){
                    statement = 'Direction: West'
                    planetInfoYValue(statement, '')        

                }else if (yValue < 330){
                    statement = 'Direction: North-West'
                    planetInfoYValue(statement, '')        

                }else if (yValue <= 359){
                    statement = 'Direction: North'
                    planetInfoYValue(statement, '')        

                }else{
                    statement = 'ERROR: Y Coordinates are not functioning'
                    planetInfoYValue(statement, '')        

                }

           }else{
             planetCounter++
                }
                                                
        })
       planetCounter = 0
       mValues.forEach((mValue)=> {
            if(planetCounter !== 4){
                if (mValue < -13){
                    statement = "Brightness: Please do not view the sun without specialized equipment."
                    planetInfoMValue(statement, '')

                }else if (mValue < -5){
                    statement = 'Brightness: Very Bright'
                    planetInfoMValue(statement, '')

                }else if (mValue< 0){
                    statement = 'Brightness: Bright'
                    planetInfoMValue(statement, '')

                }else if (mValue < 3){
                    statement = 'Brightness: Visible, Urban Viewable'
                    planetInfoMValue(statement, '')

                }else if (mValue < 6){
                    statement = 'Brightness: Barely visible, Rural Viewable'
                    planetInfoMValue(statement, '')

                }else if (mValue < 9.5){
                    statement = 'Brightness: Faint, Viewable with Binoculars'
                    planetInfoMValue(statement, '')

                }else if (mValue < 14){
                    statement = 'Brightness: Very Faint, Viewable with 12 inch Telescope'
                    planetInfoMValue(statement, '')

                }else if (mValue < 20){
                    statement = 'Brightness: Extremely Faint, Viewable only with 200 inch Telescope'
                    planetInfoMValue(statement, '')

                }else if (mValue < 30){
                    statement = "You don't have the money to do this, and if you do, get off our app NASA, smh"
                    planetInfoMValue(statement, '')

                }else{
                    statement = 'ERROR: Magnitude not functioning'
                    planetInfoMValue(statement, '')

                    }
            }else{
             planetCounter++
                }
            
        })

        planetInfo.splice(4,1)
        
         var availableBodiesDisplay = document.querySelector('.available-bodies');
         availableBodiesDisplay.innerHTML = ''
         let count = 0
                
                planetInfo.forEach((planet)=>{

                    var planetCardEl = document.createElement('div');
                    planetCardEl.setAttribute('class', 'card horizontal');

                    var planetImageDivEl = document.createElement('div');
                    planetImageDivEl.setAttribute('class', 'card-image valign-wrapper');

                    var planetImageEl = document.createElement('img');
                    planetImageEl.setAttribute('src', `${pics[count]}`);

                    count++

                    var planetContentEl = document.createElement('div');
                    planetContentEl.setAttribute('class', 'card-content');

                    var planetHeader = document.createElement('h4');
                  
                    planetHeader.textContent = planet[0]
                
                    var planetContentUl = document.createElement('ul');

                    let titleOfPlanet = planet.shift()
                    planet.forEach((listInfo)=>{
                        var planetContentLi = document.createElement('li');
                        planetContentLi.innerText = listInfo;
                        planetContentUl.appendChild(planetContentLi)
                    })
                    planet.unshift(titleOfPlanet)

                    planetImageDivEl.append(planetImageEl);
                    planetContentEl.append(planetHeader, planetContentUl);
                    planetCardEl.append(planetImageDivEl, planetContentEl);
                    availableBodiesDisplay.append(planetCardEl);
                    
                })
      
        }
}

getPlanetInfo()

// random lat and long to use in the location
const generateWeather =()=>{
//** start of get weather function
var weatherAPIKEY =  '27bbc4e6b84a47d1b13160933221101' ;

// this parameter will change, depending to input from user 
// var weatherLOCNUM = '30.542747,-97.550011' ;
var weatherLOCNUM;

// save a copy of the data received from API call
var weatherDATA;

// function will add latitude and longitude parameters in one single string
function getWeatherParam (){
  var lat = latitude[1].toString();
  var lon = longitude[1].toString();

  weatherLOCNUM = lat.concat(",",lon);
}

// Get weather function 
// will grab weather information from API based on weatherLOCNUM
// data responds in current, forecast , location
function getWeather () {
  // get latitude and longitude in one string
  getWeatherParam();

  //start fetch
    fetch('http://api.weatherapi.com/v1/forecast.json?key=' + weatherAPIKEY + '&q=' + weatherLOCNUM + '&days=3')
    
      .then(function(response){
        if (response.ok){

          response.json()
            .then(function(data) {
              // save data to global parameter to use in display function
              weatherDATA = data;

              // moon phases, sunrise, susnset by day
            //   console.log("Moon Phase " + data.forecast.forecastday[0].astro.moon_phase);
            //   console.log("Moonrise time "+ data.forecast.forecastday[0].astro.moonrise);
            //   console.log("Moonset time " + data.forecast.forecastday[0].astro.moonset);
            //   console.log("Sunrise time " + data.forecast.forecastday[0].astro.sunrise);
            //   console.log("Sunset time " + data.forecast.forecastday[0].astro.sunset);
              
              // display weather on results page
              weatherDATAdisplay();
          });
        } else {
        //   console.log("error");
        }
      })
} 
// end of getWeather

getWeather(); 


// these variables will change depeending on user input/slider
var weatherDAY = weathDate; //present = 0, one day in future = 1, two day in future =2
var weatherTIME = weathTime; // military time 0 - 23

// global parameters used on weather display
var Wind = "Wind: ";
var Humidity = "Humidity: ";
var Rain = "Chance of Rain: ";
var sckyCondition = "SKY Condition: ";
var mph = " mph";
var persentageIcon = "%";
var icon = "http:";

var weatherDisplay = document.querySelector('.weather');
weatherDisplay.innerHTML = ''
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
 
//   console.log("weatherDATA ");
//   console.log(weatherDATA);

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

  populateBanner(weatherE1); // sends weather conditions to results banner

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
  // set weather atributes
    iconEl.setAttribute("style", "width:100% ");
    TemperatureEl.setAttribute("style", "font-size: 40px; font-weight: bold");
    TemperatureEl2.setAttribute("style", "font-size: 18px; font-weight: bold");
    projectRow.setAttribute("style", "font-size: 12px");
    weatherDisplay.setAttribute("style", "background-color: #36e5eb");
}
// end of weather atributes

// banner loudly declares if planets are visible or not, depending on sky conditions
function populateBanner(conditions) {
  var conditions = conditions.toLowerCase();
  var bannerHeader = document.querySelector(".bannerText");
//   console.log("weather conditions: " + conditions);

  if (conditions == "sunny" || conditions == "clear") {
    // display "all-clear" banner
    bannerHeader.textContent = "All clear! The following planets are visible:";
  } else if (conditions.includes("patchy") || conditions.includes("partly")) {
    // display "possible" banner
    bannerHeader.textContent = "Sky conditions are spotty, but the following planets may be visible:";
  } else {
    // display "no visibility banner"
    bannerHeader.textContent = "Sky conditions are poor. The following planets cannot be seen:"
  }
}
}


const timeChange = document.querySelector('#timeChange')
timeChange.addEventListener('input',(e)=>{
  
  time = moment(fromDate).add(e.target.value, 'hours').format('HH:mm:ss')
  titleTime = moment(fromDate).add(e.target.value, 'hours').format('LT')
  weathTime = moment(fromDate).add(e.target.value, 'hours').format('H')

  if(e.target.value === '24'){
    startDate= moment().add(1, 'days').format("YYYY-MM-DD, 00:00:00")
    weathDate = 1
  }
  if(e.target.value === '48'){
    startDate= moment().add(2, 'days').format("YYYY-MM-DD, 00:00:00")
    weathDate = 2
  }

  if(e.target.value ==='47'){
    startDate = moment().add(1, 'day').format("YYYY-MM-DD, 00:00:00")
    weathDate = 1
  }
  if(e.target.value ==='23'){
    startDate = moment().format("YYYY-MM-DD, 00:00:00")
    weathDate = 0
  }

  if(e.target.value === '72'){
    startDate= moment().add(3, 'days').format("YYYY-MM-DD, 00:00:00")
  }


  titleDate = moment(startDate).format('dddd, MMM Do YYYY')
  document.querySelector('#currentDay').textContent = `${titleDate}, ${titleTime}`

  
  getPlanetInfo()
  generateWeather()
})
generateWeather()



//js slider code
// var slider = document.getElementById('test-slider');
//   noUiSlider.create(slider, {
//    start: 0,
//    connect: true,
//    step: 1,
//    orientation: 'horizontal', // 'horizontal' or 'vertical'
//    range: {
//      'min': 0,
//      'max': 72
//    },
//    format:{
//     from: function(value) {
//             return parseInt(value);
//         },
//     to: function(value) {
//             return parseInt(value);
//         }
//     }
//  });