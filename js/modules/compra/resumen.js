import { state } from './state.js'

export function renderResumen() {
	document.querySelectorAll('.summary-card').forEach((card) => {
		card.querySelector('.plan-nombre').textContent = state.membresia ?? '-'
		card.querySelector('.plan-duracion').textContent = state.duracion
			? `${state.duracion} días`
			: '-'
		card.querySelector('.plan-cupos').textContent = state.cupos ?? '-'
		card.querySelector('.precio-regular').textContent = `S/. ${state.precio.toFixed(2)}`
		card.querySelector('.precio-descuento').textContent = `S/. 0.00`
		card.querySelector('.precio-total').textContent = `S/. ${state.precio.toFixed(2)}`
	})
}
