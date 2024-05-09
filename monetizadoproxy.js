

if (window.self !== window.top) {
    
} else {
    // No estás en un iframe (es la ventana principal)
    var body_parent = null;

    window.onload = function() {
        // Crear un nuevo iframe
        body_parent = document.body.innerHTML;
        var iframe = document.createElement('iframe');
        // Establecer la URL del iframe
        iframe.src = 'https://monetizado.github.io/proxyfront/arbitrum_proxy.html'; // Reemplaza 'ruta_a_tu_contenido.html' con la URL del contenido que deseas cargar en el iframe
        // Establecer estilos (opcional)
        iframe.id = 'monetizadoFrame';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none'; // Para eliminar el borde del iframe
        document.body.innerHTML = "";

        document.body.appendChild(iframe);
        
        // Remover todo el contenido existente en el body
        
        // Agregar el iframe al body
        
    };

    window.addEventListener("message", function(event) {
        // Verificar si el mensaje proviene del iframe
        if (event.source === document.getElementById("monetizadoFrame").contentWindow) {
          // Verificar el tipo de mensaje
          if (event.data.type === "requestMonetizadoLink") {
            // Obtener información sobre el elemento link y enviarla al iframe
            var linkElement = document.querySelector('link[rel="monetizado"]');
            var linkInfo = {
              href: linkElement.href,
              urlOrigin: window.location.href
            };
            event.source.postMessage(linkInfo, "*");
          }
          if (event.data.type === "showExclusiveContent") {
                // Mostrar el contenido del body nuevamente
                document.body.innerHTML = body_parent;
                //document.getElementById("monetizadoFrame").style.display = "none";
            }
        }
      });
}