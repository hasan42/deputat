var w_h = $(window).height(), //высота окна
	w_w = $(window).width(),
	//d_h = $(document).height(),
	d_st = $(window).scrollTop(),
	hb_h = $(".header_block").height(), //высота хедера
	m_h = $(".main").height(), //высота мэйна
	nb_h = $(".news-block").outerHeight(); //высота новостей

function resize() {
	
	if( w_w > 768){ //десктоп - новости скроллом
		new_height = w_h - hb_h - 200;
		$(".news-block").slimScroll({
	        height: new_height
	    });
	    if( $(".news-block").hasClass('slick-initialized') ) { $(".news-block").slick('unslick'); }
	}else{//мобильник - новости слайдером
		$(".news-block").slimScroll({ destroy:true });
		$(".news-block").slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
		});
		$(".news-block").css("height","auto");
	}

}

$(window).scroll(function(){
	if( $(window).height() - $(window).scrollTop() < 500) {
		if( $(window).width() > 768 ){
			$(".social-block").addClass("social-block__fixed");
			$(".bio-avatar").addClass("bio-avatar__fixed");
		}else{
			$(".social-block").removeClass("social-block__fixed");
			$(".bio-avatar").removeClass("bio-avatar__fixed");
		}
	}else{
		$(".social-block").removeClass("social-block__fixed");
		$(".bio-avatar").removeClass("bio-avatar__fixed");
	}
});

$(window).on("resize",function(){
    resize();
});
$(document).ready(function() {

	resize();

	$(".find_opener").click(function() {//открытие поиска
		$(".find-block").toggleClass("find-block__open");
		$(".find-block input").focus();
	});

	$(".menu_opener").click(function() {//открытие меню
		$(".menu-block").toggleClass("menu-block__open");
		$(".header_block").toggleClass("cloud-fon");
		/*if( w_w > 768){ //десктоп - новости скроллом
			w_h_mb = w_h - 86;
			$(".menu-block").css("height", w_h_mb+"px" );
		}else{
			$(".menu-block").css("height", w_h+"px" );
		}*/
	});

	$('.document-block').slick({
		infinite: false,
        slidesToShow: 3,
		slidesToScroll: 3,
        dots:true,
        arrows: false,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },{
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }]
    });

	$('.respect-block').masonry({
		// options
		columnWidth: '.respect-sizer',
		itemSelector: '.respect-item',
		percentPosition: true,
		gutter: 30,
	});



});

