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
