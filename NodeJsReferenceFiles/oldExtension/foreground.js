
function documentEvents() {    
  document.getElementById('btn').addEventListener('click', 
    function() { myAction(document.getElementById("city"));
    alert(document.getElementById("city").innerHTML);
  });


function myAction(city) { 
    var jsonData;
    const apiKey = "02569b45ca599249806ca808664994b9";
   
    $.getJSON( "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=" + apiKey ,function(json){
        jsonData = json;
    });
    
    // document.getElementById("location").innerHTML = " "+ city;
    // document.getElementById("temp").innerHTML = " "+ jsonData.main.temp;
    // document.getElementById("des").innerHTML = " " + jsonData.weather[0].description;

    
    

    // do processing with data
    // you need to right click the extension icon and choose "inspect popup"
    // to view the messages appearing on the console.
}


  // you can add listeners for other objects ( like other buttons ) here 
}