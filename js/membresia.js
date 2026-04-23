const membresias = [
    {
        titulo: "Membresía Básica",
        precio: "S/ 60.0",
        precioDesc: "S/ 49.0",
        descripcion: "Acceso a zona de máquinas básicas y cardio.",
        duracion: "30 días",
        cupos: 50
    },
    {
        titulo: "Membresía Fit",
        precio: "S/ 75.0",
        precioDesc: "S/ 65.0",
        descripcion: "Incluye máquinas básicas + clases grupales.",
        duracion: "30 días",
        cupos: 40
    },
    {
        titulo: "Membresía Premium",
        precio: "S/ 120.0",
        precioDesc: "S/ 99.0",
        descripcion: "Acceso total al gimnasio + rutinas personalizadas.",
        duracion: "30 días",
        cupos: 30
    },
    {
        titulo: "Membresía Elite",
        precio: "S/ 160.0",
        precioDesc: "S/ 139.0",
        descripcion: "Entrenador personal + acceso completo 24/7.",
        duracion: "30 días",
        cupos: 20
    },
    {
        titulo: "Membresía Pro Athlete",
        precio: "S/ 220.0",
        precioDesc: "S/ 189.0",
        descripcion: "Plan profesional con nutrición y seguimiento avanzado.",
        duracion: "30 días",
        cupos: 10
    }
];

const lista = document.querySelector('#membresias-splide .splide__list');

membresias.forEach(m => {
    lista.innerHTML += `
    <li class="splide__slide">
      <div class="card custom-card border-0 shadow-lg rounded-0 overflow-hidden h-100">
        <div class="card-body text-center p-4">
          <h4 class="title-membresia fw-bold mb-4">${m.titulo}</h4>
          <p class="price-membresia text-lg fw-bold mb-3">${m.precio}</p>
          <p class="text-md">${m.precioDesc}</p>
          <p class="text-wrap mb-4">${m.descripcion}</p>
          <div class="d-flex justify-content-center align-items-center">
            <i class="bi bi-clock-fill fs-3 me-2 icon-membresia"></i>
            <p class="text-white mt-3 fw-bold me-2 text-md">Duración:</p>
            <p class="text-white mt-3 fw-bold me-2 text-md">${m.duracion}</p>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <i class="bi bi-file-person-fill icon-membresia fs-3 me-2"></i>
            <p class="text-white mt-3 fw-bold me-2 text-md">Cupos disponibles:</p>
            <p class="text-white mt-3 fw-bold me-2 text-md">${m.cupos}</p>
          </div>
          <a href="#" class="c-btn c-btn-primary shadow-lg mt-4">
            Elegir Plan <i class="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </li>`;
});

new Splide('#membresias-splide', {
    //type: 'loop',
    focus: 'center',
    perPage: 4,
    gap: '1rem',
    pagination: false,
    arrows: true,
    breakpoints: {
        1000: {
            perPage: 2
        },
        650: {
            perPage: 1
        }
    }
}).mount();