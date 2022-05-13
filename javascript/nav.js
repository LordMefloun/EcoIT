window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("ul").addClass("active");
    $("nav").css("margin-top", "0");
    $("#spacing").css("margin-top", "200px");
  } else {
    $("ul").removeClass("active");
    $("nav").css("margin-top", "10px");
    $("#spacing").css("margin-top", "0px");
  }

  reveal();
}

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('norm');
        }
        else{
            reveals[i].classList.remove('norm');
        }
    }
}