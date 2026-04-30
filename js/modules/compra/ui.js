import { state } from './state.js'

const titles = {
	1: '<span>Selecciona</span> tu membresía',
	2: '<span>Completa</span> tu registro',
	3: '<span>Realiza</span> tu pago',
}

export function render() {
	document.querySelectorAll('.step').forEach((el) => el.classList.add('hidden'))

	document.querySelector(`#step-${state.step}`).classList.remove('hidden')

	const title = document.getElementById('main-title')
	title.innerHTML = titles[state.step]

	updateProgress()
}

function updateProgress() {
	document.querySelectorAll('.progress-step').forEach((el, i) => {
		el.classList.toggle('active', i < state.step)
	})
}
