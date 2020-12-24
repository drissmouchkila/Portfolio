$(document).ready(function (){
   $(window).scroll(function (){
       if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
       }else {
           $('.navbar').removeClass("sticky");
       }
       if (this.scrollY > 500){
           $('.scroll-up-btn').addClass("show");
       }else {
           $('.scroll-up-btn').removeClass("show");
       }
   });

   // typing animation script
    const typed = new Typed(".typing", {
        strings: ["front-end", "back-end", "Freelancer"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
    const typed2 = new Typed(".typing2", {
        strings: ["front-end", "back-end", "Freelancer"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

    // slide up script
    $('.scroll-up-btn').click(function (){
        $('html').animate({scrollTop: 0});
    });
   // toggle menu/navbar script
    $('.menu-btn').click(function (){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
