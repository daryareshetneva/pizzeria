// Отправка заявки
// Код внутри $( document ).ready() будет выполняться немедленно после того, как объектная модель готова (DOM)  к использованию.
$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
        if (document.form.name.value == '' || document.form.email.value == '' || document.form.phone.value == ''){
            valid = false;
            return valid;
        }

		$.ajax({
			/*type: "POST",
			url: "mail.php",
			data: $(this).serialize()*/
		}).done(function() {
			// появление попапа
			$('.js-overlay-thank-you').fadeIn();
			// установка значения полей ввода как пустые
			$(this).find('input').val('');
			// сброс формы (удаление введеных значений, до первоначальных)
			$('#form').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    // проверяем, что клик был действительно вне попапа
	// первое условие, что клик был не по самому элементу с классом popup, то есть не по блоку
	// второе условие, что клик был не по вложенным элементам
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7 (999) 999-99-99");
});

