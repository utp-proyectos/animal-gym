import { state } from './state.js'
import { render } from './ui.js'
import { nextStep, prevStep } from './steps.js'

window.prevStep = prevStep

/* STEP 1 */
window.selectMembresia = (tipo, precio) => {
	state.membresia = tipo
	state.precio = precio

	document.querySelectorAll('.card-membership').forEach((card) => {
		card.classList.remove('active')
	})

	event.currentTarget.classList.add('active')
}

window.goToStep2 = () => {
	if (!state.membresia) {
		document.querySelectorAll('.card-membership').forEach((card) => {
			card.classList.add('border-danger')
		})
		return
	}
	nextStep()
}

/* STEP 2 */
window.goToStep3 = () => {
	const form = document.getElementById('formInfo')

	form.classList.add('was-validated')
	if (!form.checkValidity()) return
	const formData = new FormData(form)

	state.usuario = {
		dni: formData.get('dni'),
		genero: formData.get('genero'),
		nombre: formData.get('nombre'),
		apellido: formData.get('apellido'),
		telefono: formData.get('telefono'),
		email: formData.get('email'),
		fecha: formData.get('fecha'),
		clave: formData.get('clave'),
	}

	nextStep()
}

/* STEP 3 */
window.pagar = () => {
	// const formPago = document.getElementById('formPago')
	// formPago.classList.add('was-validated')

	// if (!formPago.checkValidity()) return

	const modal = new bootstrap.Modal(document.getElementById('successModal'))
	modal.show()

	console.log(state)
}

window.irApp = () => {
	window.location.href = 'index.html'
}

/* INIT */
render()
