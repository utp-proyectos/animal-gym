import './membresia.js'
import './clases.js'
import { initNavbarScroll } from './components/navbar.js'
import { aboutUsAnimation } from './nosotros.js'
document.addEventListener('DOMContentLoaded', () => {
	initNavbarScroll()
	aboutUsAnimation()
	setTimeout(() => {
		AOS.init()
	}, 100)
})
