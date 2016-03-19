(function($) {
    "use strict";
    var defaults = {
        //变换的节奏
        sliding: 500,
        //隔几秒换一个图片
        timeOut: 2000,
        thisObj:null,
        touchPause:false,
        images:[]
    };
    $.fn.shuffing = function(array) {
        defaults.thisObj=this;
        defaults.thisObj.css("white-space", "nowrap");
        defaults.thisObj.css("overflow", "hidden");
        //img 标签集合
        //var imagehtmls = [];
        //循环创建节点
        for (var i = 0; i < array.images.length; i++) {
            var thisimage = array.images[i];
            var img = $("<img src='" + thisimage + "' style='height:100%;width:100%;'/>");
            defaults.thisObj.append(img);
        }
        var imgWidth = $(defaults.thisObj.find('img')[0]).width();

        setInterval(function() {
            defaults.thisObj.animate({
                scrollLeft: imgWidth + "px"
            }, array.sliding || defaults.sliding, function() {
                var first = array.images[0];
                //删除某一项
                array.images.splice(jQuery.inArray(first, array.images), 1);
                array.images.push(first);

                var images = defaults.thisObj.find('img');
                images.each(function(index, e) {
                    $(e).attr('src', array.images[index]);
                });
                defaults.thisObj.scrollLeft("0px");
            });
        }, array.timeOut || defaults.timeOut)
    }
})(jQuery)
