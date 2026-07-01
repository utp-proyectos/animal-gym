export const aboutUsAnimation = () => {
	gsap.registerPlugin(ScrollTrigger)

	const tilt = 10
	let timeOutId = 0

	gsap.set('.nosotros-video', { transformPerspective: 1000 })

	const xAnim = gsap.to('.nosotros-video', {
		rotationX: 25,
		duration: 2,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut',
	})

	const yAnim = gsap.to('.nosotros-video', {
		rotationY: 25,
		duration: 2,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut',
		delay: 0.5,
	})

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '#clip',
			start: 'top top',
			end: '+=1200',
			scrub: 0.5,
			pin: true,
			invalidateOnRefresh: true,
			onEnter: () => {
				xAnim.pause()
				yAnim.pause()
				clearTimeout(timeOutId)
			},
			onLeaveBack: () => {
				timeOutId = setTimeout(() => {
					ScrollTrigger.refresh()
					xAnim.play()
					yAnim.play()
				}, 200)
			},
		},
	})

	tl.to(
		'.nosotros-video',
		{
			borderRadius: 0,
			duration: 0.2,
		},
		0.8
	)

	tl.to(
		'.nosotros-video',
		{
			rotateX: 0,
			rotateY: 0,
		},
		0
	)

	tl.to(
		'.nosotros-video',
		{
			width: '100%',
			height: '100dvh',
			top: 0,
			duration: 1,
		},
		0
	)

	tl.to(
		'.nosotros-subtext',
		{
			opacity: 0,
			duration: 0.2,
		},
		0.1
	)

	tl.to(
		'body',
		{
			backgroundColor: '#0a0a0a',
			duration: 0.8,
		},
		0.2
	)
}
