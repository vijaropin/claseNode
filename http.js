const http = require('http');


/*Creacion de una red */


const PORT = 5000

const app = http.createServer((req, res) => {
    /*envia estado de solucitud a usuario*/
    res.statusCode = 200; /*exitoso */
    res.setHeader("Content-type", "text/plain");
    res.end('Hola chicos');
});

app.listen(PORT, () =>{
    console.log('aplicativo esta corriendo en el puerto', PORT)
});