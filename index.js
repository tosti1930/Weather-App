// Selecciona los elementos del DOM que se van a manipular
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

// Agrega un evento al botón de búsqueda cuando se hace clic
search.addEventListener('click', () => {

    // Clave de API de OpenWeatherMap y obtención del valor de la ciudad
    const APIKey = '1effe3e5beb45ddca4d8979302f34154';
    const city = document.querySelector('.search-box input').value;

    // Si el campo de ciudad está vacío, no hace nada
    if (city === '')
        return;

    // Realiza la solicitud a la API de OpenWeatherMap para obtener los datos del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())  // Convierte la respuesta en un objeto JSON
        .then(json => {

            // Si la ciudad no se encuentra (código 404), muestra un mensaje de error
            if (json.cod === '404') {
                container.style.height = '400px'; // Ajusta la altura del contenedor
                weatherBox.style.display = 'none'; // Oculta la caja de clima
                weatherDetails.style.display = 'none'; // Oculta los detalles del clima
                error404.style.display = 'block'; // Muestra el mensaje de error
                error404.classList.add('fadeIn'); // Añade la animación de desvanecimiento
                return; // Termina la ejecución
            }

            // Si la ciudad es válida, oculta el mensaje de error y muestra la información del clima
            error404.style.display = 'none'; // Oculta el mensaje de error
            error404.classList.remove('fadeIn'); // Elimina la animación de desvanecimiento

            // Selecciona los elementos que se actualizarán con la información del clima
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            // Cambia la imagen del clima según el estado del clima obtenido de la API
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png'; // Clima despejado
                    break;

                case 'Rain':
                    image.src = 'images/rain.png'; // Clima lluvioso
                    break;

                case 'Snow':
                    image.src = 'images/snow.png'; // Clima nevado
                    break;

                case 'Clouds':
                    image.src = 'images/cloud.png'; // Clima nublado
                    break;

                case 'Haze':
                    image.src = 'images/mist.png'; // Clima con neblina
                    break;

                default:
                    image.src = ''; // Si no coincide con los casos anteriores, no se muestra imagen
            }

            // Actualiza los elementos con los datos obtenidos de la API
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`; // Muestra la temperatura
            description.innerHTML = `${json.weather[0].description}`; // Muestra la descripción del clima
            humidity.innerHTML = `${json.main.humidity}%`; // Muestra la humedad
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`; // Muestra la velocidad del viento

            // Muestra las cajas de clima y detalles con animaciones
            weatherBox.style.display = ''; // Muestra la caja de clima
            weatherDetails.style.display = ''; // Muestra los detalles del clima
            weatherBox.classList.add('fadeIn'); // Añade la animación de desvanecimiento a la caja de clima
            weatherDetails.classList.add('fadeIn'); // Añade la animación de desvanecimiento a los detalles del clima
            container.style.height = '590px'; // Ajusta la altura del contenedor para mostrar todo

        });
});
