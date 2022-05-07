/*
	🖥️Full-Stack Developer 🎨Graphic Designer 💸Freelancer

	👨‍💻Author : Nitin Chakraborty.

	🔗Facebook : https://www.facebook.com/NitinChakraborty2001/
	🔗Instagram : https://www.instagram.com/NitinChakraborty2001/
	🔗YouTube : http://www.youtube.com/c/NitinChakraborty2001/
	🔗LinkedIn : https://www.linkedin.com/in/NitinChakraborty2001/
	🔗Twitter : https://www.twitter.com/NitinCB2001/

	📧eMail : nitin.chakraborty13@gmail.com
*/

/* Menu */
const headerToggle = document.getElementById("header-toggle"),
	main = document.getElementById("main"),
	navClose = document.getElementById("nav-close");

/* Menu - Show (Validate If Constant Exists!) */
if (headerToggle) {
	headerToggle.addEventListener("click", () => {
		main.classList.add("show-menu");
	});
}

/* Menu - Hide (Validate If Constant Exists!) */
if (navClose) {
	navClose.addEventListener("click", () => {
		main.classList.remove("show-menu");
	});
}

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const main = document.getElementById("main");

	// When we click on each "nav__link", we remove the "show-menu" Class!
	main.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change Background Header
function scrollHeader() {
	const header = document.getElementById("header");

	// When the Scroll is greater than "50 Viewport Height", add the "scroll-header" Class to the Header Element!
	if (this.scrollY >= 50) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}

window.addEventListener("scroll", scrollActive);
