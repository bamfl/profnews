$(function () {
	$('.burger').on('click', function () {
		$('.modal-bcg').addClass('modal-bcg__active');
		$('.modal').animate({"left": '0'});
		$('body').toggleClass('lock');
	});

	//Закрыть бургер меню по клику на ссылку, перетйти по ссылке
	$('.modal-bcg').click(function (event) {
		$('.modal-bcg').removeClass('modal-bcg__active');
		$('.modal').animate({"left": '-320px'});
		$('body').toggleClass('lock');
	});

	// кнопка поиска
	$('.search__btn').click(function(){
		$(this).toggleClass('search__btn__active');
		$('header .form').slideToggle(300);
	});


});