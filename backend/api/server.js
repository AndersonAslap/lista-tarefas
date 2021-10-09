var express = require('express');
var app = express();

const HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
    console.log(`Servidor executando na porta ${HTTP_PORT}`);
});

app.get("/", (request, response, next) => {
    response.json({ "message": "Ok" })
})

app.use(function(request, response){
    response.status(404)
})