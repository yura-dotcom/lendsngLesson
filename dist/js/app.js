

$(document).ready(function(){
  $('.slider_full').slick({
    infinite: false,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots : true,
    arrows : false
    
  });

  $('.slider_blog').slick({
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots : true,
    arrows : true
    
  });

  $('.slider_e').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1.7,
    // autoplay: true,
    arrows : false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

let accoItems = document.querySelectorAll('.accordion .item_head');
console.log(accoItems)
for(i=0;i<accoItems.length;i++){
  accoItems[i].onclick = accoToggle;
}
function accoToggle() {
  this.parentElement.classList.toggle('active_item');
}

let burger = document.querySelector('.nav span');
burger.onclick = toggleActive;

function toggleActive() {
	this.parentElement.classList.toggle('active');
}

$(window).scroll(function() {
  $('header').toggleClass('scroll', $(this).scrollTop() > 100);
});