/* 슬라이드 관련 스크립트 */
function slide(){
    
    /* 메인슬라이드 이동 스크립트 */
    var wid = 0; 
    var i = 0;
    var slide_length = 0; 
    
    function init(){ //초기화 작업
        wid = $(".slide").width(); 
        i = $(".img-indi > li.indi-on").index();
        slide_length = $(".img-indi>li").length;
    }

    
    function slideMove(){ //슬라이드 실행(왼쪽이동,인디케이터가 활성화되는 상태)
        $(".img-panel").animate({"margin-left": -wid * i});
        $(".img-indi>li").removeClass("indi-on");
        $(".img-indi>li").eq(i).addClass("indi-on");
    }
    
    
    function autoMove(){ //자동 실행(진짜 이동,진짜 활성화-인덱스를 찾아주는 함수)
        setInterval(function(){
            if(i == slide_length - 1){
                i = 0;
            }else{
                i++;
            }
            slideMove();
        },4000);
    }

    
    function indicator(){ //인디케이터를 클릭했을때(인덱스가 일치되서 활성화)
        $(".img-indi>li").click(function(){
            i = $(this).index();
            slideMove();
        });
    }

    
    function autoResize(){ //화면크기 재설정
        $(window).resize(function(){
            init();
            $(".img-panel").animate({"margin-left": -wid * i});
        });
    };


    init();
    autoMove();
    indicator();
    autoResize();
}

$(document).ready(function(){
    slide();
});



$(function(){
    setInterval(function(){
        $(".sec1-slide").animate({"marginLeft":"-460px"},
        function(){
            $(".sec1-slide>li:first").appendTo(".sec1-slide")
            $(this).addClass("section1-active")
            $(".sec1-slide").css({"marginLeft":"0px"})
        })
    },3000)
})
/* header 고정 */
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $("header").addClass("top-fixed");
        $("main").css("margin-top", "110px");
    }
    else {
        $("header").removeClass("top-fixed");
        $("main").css("margin-top", "0px");
    }
});