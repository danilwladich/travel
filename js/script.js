$('.slider').slick({
	arrows: true,
	dots: true,
	draggable: false,
	speed: 500,
});

const body = $('html, body');

function burgerMenuToggle() {
	burgerButton.classList.toggle('active');
	burgerBody.classList.toggle('active');
	bodyLock.classList.toggle('lock');
	body.animate({ scrollTop: 0 }, 500, 'swing');
};
function burgerMenuRemove() {
	burgerButton.classList.remove('active');
	burgerBody.classList.remove('active');
	bodyLock.classList.remove('lock');
};
const burgerButton = document.querySelector('.header__burger');
const burgerBody = document.querySelector('.header__menu');
const bodyLock = document.querySelector('body');
burgerButton.onclick = burgerMenuToggle;
$('.header__link').click(burgerMenuRemove);

document.addEventListener('click', function (event) {
	if (!event.target.closest('.header__menu') && !event.target.closest('.header__burger')) {
		burgerMenuRemove();
	};
});
