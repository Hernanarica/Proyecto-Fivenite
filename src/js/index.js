const $menuOpen = document.querySelector('.header__menu .icon-hamburger');
const $menu     = document.querySelector('.header__mob');
const $search   = document.querySelector('.search ul');

$menuOpen.addEventListener('click', (e) => {
	if (e.target.classList.contains('icon-hamburger')) {
		console.log('hola');

		$search.style.display = 'flex';

		e.target.classList.remove('icon-hamburger');

		e.target.src = 'src/img/menu__close.svg';

		$menu.style.display = 'flex';
		setTimeout(() => {
			$menu.style.transform = 'translateX(0)';
		}, 50);
	} else {
		$search.style.display = 'none';

		e.target.classList.add('icon-hamburger');

		e.target.src = 'src/img/menu__open.svg';

		$menu.style.transform = 'translateX(-100%)';
		setTimeout(() => {
			$menu.style.display = 'none';
		}, 400);
	}
});
