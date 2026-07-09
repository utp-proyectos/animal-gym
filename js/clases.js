const API_URL = 'http://localhost:8080/api/sessions'

async function cargarClases() {
	const container = document.getElementById('classes-container')

	try {
		const response = await fetch(API_URL)
		if (!response.ok) throw new Error('Error al obtener las clases')

		const json = await response.json()
		const clases = json.data
		console.log(clases) // ← primero verifica qué campos manda el backend

		container.innerHTML = ''

		clases.forEach((clase, i) => {
			container.innerHTML += `
    <div class="class-card" data-aos="fade-up" data-aos-delay="${100 * i + 300}" data-aos-offset="300">
      <img src="${clase.image}" class="class-img" alt="${clase.name}" />
      <div class="class-footer">
        <h5 class="text-white m-auto">${clase.name}</h5>
      </div>
      <div class="class-overlay">
        <h4 class="text-white fw-bold mb-2">${clase.name}</h4>
        <p class="text-white">${clase.description}</p>
      </div>
    </div>
  `
		})

		if (typeof AOS !== 'undefined') AOS.refresh()
	} catch (error) {
		console.error('Error:', error)
		container.innerHTML = `<p class="text-white text-center w-full">No se pudieron cargar las clases.</p>`
	}
}

cargarClases()
