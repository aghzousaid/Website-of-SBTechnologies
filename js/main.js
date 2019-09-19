$(window).ready(function(){
    $('.menu-toggle').click(function(){
        //console.log(2);
        $('.main-nav').toggleClass('main-nav-open',500);
        $(this).toggleClass('open');
    });
});

$(document).ready(function() {
    $(".dropdown-btn").hover(function() {
        $("#bottomresmenu").css('margin-top', '17px');
    });
});

