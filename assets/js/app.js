
// //////////////////
// //variables changed in geocode function to be used in astro api and weather api
let latitude
let longitude
let resultPage = './results.html'
// //////////////////

let address
let inputAddress = document.querySelector('#location-input')
inputAddress.addEventListener('submit', (e)=>{
   e.preventDefault()
   if(e.target.elements[0].value !== ''){
   console.log(e.target.elements[0].value)
   address = e.target.elements[0].value
   e.target.elements[0].value = ''
   geocode(address)
   createdLocation(address)
   generateSavedLocation()
   }
  
   

 })
  
   const geocode = async(address)=>{
     const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiY3B0cGxhbmV0IiwiYSI6ImNreWFiNXA5OTAzcXkydnA5NWs1NXY1OWwifQ.jMJiAvDc9I0KPpUfg18U8g`)
     if(response.status === 200){
       const data = await response.json()
       console.log(data)
       console.log(data.features[0].center[0])
       console.log(data.features[0].center[1])
       longitude = data.features[0].center[0]
       latitude = data.features[0].center[1]
      

     }
     document.location = `${resultPage}?latitude=${latitude}&longitude=${longitude}`
     
    
   }
  
  
   let locationSaved = []
  
   const createdLocation = (input)=>{
     if(!locationSaved.includes(input)){
       loadLocation()
       if(locationSaved.length === 5){
         locationSaved.shift()
       }
       locationSaved.push(input)
       saveLocation()
     } 
   }
  
  
   const saveLocation = ()=>{
     localStorage.setItem('location', JSON.stringify(locationSaved))
   }
  
  
   const loadLocation = ()=>{
     const locationJSON = localStorage.getItem('location')
     try{
       locationSaved = locationJSON ? JSON.parse(locationJSON) : []
     }catch (error){
       locationSaved = []
     }
   }
  
   const collection = document.querySelector('.collection')
  //  const collectionItem = document.querySelectorAll('.collection-item')
  //  collectionItem.forEach((item)=>{
  //    item.addEventListener('click', (e)=>{
  //      console.log(e.target.innerText)
  //    })
  //  })


   const generateSavedLocation = ()=>{
     loadLocation()
    
     collection.innerHTML = ''
     if(locationSaved.length > 0){
       locationSaved.forEach((location)=>{
        
         const locationEl = document.createElement('a')
         locationEl.setAttribute('href', '#!')
         locationEl.setAttribute('class', 'collection-item')
        
         locationEl.textContent = location
        
         locationEl.addEventListener('click', (e)=>{
             e.preventDefault()
             console.log(e.target.innerText)
             address = e.target.innerText
             e.target.innerText = ''
             geocode(address)
             createdLocation(address)
             generateSavedLocation()
         })
         collection.appendChild(locationEl)
       })
     }
   }
   generateSavedLocation()


  
