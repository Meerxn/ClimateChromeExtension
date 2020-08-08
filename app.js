const express = require("express");
const https = require("https");
const bodyParser  = require("body-parser");
const app = express();

// THIS IS TO WORK WITH POST REQUESTS AND BODY PARSER
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(request,response){

response.sendFile(__dirname + "/index.html");


    
  
   
  
})
app.post("/",function(req,res){
   const apiKey = "02569b45ca599249806ca808664994b9";
    const place = req.body.city;
    const unit  = req.body.unit
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=" + unit + "&appid=" +apiKey;
    https.get(url,function(re){
        re.on("data" , function(data){
           const weatherData = JSON.parse(data);
           if (weatherData.message === "city not found"){
               res.send("please make sure that the a correct city name was added ");
           }
           else{
           const temp = weatherData.main.temp;
           const description = weatherData.weather[0].description;
           const logoID = weatherData.weather[0].icon;
           const logoUrl = "http://openweathermap.org/img/wn/" + logoID + "@2x.png";
           res.write("<h1> Temperature in " + place +  " is currently " + temp + " degree Celsius <h1>");
           res.write("<br>");
           res.write("<img src=" + logoUrl +">");
           res.write("<h2> Weather description:  " + description + "</h2>");
           res.send();
           }

           
        })
     
    })
})


app.listen(3000 , function(){



    console.log ("server is running on port 3000");
})