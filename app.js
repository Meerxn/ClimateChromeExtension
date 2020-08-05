const express = require("express");
const app = express();

app.get("/", function(request,response){
    response.send("hello this server is running");
})


app.listen(3000 , function(){
    console.log ("server is running on port 3000");
})