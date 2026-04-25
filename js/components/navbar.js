export const initNavbarScroll = () => {
	const navbar = document.querySelector('.navbar-main')
	const btnBackToTop = document.getElementById('btnBackToTop')
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

		if (btnBackToTop) {
			if (currentScroll > 400) {
				btnBackToTop.style.display = 'block'
			} else {
				btnBackToTop.style.display = 'none'
			}
		}

		lastScroll = currentScroll <= 0 ? 0 : currentScroll
		ticking = false

		if (btnBackToTop) {
			btnBackToTop.addEventListener('click', () => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
			})
		}
	}

	window.addEventListener('scroll', () => {
		if (!ticking) {
			window.requestAnimationFrame(updateNavbar)
			ticking = true
		}
	})
}
