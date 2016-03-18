(function($) {
    "use strict";
    var defaults = {
        sliding: 500,
        timeOut: 2000
    };
    $.fn.shuffing = function(array) {
        this.css("white-space", "nowrap");
        this.css("overflow", "hidden");
        //img 标签集合
        //var imagehtmls = [];
        //循环创建节点
        for (var i = 0; i < array.images.length; i++) {
            var thisimage = array.images[i];
            var img = $("<img src='" + thisimage + "' style='height:100%;width:100%;'/>");
            this.append(img);
        }
        var imgWidth = $(this.find('img')[0]).width();

        var thisObj = this;

        setInterval(function() {
            thisObj.animate({
                scrollLeft: imgWidth + "px"
            }, array.sliding || defaults.sliding, function() {
                var first = array.images[0];
                //删除某一项
                array.images.splice(jQuery.inArray(first, array.images), 1);
                array.images.push(first);

                var images = thisObj.find('img');
                images.each(function(index, e) {
                    $(e).attr('src', array.images[index]);
                });
                thisObj.animate({
                    scrollLeft: 0 + "px"
                }, 0);
            });
        }, array.timeOut || defaults.timeOut)
    }
})(jQuery)
