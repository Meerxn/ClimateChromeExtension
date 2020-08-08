const express = require("express");
const https = require("https");
const app = express();


app.get("/", function(request,response){
   
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Dubai&units=metric&appid=02569b45ca599249806ca808664994b9";
    https.get(url,function(re){
        re.on("data" , function(data){
           const weatherData = JSON.parse(data);
           console.log(weatherData);
           const temp = weatherData.main.temp;
           const description = weatherData.weather[0].description
           console.log(temp);
           response.write("<h1> Temperature in Dubai is currently " + temp + " degree Celsius <h1>");
           response.write("<br>");
           response.write("<h2> Weather description " + description + "</h2>");

           
        })
     
    })
  
   
    
})


app.listen(3000 , function(){



    console.log ("server is running on port 3000");
})