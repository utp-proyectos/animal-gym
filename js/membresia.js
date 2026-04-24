const membresias = [
    {
        titulo: "Membresía Básica",
        precio: "S/ 60.0",
        precioDesc: "S/ 49.0",
        descripcion: "Acceso a zona de máquinas básicas y cardio.",
        duracion: "30 días",
        cupos: 50,
        ventas: 100
    },
    {
        titulo: "Membresía FiTT",
        precio: "S/ 75.0",
        precioDesc: "S/ 65.0",
        descripcion: "Incluye máquinas básicas + clases grupales.",
        duracion: "30 días",
        cupos: 40,
        ventas: 100

    },
    {
        titulo: "Membresía Premium",
        precio: "S/ 120.0",
        precioDesc: "S/ 99.0",
        descripcion: "Acceso total al gimnasio + rutinas personalizadas.",
        duracion: "30 días",
        cupos: 30,
        ventas: 100
    },
    {
        titulo: "Membresía Elite",
        precio: "S/ 160.0",
        precioDesc: "S/ 139.0",
        descripcion: "Entrenador personal + acceso completo 24/7.",
        duracion: "30 días",
        cupos: 20,
        ventas: 100
    },
    {
        titulo: "Membresía Pro Athlete",
        precio: "S/ 220.0",
        precioDesc: "S/ 189.0",
        descripcion: "Plan profesional con nutrición y seguimiento avanzado.",
        duracion: "30 días",
        cupos: 10,
        ventas: 500

    }
];

const lista = document.querySelector('#membresias-splide .splide__list')
membresias.sort((a, b) => b.ventas - a.ventas);
const mejor = membresias[0];
membresias.splice(0, 1);
membresias.splice(1, 0, mejor);

const maxVentas = Math.max(...membresias.map(m => m.ventas))
membresias.forEach(m => {

    lista.innerHTML +=

        `
    <li class="splide__slide d-flex justify-content-center">
      <div class="card custom-card shadow-lg  ${m.ventas === maxVentas ? 'membresia-mas-vendida' : ''} overflow-hidden h-100">
        <div class="card-body text-center p-4">
          <h3 class="mb-4 color-primary">${m.titulo}</h3>
          <p class="text-lg fw-bold mb-3 color-primary">${m.precio}</p>
          <p class="text-md">${m.precioDesc}</p>
          <p class="text-wrap mb-4">${m.descripcion}</p>
          <div class="d-flex justify-content-center align-items-center">
            <i class="bi bi-clock-fill fs-3 me-2 color-primary"></i>
            <p class="text-white mt-3 fw-bold me-2 text-md">Duración:</p>
            <p class="text-white mt-3 fw-bold me-2 text-md">${m.duracion}</p>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <i class="bi bi-file-person-fill color-primary fs-3 me-2"></i>
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
    type: 'loop',
    perPage: 4,
    pagination: false,
    arrows: true,
    breakpoints: {
        1440: {
            perPage: 3
        },
        1300: {
            perPage: 2
        },
        880: {
            perPage: 1
        }
    }
}).mount();