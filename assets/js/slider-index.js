// Copyright 2010 htmldrive.net Inc.
/**
 * @projectHomepage: http://www.htmldrive.net/go/to/desSlideshow
 * @projectDescription: Stylish featured image slideshow jQuery plugin.
 * @author htmldrive.net
 * More script and css style : htmldrive.net
 * @version 1.0
 * @license http://www.apache.org/licenses/LICENSE-2.0
 */
(function(a){
    a.fn.desSlideshow=function(p){
        var p=p||{};

        var autoplay=p&&p.autoplay?p.autoplay:"enable";
        var slideshow_width=p&&p.slideshow_width?p.slideshow_width:"100";
        var slideshow_height=p&&p.slideshow_height?p.slideshow_height:"286";
        var thumbnail_width=p&&p.thumbnail_width?p.thumbnail_width:"26.5";
        var time_Interval = p&&p.time_Interval?p.time_Interval:"4000";
        var directory=p&&p.directory?p.directory:"assets/media/slider-index/";
        slideshow_height = parseInt(slideshow_height);
        slideshow_width = parseInt(slideshow_width);
        time_Interval = parseInt(time_Interval);
        var g=a(this);
        var current = -1;
        var y=g.children(".switchBigPic").children("div").length;
        var v;
        var w;
        if(y==0){
            g.append("Require content");
            return null
        }
        init();
        if(autoplay == "enable"){
            g.find(".switchBigPic").css("display","block");
            g.find(".nav").css("display","block");
            g.css("background","none");
            play();
        }else{
            g.find(".switchBigPic").css("display","block");
            g.find(".nav").css("display","block");
            g.css("background","none");
            current = 0;
            showpic();
        }
        g.find(".nav").children("li").hover(
            function(){
                var index = g.find(".nav").children("li").index($(this));
                if(index != current){
                    current = index;
                    showpic();
                }
            },
            function(){

            }
        );
        g.hover(
            function(){

            },
            function(){
                if(autoplay == "enable"){
                    v=setTimeout(play,time_Interval);
                }
            }
        );
        function init(){
            g.css("width",slideshow_width+"%").css("height",slideshow_height+"px").css("position","relative").css("font-family","Verdana,Geneva,sans-serif").css("overflow","hidden");
            g.find("a").css("color","#000");
            g.find("img").css("border","none");
            g.find("ul").css("margin","0px").css("padding","0px").css("overflow","initial");
            g.find("li").css("margin-bottom","8px").css("padding","0px").css("list-style","none");
            g.find(".switchBigPic").css("position","relative");
            g.find(".switchBigPic").children("div").css("position","absolute").css("overflow","hidden");
            g.find(".switchBigPic").children("div").children("p").css("position","absolute").css("padding","5px").css("margin","0px").css("margin-bottom","14px").css("bottom","0px").css("opacity","0.6").css("background-color","#000").css("color","#FFF").css("font-size","12px").css("width","100%");
            g.find(".nav").css("width",thumbnail_width+"%").css("height",slideshow_height+"px").css("position","absolute").css("right","0px").css("overflow","visible");
            g.find(".nav").children("li").css("min-height","36px").css("line-height","18px").css("padding","6px").css("color", "#000").css("font-size","87%").css("border-radius","6px");
            g.find(".nav").children("li").css("margin-left","0px");
            g.find(".switchBigPic").children("div").hide();
        }
        function showpic(){
            clearTimeout(v);
            g.find(".nav").children("li").css("background","#f4f4f4").css("border-bottom","1px solid #CCCCCC");
            g.find(".nav").children("li").eq(current).css("background","#26e026").css("border-bottom","none");
            g.find(".switchBigPic").children("div").fadeOut();
            g.find(".switchBigPic").children("div").eq(current).fadeIn();
            g.find(".nav").children("li").eq(current).animate({marginLeft: '-35px'}, "fast");
            g.find(".nav").children("li").eq(w).animate({marginLeft: '0px'}, "fast");
            w = current;

        }
        function play(){
            current++;
            if(current>=y){
                current=0
            }
            showpic();
            v=setTimeout(play,time_Interval);
        }
    }
})(jQuery);