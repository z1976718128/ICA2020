$(function(){
    $("#menu ul li a").hover(function () { 
        $(this).addClass("bor")
    },function(){
        $(this).removeClass("bor")
    })
    $(".menuBtn").click(function () {
        $(".menuMove").slideDown()
        $("body").css({ "overflow-y": "hidden", "overflow-x": "hidden" })
    })
    $(".clone").click(function () {
        $(".menuMove").slideUp()
        $("body").css({ "overflow-y": "auto", "overflow-x": "hidden" })

    })
    $(".menuNav a").click(function () {
        $(".menuMove").slideUp()
        $("body").css({ "overflow-y": "auto", "overflow-x": "hidden" })
    })
    $(".navClass_head ul li .iconfont").hover(function(){
    	$(this).css({"font-size":"35px","transition":"all .1s ease"})	
    },function(){
    	$(this).css({"font-size":"30px"})	
    })
     $(".footer_right ul li .iconfont").hover(function(){
    	$(this).css({"font-size":"35px","transition":"all .1s ease"})	
    },function(){
    	$(this).css({"font-size":"30px"})	
    })
})