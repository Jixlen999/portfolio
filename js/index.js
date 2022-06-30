const menu_btn = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu__list");

if (menu_btn && menu) {
	menu_btn.addEventListener("click", () => {
		menu_btn.classList.toggle("active");
		menu.classList.toggle("active");
	});
}
