
// slick slider section
$('.cpca-slider-grid').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



// compear img plugin section

$(function(){
  $('.cpca-hero-right').beforeAfter();
});

$(function(){
  $('.cpca-slider-cmpr-imgs').beforeAfter();
});