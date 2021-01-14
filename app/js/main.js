let burgerIcon = document.querySelector('.burger'),
		closeIcon = document.querySelector('.modal__close'),
    modalBcg = document.querySelector('.modal-bcg'),
    modal = document.querySelector('.modal'),
    searchIcon = document.querySelector('.search__btn'),
    form2 = document.querySelector('.form2');

searchIcon.onclick = function () {
	searchIcon.classList.toggle('active');
	form2.classList.toggle('active');
};

burgerIcon.onclick = function () {
	modalBcg.classList.add('active');
	modal.classList.add('active');
	document.classList.add('lock');
};

closeIcon.onclick = function () {
	modalBcg.classList.remove('active');
	modal.classList.remove('active');
	document.classList.remove('lock');
};