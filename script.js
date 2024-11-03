
let tempValue = document.body.querySelector(".weather_representation h1")
let humidityValue = document.body.querySelector(".humidity span");
let windSpeedValue = document.body.querySelector(".Wind_speed span");
let searchButton = document.body.querySelector(".search_sec button");
let showCityName = document.body.querySelector(".city_name");
let weatherPicture = document.body.querySelector(".weather_logo")
let searchBar = document.body.querySelector(".search_bar");  





function tempeartureShowing(){

    let cityName = document.body.querySelector(".search_bar").value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a6cc4b3c080eb911f6a5d6db4c8bffaf&units=metric`;

         fetch(url).then((response)=>{

         return response.json()

         }).then((data)=>{

            console.log(data);
            

         let temperature = data.main.temp;
         let humidity = data.main.humidity;
         let windSpeed = data.wind.speed ;
         let city=data.name;


         tempValue.textContent = `${temperature}°C`;

         showCityName.textContent = city
         humidityValue.textContent = `${humidity}%`;

         windSpeedValue.textContent = `${windSpeed} km/h`

         document.body.querySelector(".search_bar").value = "";


         if(data.weather[0].main=="Clear" || data.weather[0].main=="Sunny")
            {weatherPicture.src="media/sun.png"}
         
         else if(data.weather[0].main=="Clouds")
            {weatherPicture.src="media/cloudy.png"}

            
         else if(data.weather[0].main=="Snowy" || data.weather[0].main=="Snow" )
            {weatherPicture.src="media/snow.png"}

         else if(data.weather[0].main=="Rainy" || data.weather[0].main=="Rain"  )
            {weatherPicture.src="media/rain.png"}

         else if(data.weather[0].main=="Haze" )
            {weatherPicture.src="media/haze.png"}

         else if(data.weather[0].main=="Mist")
            {weatherPicture.src="media/mist.png"}


         }).catch((error)=>{
            console.log("Error:"+ error);
            console.error("Error:", error);
                     alert("Try again, please.");
            
         })


}


searchButton.addEventListener("click",tempeartureShowing);

searchBar.addEventListener("keydown",function(e){
  if(e.key==="Enter") {
   tempeartureShowing();

  }


});

