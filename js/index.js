
$.fn.classtimer = function () {
    var date = new Date();
    $(this).text(date.toLocaleString());
}

$(document).ready( function() {
    var scr = function(elem){
        $(window).scroll(function() {
                var top = $(this).scrollTop();
                if(top <= 200){
                    elem.attr("id","Header");
                }
                else{
                    elem.attr("id","Header-scrolling");
                }
                delete top;
            }
        )
    }
    scr($('#Header'));
});

setInterval(function(){
    $("#time").classtimer();
},1000);
