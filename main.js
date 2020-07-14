window.onload = function() {
	document.body.classList.remove("preload");

	const nav = document.querySelector(".nav");
	const navBtn = document.querySelector("#btnNav");
	const navOverlay = document.querySelector(".nav__overlay");
	const closeBtn = document.querySelector("#closeBtn");
	const navLinks = document.querySelectorAll(".nav__link");

	navBtn.addEventListener("click", () => {
		nav.classList.add("nav--open");
	});

	navOverlay.addEventListener("click", () => {
		nav.classList.remove("nav--open");
	});

	closeBtn.addEventListener("click", () => {
		nav.classList.remove("nav--open");
	});

	navLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			const active = document.querySelector(".nav__link--active");
			let elem = e.target;

			if (elem.nodeName === "I") {
				elem = e.target.parentElement;
			}

			active.classList.remove("nav__link--active");
			elem.classList.add("nav__link--active");
		});
	});
};
