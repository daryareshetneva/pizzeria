$(document).ready(function() {
    $('#loaded_content').load('home.html');
    $('ul#main-navbar > li > a').click(function () {
        var linkname = $(this).attr('id');
        var link = linkname + ".html";

        $('ul#main-navbar > li > a').removeClass('active');
        $(this).addClass('active');

        if (!($('#home').hasClass('active'))){
            $('ul#dropdown > li').css('display', 'none');
        }
        else $('ul#dropdown > li').css('display', '');

        $('#loaded_content').load(link);
    });

    $('ul#dropdown li > a').click(function () {
        //smoothAnchor
        let target = $(this).attr('href');
        let dist = $(target).offset().top;
        var header = $('#header').height();

        $('html, body').animate({'scrollTop': dist-header-10}, 1000);

        /* Если это мобильный режим, скрывать меню после нажатия на элемент */
        if ($(window).width() < 744)
            $("#navbar").css('display', 'none');
    });

    $('#brand').click(function () {
        $('ul#main-navbar > li').children('a').removeClass('active');
        $('#home').addClass('active');
        $('#loaded_content').load('home.html');
    });
});