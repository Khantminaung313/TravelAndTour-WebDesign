let menu = document.querySelector(".navbar");
let bars = document.querySelector(".fa-bars");
bars.addEventListener("click", () => {
    menu.classList.toggle("nav-toggle");
    bars.classList.toggle("fa-times");
})


$(document).ready(function () {

    $(window).on("load scroll",function() {
        $(".fa-bars").removeClass("fa-times");
        $(".navbar").removeClass("nav-toggle")

        if($(window).scrollTop() > 30) {
            $("header").addClass("header-active");
        } else {
            $("header").removeClass("header-active");
        }

        $("section").each(function(){
            var id = $(this).attr("id");
            var height = $(this).height();
            var offset = $(this).offset().top-200;
            var top = $(window).scrollTop();
            if(top >= offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[data-scroll="${id}"]`).addClass('active');
            }
        })
    })
})