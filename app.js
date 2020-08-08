const express = require("express");
const https = require("https");
const app = express();


app.get("/", function(request,response){
   
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Dubai&units=metric&appid=02569b45ca599249806ca808664994b9";
    https.get(url,function(re){
        re.on("data" , function(data){
           const weatherData = JSON.parse(data);
           console.log(weatherData);
        })
     
    })
    response.send("server is up and running ");
   
    
})


app.listen(3000 , function(){



    console.log ("server is running on port 3000");
})