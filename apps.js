//const stuff that can be copy pasta
//------------------------------------------
const express = require('express');
const app = express();
const https = require("http");
const server = http.createServer(app);
const LISTEN_PORT = 8080;
//------------------------------------------

//these functions run befor the page is "served"
app.use(express.static(__dirname + "/public"));

//route for accesing page
app.get("/", function(req, res){
    res.sendfile(__dirname + 'public.index.html'); // send the index.html
});

//start server
server.listen(LISTEN_PORT);
console.log('listening to port' + LISTEN_PORT);