$(document).ready(function(){
    $('#slider').slick({
        /* Автоматическое перелистывание*/
        autoplay: true,
        /* Скорость автоматического пролистывания */
        autoplaySpeed: 8000,
        /* Включаем "точки" */
        dots: true,
        /* Выцветание слайдов */
        fade: true,
        /* Остановка слайдера при наведении на "точки" */
        pauseOnDotsHover: true,
        arrows: false
    });
});

$(document).ready(function(){
    $('#gallery-large').slick({
        fade: true,
        asNavFor: '#gallery-mini',
        arrows: false
    });
});

$(document).ready(function(){
    $('#gallery-mini').slick({
        /* Количество слайдов, показываемых одновременно */
        slidesToShow: 7,
        asNavFor: '#gallery-large',
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0
    });
});