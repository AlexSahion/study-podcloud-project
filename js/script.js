//Burger Menu
const iconMenu = document.querySelector(".menu__icon")
const menuBody = document.querySelector(".menu__body")
if (iconMenu) {
	iconMenu.addEventListener('click', e => {
		document.body.classList.toggle("_lock")
		iconMenu.classList.toggle("_active")
		menuBody.classList.toggle("_active")
	})
}

new Swiper('.categories__slider', {
	slidesPerView: 'auto',
	freeMode: true,
	loop: true,

})

new Swiper('.shows__container', {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,
	breakpoints: {
		710: {
			slidesPerView: 2,
		}
	}
})

new Swiper('.about__slider', {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,
	breakpoints: {
		891: {
			slidesPerView: 2,
		}
	},
	navigation: {
		prevEl: '.about__prev',
		nextEl: '.about__next',
	},
})