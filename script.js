(function () {
  "use strict";

  const header = document.getElementById("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  // Menú móvil
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
      menuToggle.setAttribute(
        "aria-label",
        nav.classList.contains("is-open") ? "Cerrar menú" : "Abrir menú"
      );
    });

    // Cerrar al hacer clic en un enlace
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
      });
    });
  }

  // Scroll suave para enlaces internos (refuerzo por si el navegador no respeta scroll-margin)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Header: más sombra al hacer scroll
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 50) {
      header.style.background = "rgba(255, 255, 255, 0.98)";
      header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.92)";
      header.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.06)";
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Formulario: envío con EmailJS
  const form = document.querySelector(".contact-form");
  if (form) {
    // Inicializar EmailJS (el usuario debe configurar su Public Key)
    emailjs.init("YOUR_PUBLIC_KEY"); // Reemplazar con tu Public Key de EmailJS

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      // Deshabilitar botón y mostrar "Enviando..."
      submitButton.disabled = true;
      submitButton.textContent = "Enviando...";

      // Obtener valores del formulario
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const mensaje = document.getElementById("mensaje").value;

      // Parámetros para EmailJS
      const templateParams = {
        from_name: nombre,
        from_email: email,
        message: mensaje,
        to_email: "rodrigoianez00@gmail.com"
      };

      // Enviar correo usando EmailJS
      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(
          function (response) {
            // Éxito
            submitButton.textContent = "✓ Enviado";
            submitButton.style.background = "var(--accent-dark)";
            form.reset();
            
            // Mostrar mensaje de éxito
            const successMsg = document.createElement("p");
            successMsg.textContent = "¡Mensaje enviado correctamente! Te responderemos pronto.";
            successMsg.style.color = "var(--accent)";
            successMsg.style.marginTop = "1rem";
            successMsg.style.fontWeight = "500";
            form.appendChild(successMsg);

            // Restaurar botón después de 3 segundos
            setTimeout(function () {
              submitButton.disabled = false;
              submitButton.textContent = originalText;
              submitButton.style.background = "";
              if (successMsg.parentNode) {
                successMsg.remove();
              }
            }, 3000);
          },
          function (error) {
            // Error
            console.error("Error al enviar:", error);
            submitButton.disabled = false;
            submitButton.textContent = originalText;
            
            alert(
              "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente en rodrigoianez00@gmail.com"
            );
          }
        );
    });
  }
})();
