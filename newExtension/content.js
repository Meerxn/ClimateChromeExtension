var temp = sessionStorage.getItem("temp");
var des = sessionStorage.getItem("dex");
var url = sessionStorage.getItem("url");
var city = sessionStorage.getItem("city");
var unit = sessionStorage.getItem("unit");
var measure;
document.getElementById("location").innerHTML = "Location: " + city;
if (unit === "metric"){
    measure = "°C";
}
else{
 measure = "°F" ;  
}
document.getElementById("temp").innerHTML = "Current Temperature: " + temp + " degree " + measure;
document.getElementById("img").src = url;
document.getElementById("dex").innerHTML = "Description: " + des;

setTimeout(function(){ window.location.href = "index.html" }, 5000);

