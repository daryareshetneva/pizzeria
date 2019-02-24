/* Функция, выполняющая плавное выпадение меню в мобильной версии */
$(document).ready(function () {
    $(".trigger").click(function () {
        $("#navbar").slideToggle(400);
    });
});

/* Функция, контролирующая размер окна и изменяющая отображение меню*/
$(document).ready(function () {
    controlWindowSize();
    $( window ).resize(function () {
        controlWindowSize();
    })
});

function controlWindowSize() {
    if ($(window).width() > 743) {
        $("#navbar").css('display', 'flex');
        if (($('#home').hasClass('active')))
            $('.dropdown-header').css('display', '');
    }
    else {
        $("#navbar").css('display', 'none');
        $(".dropdown-header").css('display', 'none');
    }
};