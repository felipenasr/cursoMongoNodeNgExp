const express = require("express");
const server = express();


server.use('/', function(req, res, next){
    console.log("Inicio");
    next();
    console.log("fim");

});

server.use('/', function(req, res){

    console.log('Resposta');

    res.send("<h1>Teste</h1>")


});    

server.listen(3000, () => console.log("executando"));