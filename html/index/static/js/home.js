$(function () {

    /**
     * @doc 右侧钉住栏显示隐藏
     * @author Heanes
     * @time 2018-09-28 15:53:49 周五
     */
    var $sidebarFixedHandle = $('.sidebar-fixed-handle');
    var $sidebarFixedHandlePosition = $sidebarFixedHandle.position();
    var showFullBgImage = $('.show-full-bg-image');
    var showFullBgImageHeight = showFullBgImage.height();
    var offsetThenShowHeight  = showFullBgImageHeight - $sidebarFixedHandlePosition.top;
    var scrollTop = 0;
    $(window).on('scroll', function () {
        let $this = $(this);
        scrollTop = $this.scrollTop();
        if(scrollTop < offsetThenShowHeight){
            $sidebarFixedHandle.hide();
        }else{
            $sidebarFixedHandle.show();
        }
    }).trigger('scroll');
});