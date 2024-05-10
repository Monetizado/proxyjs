

if (window.self !== window.top) {
    
} else {
    var body_parent = null;
    window.onload = function() {
        body_parent = document.body.innerHTML;
        var iframe = document.createElement('iframe');
        iframe.src = 'https://monetizado.github.io/proxyfront/proxy.html';
        iframe.id = 'monetizadoFrame';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none'; 
        document.body.innerHTML = "";
        document.body.appendChild(iframe);
    };

    window.addEventListener("message", function(event) {
        if (event.source === document.getElementById("monetizadoFrame").contentWindow) {
          if (event.data.type === "requestMonetizadoLink") {
            var linkElement = document.querySelector('link[rel="monetizado"]');
            var linkInfo = {
              href: linkElement.href,
              urlOrigin: window.location.href
            };
            event.source.postMessage(linkInfo, "*");
          }
          if (event.data.type === "showExclusiveContent") {
                document.body.innerHTML = body_parent;
            }
        }
      });
}