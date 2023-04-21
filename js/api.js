
// Hacer una petición a la API de la hora
fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires')
.then(function(response) {
    return response.json();
})
.then(function(timeData) {
    // Mostrar los datos de la hora en el elemento con el identificador "time"
    let dateTime = new Date(timeData.datetime);
    let formattedTime = dateTime.toLocaleString();
    document.getElementById('time').innerText = 'Fecha: ' + formattedTime;
})
.catch(function(error) {
    console.error('Error al obtener datos de la hora:', error);
});