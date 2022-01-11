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

// var weatherAPIKEY =  '27bbc4e6b84a47d1b13160933221101' ;

// Get weather function 
// will grab weather information from API 

console.log("start");
//const getWeather () {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=27bbc4e6b84a47d1b13160933221101&q=07112&days=7')
    
      .then(function(response){
        if (response.ok){
          console.log(response);
          response.json()
            .then(function(data) {
              console.log(data);
          });
        } else {
          console.log("error");
        }
      })

// if(response.status===200){
//         const data = await response.json()
//         console.log(data)
// }

//}
