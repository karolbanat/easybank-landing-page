let burgerBtn, primaryNav;
let navLinks;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	burgerBtn = document.querySelector('.toggle-btn');
	primaryNav = document.querySelector('#primary-nav');
	navLinks = primaryNav.querySelectorAll('.navigation__nav-link');
};

const prepareDOMEvents = () => {
	burgerBtn.addEventListener('click', handleMobileNavigation);
	navLinks.forEach((link) => link.addEventListener('click', handleMobileNavigation));
};

const handleMobileNavigation = () => {
	primaryNav.toggleAttribute('data-expanded');

	if (primaryNav.hasAttribute('data-expanded')) {
		burgerBtn.setAttribute('aria-expanded', 'true');
		primaryNav.classList.add('fade-bottom-in');
		setTimeout(() => {
			primaryNav.classList.remove('fade-bottom-in');
		}, 350);
	} else {
		burgerBtn.setAttribute('aria-expanded', 'false');
	}
};

document.addEventListener('DOMContentLoaded', main);
