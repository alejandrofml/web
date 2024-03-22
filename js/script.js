document.addEventListener("DOMContentLoaded", function() {
    let btnHamburguesa = document.getElementById("btn-hamburguesa");
    let menuNavegacion = document.getElementById("items");
    let menuItems = document.querySelectorAll('.li-link');

    btnHamburguesa.addEventListener('click', function(){
        menuNavegacion.classList.toggle("viewMenu");
    });

    // Detectar clics fuera del menú y cerrar el menú en respuesta a eso
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menuNavegacion.contains(event.target);
        const isClickOnHamburguerButton = btnHamburguesa.contains(event.target);
        if (!isClickInsideMenu && !isClickOnHamburguerButton) {
            menuNavegacion.classList.remove("viewMenu");
        }
    });

    // Cerrar el menú cuando se haga clic en una de las opciones del menú
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuNavegacion.classList.remove("viewMenu");
        });
    });

    // Desplazamiento suave al hacer clic en un enlace del menú
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - document.getElementById('header').offsetHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Variable para almacenar la posición inicial del desplazamiento
    let startY = 0;

    // Función para detectar el desplazamiento táctil y mostrar u ocultar el menú
    window.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    });

    window.addEventListener('touchmove', function(e) {
        const currentY = e.touches[0].clientY;

        if (currentY > startY) {
            // Desplazamiento hacia abajo
            document.getElementById('header').style.top = '0';
            document.getElementById('header').style.transition = `.9s`;

        } else {
            // Desplazamiento hacia arriba
            const headerHeight = document.getElementById('header').offsetHeight;
            document.getElementById('header').style.top = `-${headerHeight}px`
            document.getElementById('header').style.transition = `.9s`;

        }

        startY = currentY;
    });

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var inicio = document.getElementById('inicio');
        var header = document.getElementById('header');
    
        inicio.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
        header.style.backgroundPositionY = 2 + - 4 + 'rem';
        // Si el scroll está en la parte superior, ajustar la posición del fondo del header
        if (scrollPosition === 0) {
            header.style.backgroundPositionY = - 4 + 'rem';
            header.style.transition = '0.9s';
        }
    });

    var scrollPosition = window.scrollY;
    var inicio = document.getElementById('inicio');
    inicio.style.backgroundPositionY = -scrollPosition * 0.5 + 'px'; // Ajusta la velocidad del efecto parallax cambiando el valor multiplicador

});

function sendwhatsapp() {
    var numero = "+598099653200";

    var name = document.querySelector('#name').value;
    var curso = document.querySelector('#curso-select').value;

    var url = "https://wa.me/" + numero + "?text="
    +"*Nombre:* " + name + "%0a"
    +"*Curso:* " + curso + "%0a";

    window.open(url, '_blank').focus();

}
