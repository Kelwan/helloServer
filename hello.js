

const net = require ('net');



const server = net.createServer((socket) => {
  console.log('connection made');

  socket.on('error', (e) => {
    console.log(e);
  });

  socket.on('data', (data) => {
    console.log(data.toString());
  });

  socket.write("Hey Zeke");


  console.log(socket.remoteAddress);
});

server.on('error', (err) => {
  console.log(err);
});


// Possible signatures:
//
// 1) server.listen(handle[, backlog][, callback])
// 2) server.listen(options[, callback])
// 3) server.listen(path[, backlog][, callback]) for IPC servers
// 4) server.listen([port][, host][, backlog][, callback]) for TCP servers


server.listen(3000, () => {
	console.log(server.address());
});
