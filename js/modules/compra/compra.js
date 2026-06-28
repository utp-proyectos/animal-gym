import { state } from './state.js'
import { render } from './ui.js'
import { nextStep, prevStep } from './steps.js'
import { renderResumen } from './resumen.js'
const API_URL = 'http://localhost:8080/api'

window.prevStep = prevStep

renderResumen()

async function cargarMembresias() {
	const container = document.querySelector('#step-1 .col-lg-7')
	const titulo = container.querySelector('h2')

	container.querySelectorAll('.card-membership').forEach((c) => c.remove())

	try {
		const res = await fetch(`${API_URL}/memberships`)
		const json = await res.json()
		const membresias = json.data

		const total = membresias.length

		membresias.forEach((m) => {
			const precio = m.discountPrice ?? m.price
			const card = document.createElement('div')
			card.className = 'card-membership mb-3'
			card.dataset.id = m.id
			card.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h3 class="h5 mb-0">${m.name}</h3>
          <span class="fw-bold">S/ ${precio.toFixed(2)}</span>
        </div>
        <div class="d-flex gap-4">
          <span><i class="bi bi-clock me-2 text-danger"></i>Duración: <strong>${m.duration} días</strong></span>
          <span><i class="bi bi-people-fill me-2 text-danger"></i>Cupos: <strong>${m.capacityLimit}</strong></span>
        </div>
      `
			card.addEventListener('click', () => {
				document.querySelectorAll('.card-membership').forEach((c) => c.classList.remove('active'))
				card.classList.add('active')
				state.membresia = m.name
				state.membershipId = m.id
				state.precio = precio
				state.duracion = m.duration
				state.cupos = m.capacityLimit
				renderResumen()
			})

			titulo.insertAdjacentElement('afterend', card)
		})

		// Seleccionar la primera por defecto
		const primera = container.querySelector('.card-membership')
		if (primera) primera.click()
	} catch (error) {
		console.error('Error cargando membresías:', error)
	}
}

/* ── STEP 1 ── */
window.goToStep2 = () => {
	if (!state.membershipId) {
		document.querySelectorAll('.card-membership').forEach((c) => c.classList.add('border-danger'))
		return
	}
	nextStep()
	renderResumen()
}

/* ── STEP 2 ── */
window.goToStep3 = () => {
	const form = document.getElementById('formInfo')
	form.classList.add('was-validated')
	if (!form.checkValidity()) return

	const formData = new FormData(form)
	state.usuario = {
		dni: formData.get('dni'),
		gender: formData.get('genero'),
		firstName: formData.get('nombre'),
		lastName: formData.get('apellido'),
		phoneNumber: formData.get('telefono'),
		email: formData.get('email'),
		birthDate: formData.get('fecha'),
		password: formData.get('clave'),
	}

	nextStep()
	renderResumen()
}

/* ── STEP 3 ── */
window.pagar = async () => {
	const formPago = document.getElementById('formPago')
	formPago.classList.add('was-validated')
	if (!formPago.checkValidity()) return

	try {
		const body = {
			...state.usuario,
			membershipId: state.membershipId,
			hireDate: new Date().toISOString().split('T')[0],
			status: true,
			role: 'SOCIO',
		}

		const res = await fetch(`${API_URL}/partners`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		})

		if (!res.ok) {
			const err = await res.json()
			alert(err.message ?? 'Error al procesar el pago')
			return
		}

		const modal = new bootstrap.Modal(document.getElementById('successModal'))
		modal.show()
	} catch (error) {
		console.error('Error al pagar:', error)
		alert('No se pudo conectar con el servidor')
	}
}

window.irApp = () => {
	window.location.href = 'http://localhost:5173'
}

/* ── INIT ── */
render()
cargarMembresias()
