var socket = io();

// Los on son para escuchar información
socket.on('connect', function(){
	console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
	console.log('Perdimos conexión con el servidor')
});

// los emit son para enviar información
socket.emit('enviarMensaje', {
	usuario: 'Abelardo',
	mensaje: 'Hola Mundo'
}, function(resp){
	console.log(resp);
});

// Escuchar infromación
socket.on('enviarMensaje', function(mensaje){
	console.log('Servidor: ', mensaje);
});