const videoRef = document.querySelector('.nosotros-video video')
console.log(videoRef)

document.addEventListener('DOMContentLoaded', (event) => {
	gsap.registerPlugin(ScrollTrigger)
	// gsap code here!
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '#clip',
			start: 'top top',
			end: '+=1500',
			scrub: 0.5,
			pin: true,
			onEnter: () => videoRef.play(),
			onEnterBack: () => videoRef.play(),
			onLeave: () => videoRef.pause(),
			onLeaveBack: () => videoRef.pause(),
			invalidateOnRefresh: true,
		},
	})

	tl.to(
		'.nosotros-video',
		{
			width: '100%',
			height: '100vh',
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
})
