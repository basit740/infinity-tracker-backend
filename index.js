const express = require('express');

const server = express();

server.use(express.json());

server.listen(5000, function () {
	console.log('server is running at PORT: 5000');
});

server.get('/', function (request, response) {
	//response.send('Welcome to infinity-tracker-backend');
	response.status(200).json({
		success: true,
		data: 'welcome to infinity-trakcer-back',
	});
});
