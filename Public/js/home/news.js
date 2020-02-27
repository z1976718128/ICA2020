$(function(){
    $("#menu ul li a").hover(function () { 
        $(this).addClass("bor").siblings().removeClass("bor")
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
})