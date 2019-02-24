$('.order_button').click(function () {
    $('ul#main-navbar > li').children('a').removeClass('active');
    $('#applform').addClass('active');
    $('#loaded_content').load('applform.html');
});