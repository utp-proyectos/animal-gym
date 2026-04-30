import { state } from './state.js'
import { render } from './ui.js'

export function nextStep() {
	state.step++
	render()
}

export function prevStep() {
	state.step--
	render()
}
