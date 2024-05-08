

if (window.self !== window.top) {
    
} else {
    // No estás en un iframe (es la ventana principal)
    window.onload = function() {
        // Crear un nuevo iframe
        var iframe = document.createElement('iframe');
        // Establecer la URL del iframe
        iframe.src = 'child.html'; // Reemplaza 'ruta_a_tu_contenido.html' con la URL del contenido que deseas cargar en el iframe
        // Establecer estilos (opcional)
        iframe.id = 'monetizadoFrame';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none'; // Para eliminar el borde del iframe
        
        // Remover todo el contenido existente en el body
        document.body.innerHTML = '';
        
        // Agregar el iframe al body
        document.body.appendChild(iframe);
    };

    window.addEventListener("message", function(event) {
        // Verificar si el mensaje proviene del iframe
        if (event.source === document.getElementById("monetizadoFrame").contentWindow) {
          // Verificar el tipo de mensaje
          if (event.data.type === "requestMonetizadoLink") {
            // Obtener información sobre el elemento link y enviarla al iframe
            var linkElement = document.querySelector('link[rel="monetizado"]');
            var linkInfo = {
              href: linkElement.href
            };
            event.source.postMessage(linkInfo, "*");
          }
          if (event.data.type === "showExclusiveContent") {
                // Mostrar el contenido del body nuevamente
                document.body.style.display = "block";
            }
        }
      });
}