const clasesGym = [
	{
		titulo: 'Zumba',
		descripcion: 'Clase de baile fitness.',
		imagen: 'assets/images/layout/clases/clases6.jpg',
		icono: 'bi-music-note-beamed',
	},

	{
		titulo: 'Boxeo',
		descripcion: 'Entrenamiento de boxeo y cardio',
		imagen: 'assets/images/layout/clases/clase3.jpg',
		icono: 'bi-hand-thumbs-up-fill',
	},
	{
		titulo: 'Pilates',
		descripcion: 'Clases de pilates con ejercicios de core',
		imagen: 'assets/images/layout/clases/clase2.jpg',
		icono: 'bi-person-arms-up',
	},

	{
		titulo: 'Spinning',
		descripcion: 'Clases de ciclismo indoor',
		imagen: 'assets/images/layout/clases/clase1.jpg',
		icono: 'bi-bicycle',
	},
	{
		titulo: 'Crossfit',
		descripcion: 'Entrenamiento funcional',
		imagen: 'assets/images/layout/clases/clase4.jpg',
		icono: 'bi-bar-chart-line',
	},
	{
		titulo: 'Yoga',
		descripcion: 'Clase de yoga para principiantes.',
		imagen: 'assets/images/layout/clases/clase5.jpg',
		icono: 'bi-peace',
	},
]

const container = document.getElementById('classes-container')

container.innerHTML = ''

clasesGym.forEach((clase, i) => {
	const cardHTML = `
										<div
											class="class-card overflow-hidden position-relative"
											data-aos="fade-up"
											data-aos-delay="${100 * i}"
											data-aos-anchor="#classes-container"
											data-aos-offset="200"
										>
                    	<img src="${clase.imagen}" class="class-img" alt="${clase.titulo}">

											<div class="class-footer">
													<h5 class="text-white m-auto">${clase.titulo}</h5>
													<div class="class-icon">
															<i class="bi ${clase.icono} text-white"></i>
													</div>
											</div>

											<div class="class-overlay">
													<i class="bi ${clase.icono} text-white display-6"></i>
													<h4 class="text-white fw-bold mb-2">${clase.titulo}</h4>
													<p class="text-white">${clase.descripcion}</p>
											</div>
									</div>

        `
	container.innerHTML += cardHTML
})
