var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos);
  if (currentScrollPos < 50){
    console.log('in this check')
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.top = "0";
  }
  else if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.transition = "0.4s linear";
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("navbar").style.backgroundColor = "#000"
  } 
  else {
    document.getElementById("navbar").style.top = "-80px";
    document.getElementById("navbar").style.transition = "0.4s linear";
    document.getElementById("navbar").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}
$('#slider1').owlCarousel({
    loop:true,
    margin:300,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true
        }
    }
})
$('.slider2').owlCarousel({
    loop:true,
    margin:200,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true
        }
    }
})