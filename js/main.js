import { initNavbarScroll } from './components/navbar.js'
import { aboutUsAnimation } from './nosotros.js'
document.addEventListener('DOMContentLoaded', () => {
	const isLanding = document.body.classList.contains('page-landing')
	const isCompra = document.body.classList.contains('page-compra')

	if (isLanding) {
		import('./membresia.js')
		import('./clases.js')

		initNavbarScroll()
		aboutUsAnimation()
		setTimeout(() => {
			AOS.init()
		}, 100)
	}

	if (isCompra) {
		import('./modules/compra/compra.js')
	}
})
