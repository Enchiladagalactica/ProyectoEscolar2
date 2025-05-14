document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const header = document.querySelector(".header")
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navLinks = document.querySelector(".nav-links")
  const scrollLinks = document.querySelectorAll('a[href^="#"]')

  // Cambiar estilo del header al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "0.5rem 0"
      header.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    } else {
      header.style.padding = "1rem 0"
      header.style.boxShadow = "none"
    }
  })

  // Menú móvil
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show")
  })

  // Scroll suave para enlaces internos
  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - header.offsetHeight

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })

        // Cerrar menú móvil si está abierto
        if (navLinks.classList.contains("show")) {
          navLinks.classList.remove("show")
        }
      }
    })
  })

  // Animación de elementos al hacer scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".news-card, .specialty-card, .stat-item, .community-card")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Inicializar animaciones
  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Ejecutar una vez al cargar la página

  // Formulario de newsletter
  const newsletterForm = document.querySelector(".newsletter-form")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const emailInput = this.querySelector('input[type="email"]')
      const email = emailInput.value.trim()

      if (email && isValidEmail(email)) {
        // Aquí iría la lógica para enviar el email al servidor
        alert("¡Gracias por suscribirte a nuestro boletín!")
        emailInput.value = ""
      } else {
        alert("Por favor, introduce un email válido.")
      }
    })
  }

  // Validar email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Añadir clase activa a los enlaces de navegación según la sección visible
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section")
    const navItems = document.querySelectorAll(".nav-links a")

    let currentSection = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - header.offsetHeight - 100
      const sectionHeight = section.offsetHeight

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id")
      }
    })

    navItems.forEach((item) => {
      item.classList.remove("active")
      if (item.getAttribute("href") === `#${currentSection}`) {
        item.classList.add("active")
      }
    })
  })
})
