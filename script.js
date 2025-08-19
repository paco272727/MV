document.addEventListener('DOMContentLoaded', function() {

    // --- Efecto de Header al hacer scroll ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Menú Hamburguesa para Móvil ---
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.main-nav');
    
    // Evita errores si no existe la hamburguesa en la página
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active'); // Necesitarás añadir estilos para .main-nav.active
            hamburger.classList.toggle('is-active');
        });
    }

    // --- Animaciones al hacer scroll ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // El elemento se animará cuando el 10% sea visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- Validación del Formulario de Contacto ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let isValid = true;
            
            // Validación simple
            if (name === '') {
                alert('Por favor, ingresa tu nombre.');
                isValid = false;
            }
            
            if (email === '' || !email.includes('@')) {
                alert('Por favor, ingresa un email válido.');
                isValid = false;
            }

            if (message === '') {
                alert('Por favor, escribe un mensaje.');
                isValid = false;
            }

            if (isValid) {
                // Aquí iría el código para enviar el formulario (ej. usando Fetch API a un backend)
                alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
            }
        });
    }

});

// Añade los estilos necesarios para el menú móvil activo en tu CSS:
/*
@media (max-width: 768px) {
    .main-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: white;
        flex-direction: column;
        text-align: center;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    .main-nav.active {
        display: flex;
    }
    .main-nav ul {
        flex-direction: column;
        width: 100%;
    }
    .main-nav ul li {
        margin: 0;
    }
    .main-nav ul li a {
        display: block;
        padding: 15px 0;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .hamburger.is-active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    .hamburger.is-active span:nth-child(2) {
        opacity: 0;
    }
    .hamburger.is-active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
}
*/