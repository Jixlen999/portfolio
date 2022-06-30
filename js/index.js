const menu_btn = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu__list");

if (menu_btn && menu) {
	menu_btn.addEventListener("click", () => {
		menu_btn.classList.toggle("active");
		menu.classList.toggle("active");
	});

	menu.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			menu.classList.toggle("active");
			menu_btn.classList.toggle("active");
		});
	});
}

const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach((anchor) => {
	anchor.addEventListener("click", (e) => {
		e.preventDefault();

		const blockID = anchor.getAttribute("href").substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
});

function createSelectedMenuItem(root) {
	const nav = root.querySelector("nav");

	root.querySelectorAll(".observe").forEach((section) => {
		new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					nav.querySelectorAll("a").forEach((link) => {
						link.classList.remove("active");
					});
					let id = entry.target.getAttribute("id");
					nav.querySelector(`a[href="#${id}"]`).classList.add("active");
				}
			});
		}, {}).observe(section);
	});
}

createSelectedMenuItem(document.querySelector(".page"));
