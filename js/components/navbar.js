document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.querySelector('.navbar-main')
	let lastScroll = 0
	let ticking = false

	const updateNavbar = () => {
		const currentScroll = window.pageYOffset

		if (Math.abs(currentScroll - lastScroll) <= 10) {
			ticking = false
			return
		}

		if (currentScroll > lastScroll && currentScroll > 80) {
			navbar.classList.add('navbar-hidden')
		} else {
			navbar.classList.remove('navbar-hidden')
		}

		lastScroll = currentScroll <= 0 ? 0 : currentScroll
		ticking = false
	}

	window.addEventListener('scroll', () => {
		if (!ticking) {
			window.requestAnimationFrame(updateNavbar)
			ticking = true
		}
	})
})
