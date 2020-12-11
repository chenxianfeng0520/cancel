$(window).scroll(function() {
    if((40 - $(document).scrollTop()) < 0 ){
        $(".ss").css("top",'10px');
    } else {
        $(".ss").css("top",40 - $(document).scrollTop()+'px');
    }
    
})