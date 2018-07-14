$(function () {

    // 右侧sidebar工具栏
    var $goToTop = $('.go-to-top');
    var $goToBottom = $('.go-to-bottom');
    $goToTop.on('click', function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });

    $goToBottom.on('click', function () {
        var h = $(document).height() - $(window).height();
        $('body,html').animate({scrollTop: h}, 800);
    });
});