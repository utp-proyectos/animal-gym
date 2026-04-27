export const aboutUsAnimation = () => {
	gsap.registerPlugin(ScrollTrigger)
	// gsap code here!
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '#clip',
			start: 'top top',
			end: '+=1500',
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
}
