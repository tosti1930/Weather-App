### Weather App

### Claudio Israel Cornejo Álvarez 

Esta es una aplicación web simple que permite a los usuarios buscar el clima de cualquier ubicación utilizando la API de OpenWeatherMap . La aplicación muestra información como temperatura, descripción del clima, humedad y velocidad del viento. Además, incluye animaciones suaves para mejorar la experiencia del usuario.

Funcionalidades Principales
Búsqueda de Clima por Ubicación :
Los usuarios pueden ingresar el nombre de una ciudad en el campo de búsqueda.
Al hacer clic en el botón de búsqueda, la aplicación consulta la API de OpenWeatherMap para obtener los datos meteorológicos.
Mostrar Información del Clima :
Temperatura actual en grados Celsius.
Descripción del clima (por ejemplo, "cielo claro", "lluvia").
Humedad en porcentaje.
Velocidad del viento en km/h.
Manejo de Errores :
Si la ubicación ingresada no es válida, se muestra un mensaje de error con una imagen indicativa.
Animaciones :
Las cajas de clima y detalles aparecen con una animación de desvanecimiento suave (fadeIn).
Diseño Responsivo :
La interfaz está diseñada para ser visualmente atractiva y funcional en pantallas de diferentes tamaños.
Estructura del Proyecto
Archivos Principales
index.html :
Contiene la estructura básica de la aplicación.
Incluye elementos como el cuadro de búsqueda, imágenes, texto y contenedores para mostrar los datos del clima.
style.css :
Define el diseño y las animaciones de la aplicación.
Utiliza estilos modernos y colores agradables para mejorar la experiencia del usuario.
index.js :
Contiene la lógica principal de la aplicación.
Realiza solicitudes a la API de OpenWeatherMap y actualiza dinámicamente la interfaz con los datos obtenidos.
Dependencias y Recursos Externos
Font Awesome :
Se utiliza para los iconos de búsqueda, ubicación, agua y viento.
Enlazado desde https://kit.fontawesome.com/.
Google Fonts :
Se utilizan las fuentes Poppins y Roboto para el texto.
Enlazadas desde https://fonts.googleapis.com/.
API de OpenWeatherMap :
Proporciona los datos meteorológicos.
Requiere una clave de API válida (incluida en el código como APIKey).
Instalación y Uso
Clonar el Repositorio :
bash
Copy
1
2
git clone https://github.com/tu-usuario/weather-app.git
cd weather-app
Configurar la API Key :
Abre el archivo index.js.
Reemplaza el valor de APIKey con tu propia clave de API de OpenWeatherMap. Puedes obtener una clave gratuita registrándote en OpenWeatherMap .
Ejecutar la Aplicación :
Abre el archivo index.html en tu navegador preferido.
Ingresa el nombre de una ciudad en el cuadro de búsqueda y haz clic en el botón de búsqueda.
