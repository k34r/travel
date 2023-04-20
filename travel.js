(function() {

	const burger = document.querySelector('.header__burger');
	const headernav = document.querySelector('.header__nav');
	const navclose = document.querySelector('.header__nav__close');
	const navElements = document.querySelectorAll('.header__nav__link');

	burger.addEventListener('click', function() {
		headernav.classList.add('header__nav__mobile');
	});

	navclose.addEventListener('click', function () {
		headernav.classList.remove('header__nav__mobile');
	});

	if(window.innerWidth < 768) {
		for (let i=0; i<navElements.length; i++ ) {
			navElements[i].addEventListener('click', function() {
				headernav.classList.remove('header__nav__mobile');
			});
		}
	}

}());

(function(){
	const header = document.querySelector('.header');

	window.onscroll = function() {
		if(window.pageYOffset > 100) {
			header.classList.add('header__active');
		} else {
			header.classList.remove('header__active');
		}
	}
}());

