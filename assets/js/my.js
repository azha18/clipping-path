(function($) {

    $(document).ready(function() {

        var cpca_switcher_data = [
            {
              position: 1,
              class: 'cpca-switcher-left',
              text: "10% offer after 500+ images"
            },
            {
              position: 2,
              class: 'cpca-switcher-middle',
              text: "20% offer after 1000+ images"
            },
            {
              position: 3,
              class: 'cpca-switcher-right',
              text: "30% offer after 2000+ images"
            },
        ];


        //switcher change for pricing
        $('.cpca-switcher').on('click', function(e) {
            var switcher_position = $(this).offset().left;
            var mouse_position = e.pageX;
            var current_pos = 1;


            if( mouse_position > switcher_position ) {
                var cursor_pos = mouse_position - switcher_position;
                var clicked_pos = (cursor_pos * 100) / 80;


                cpca_switcher_data.forEach(function(item) {
                
                    if( clicked_pos > 66.66 ) {
                        current_pos = 3;
                    } else if( clicked_pos < 33.33 ) {
                        current_pos = 1;
                    } else {
                        current_pos = 2;
                    }


                    //udpate the DOM
                    if( item.position === current_pos ) {
                        $('.cpca-switcher').removeClass("cpca-switcher-left cpca-switcher-middle cpca-switcher-right").addClass(item.class);
                        $('.cpca-pricing-wrapper .cpca-pricing-title p').text(item.text);
                    }

                });

            }

        });



        // slick slider section
        $('.cpca-slider-grid').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            draggable: false,
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

        // Slick slider for testomonial section

        $('.cpca-testimonial-grid').slick({
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



        // compare img plugin section
        $(function(){
            $('.cpca-hero-right').beforeAfter();
        });

        $(function(){
            $('.cpca-slider-cmpr-imgs').beforeAfter();
        });

    });


})(jQuery);





