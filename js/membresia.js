const API_URL_MEMBERSHIPS = 'http://localhost:8080/api/memberships'

async function cargarMembresias() {
	const lista = document.querySelector('#memberships-splide .splide__list')

	try {
		const response = await fetch(API_URL_MEMBERSHIPS)
		if (!response.ok) throw new Error('Error al obtener membresías')

		const json = await response.json()
		const membresias = json.data

		console.log(membresias)

		const maxEnrollados = Math.max(...membresias.map((m) => m.enrolledMembers ?? 0))

		lista.innerHTML = ''

		membresias.forEach((m) => {
			const esPopular = m.enrolledMembers === maxEnrollados
			const precioFinal = m.discountPrice ?? m.price

			lista.innerHTML += `
        <li class="splide__slide d-flex justify-content-center">
          <div class="card custom-card shadow-lg ${esPopular ? 'popular-membership' : ''} overflow-hidden h-100">
            <div class="card-body text-center p-4">
              <h3 class="mb-4 color-primary">${m.name}</h3>
              <p class="text-lg fw-bold mb-1 color-primary">S/. ${precioFinal.toFixed(2)}</p>
              ${m.discountPrice ? `<p class="text-md text-decoration-line-through text-secondary">S/. ${m.price.toFixed(2)}</p>` : ''}
              <p class="text-wrap mb-4">${m.description}</p>
              <div class="d-flex justify-content-center align-items-center">
                <i class="bi bi-clock-fill fs-3 me-2 color-primary"></i>
                <p class="text-white mt-3 fw-bold me-2 text-md">Duración:</p>
                <p class="text-white mt-3 fw-bold me-2 text-md">${m.duration} días</p>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <i class="bi bi-file-person-fill color-primary fs-3 me-2"></i>
                <p class="text-white mt-3 fw-bold me-2 text-md">Cupos disponibles:</p>
                <p class="text-white mt-3 fw-bold me-2 text-md">${m.capacityLimit}</p>
              </div>
              <a href="compra.html" class="c-btn c-btn-primary shadow-lg mt-4">
                Elegir Plan <i class="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </li>
      `
		})

		// Inicializar Splide después de insertar las cards
		const total = membresias.length

		new Splide('#memberships-splide', {
			type: 'slide',
			perPage: Math.min(total, 3), // máximo 3, pero si hay 1 muestra 1
			perMove: 1,
			focus: 'center',
			gap: '1.5rem',
			breakpoints: {
				768: { perPage: 1 },
				1024: { perPage: Math.min(total, 2) },
			},
		}).mount()

		if (typeof AOS !== 'undefined') AOS.refresh()
	} catch (error) {
		console.error('Error:', error)
		lista.innerHTML = `<li class="text-white text-center w-100">No se pudieron cargar las membresías.</li>`
	}
}

cargarMembresias()
