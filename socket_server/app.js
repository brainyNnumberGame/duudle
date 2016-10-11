var io = require('socket.io')(8080);
console.log('hello');
io.on('connection', function (socket) {
	
	socket.on('addUser', function (info) {
		console.log(info);
		socket.join(info.roomId);
		socket.userName = info.userName;
		socket.roomId = info.roomId;
		io.sockets.in(socket.roomId).emit('login', {
			'cmd' : 'login',
			'userName' : socket.userName
		});
		io.sockets.in(socket.roomId).emit('userJoined', {
			'cmd' : 'userJoined',
			'userName' : socket.userName
		});
		/*socket.broadcast.emit('userJoined', {
			'cmd' : 'userJoined',
			'userName' : socket.userName
		});*/
	});

	socket.on('newMessage', function (msg) {
		console.log(msg);
		var data = { 
			'cmd' : 'newMessage',
			'userName' : socket.userName,
			'msg' : msg
		};
		io.sockets.in(socket.roomId).emit('newMessage', data);
		//socket.broadcast.emit('newMessage', data);
	});
});