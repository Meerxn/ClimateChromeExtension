//const { data } = require("jquery");



$(document).ready(function() {
  
  
    $("#formy").submit(function(e) {
      e.preventDefault();
      var city = document.getElementById("city").value;
      var unit = document.getElementById("unit").value;
      alert("h");
      dataAdd(city,unit);
    });
  });

//$.getJSON( "https://api.openweathermap.org/data/2.5/weather?q=Dubai&units=imperial&appid=02569b45ca599249806ca808664994b9",function(json){
   //alert(json.main.temp); 
   
    
function dataAdd(city,unit){
 
        $.getJSON( "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units="+ unit+"&appid=02569b45ca599249806ca808664994b9",function(json){
            const temp = json.main.temp;
            const description = json.weather[0].description;
            const logoID = json.weather[0].icon;
            const logoUrl = "http://openweathermap.org/img/wn/" + logoID + "@2x.png"; 
            location.replace("new.html");
            //document.addEventListener('DOMContentLoaded', function () {
                sessionStorage.setItem("unit",unit);
                sessionStorage.setItem("city",city);
            sessionStorage.setItem("temp",temp);
            sessionStorage.setItem("dex",description);
            sessionStorage.setItem("url",logoUrl);
            
        //});
        
            //setTimeout(function(){ alert("Hello"); }, 8000);
   
    });
}    

   
    
    //var temp = (9/5)*(parseInt(json.main.temp) - 273) + 32;	
    //ocument.getElementById("temperature").innerHTML = "hello ";
   
  
//});

    
    
  


    

