const http= require("http");
const server = http.createServer((req, res)=>{
    res.writeHead(200);
    res.end('hola mundo');
});
server.listen(3000,'127.0.0.1', ()=>{
    console.log('Servidor corriendo en el puerto 3000');
});
