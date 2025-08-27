// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Preloader hide after load
window.addEventListener('load', () => {
	const preloader = document.getElementById('preloader');
	setTimeout(() => preloader.classList.add('hidden'), 600);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			observer.unobserve(entry.target);
		}
	});
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

// Parallax on mouse move (hero)
const parallax = document.querySelector('.parallax');
if (parallax) {
	document.addEventListener('mousemove', (e) => {
		const x = (e.clientX / window.innerWidth - 0.5) * 10;
		const y = (e.clientY / window.innerHeight - 0.5) * 10;
		parallax.style.transform = `translate(${x}px, ${y}px)`;
	});
}

// Fake form submit
const form = document.querySelector('.contact-form');
if (form) {
	form.addEventListener('submit', () => {
		const note = form.querySelector('.form-note');
		note.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
	});
}


