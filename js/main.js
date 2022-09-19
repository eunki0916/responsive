$(document).ready(function () {
    $('.allBtn').click(function () {
        $('nav').animate({ left: 0 }, 400 , 'swing');
    });

    $('nav button').click(function () {
        $('nav').animate({ left: -300 }, 200);
    });

    /* 화면사이즈조절시 style속성을 제거한다 */ 
    $(window).resize(function(){
        $('nav').removeAttr('style');
    });
});