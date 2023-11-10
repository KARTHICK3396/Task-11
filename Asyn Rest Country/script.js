var API = "https://restcountries.com/v3.1/all";


var fet = fetch(API)
  .then((response) => response.json())
  .then((data) => {
    
    data.map((value) => {
      var spreadOperator = {
        ...value,
        name: value.name.common,
        flag: value.flags.png,
        code: value.cioc,
        capital: value.capital,
        region: value.region,
        latitude: value.latlng[0],
        longitude: value.latlng[1]

      };
      createcountry(spreadOperator);
      
      
     
    })
  })
  
  
   
function createcountry({ name, flag, code, capital, region,latitude,longitude }) {
   
  document.body.innerHTML += 
  ` <div class="container">
    <div class="card"  >
    <h1 id="title" class="text-center">${name}</h1>
    <img src="${flag}" class="flag" alt="${name}'Flag image">
 
  <div class="card-body car" >
  <p id=capital><span>Captial :</span> ${capital}</p>
  <p id=region><span>Region :</span> ${region}</p>
  <p id=code><span>Country Code :</span>${code}</p>
  <a href="#" class="btn btn-primary" onclick=(block(${latitude},${longitude},${name})) >Click for Weather</a>
 <div id=${name}>   </div>
  
 
  </div>
</div>
</div>
`
}



function block(lat,lng,name){

  var WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=df6fdc4da651aa8d45d4c0dcb67ce088`
   
  console.log(name)
 fetch(WAPI)
 .then((response) => response.json())
 .then((data)=> {

     alert(`
               For ${name.id}  
     Current Humidity is ${data.main.humidity}
     Current Pressure is ${data.main.pressure}
     Current Temperature is ${data.main.temp}`)
    })
}
  
document.addEventListener("click",(event) => event.preventDefault())