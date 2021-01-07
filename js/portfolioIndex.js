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
// send email
document.querySelector(".contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    // get input values
    let firstname = document.querySelector(".firstname").value;
    let lastname = document.querySelector(".lastname").value;
    let email = document.querySelector(".email").value;
    let number = document.querySelector(".number").value;
    let message = document.querySelector(".message").value;

    sendEmail(firstname, lastname, email, number, message);

    document.querySelector(".contactForm").reset();
}

function sendEmail(firstname, lastname, email, number, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'mouchkiladriss2014@gmail.com',
        Password: "ntvtwnztyiowwjdg",
        To: 'mouchkiladriss2014@gmail.com',
        From: 'mouchkiladriss2014@gmail.com',
        Subject: firstname + '  ' +  lastname + '  ' +  'send you Message from portfolio',
        Body: 'Bonjour: <br/>' +
            ' <br/> Name: ' + firstname + ' ' + lastname +
            ' <br/> Email: ' + email +
            ' <br/> number: ' + number +
            '<br/>  Message: <br/><br/> ' + message +
            '<br/>',
    }).then((message) => alert("mail sent successfully"));
}
