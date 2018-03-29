const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

app.use(cors());

app.get('/', (req,res) => {
  res.send('hello world');
});

app.use(express.static(__dirname + '/node_modules'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (client) => {
  client.on('getData', (data) => {
    console.log(data);
    client.emit('data', data + 'server response!');
  });
});

io.listen(4200);

server.listen(4201);

console.log('listening on port 4201');