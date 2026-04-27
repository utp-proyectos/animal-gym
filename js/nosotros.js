export const aboutUsAnimation = () => {
	gsap.registerPlugin(ScrollTrigger)
	// gsap code here!
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '#clip',
			start: 'top top',
			end: '+=1200',
			scrub: 0.5,
			pin: true,
			invalidateOnRefresh: true,
		},
	})

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
		'.nosotros-video',
		{
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		},
		0
	)

	tl.to(
		'.nosotros-subtext',
		{
			opacity: 0,
			duration: 0.2,
		},
		0
	)

	tl.to(
		'body',
		{
			backgroundColor: '#0a0a0a',
			duration: 0.75,
		},
		0.2
	)
}
