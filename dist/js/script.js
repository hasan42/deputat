/*var w_h = $(window).height(), //высота окна
	w_w = $(window).width(), //ширина окна
	d_st = $(window).scrollTop(), //скролл окна
	//d_h = $(document).height(),
	hb_h = $(".header_block").height(), //высота хедера
	m_h = $(".main").height(), //высота мэйна
	nb_h = $(".news-block").outerHeight(); //высота новостей*/

function resize() {
	w_w = $(window).width();
	w_h = $(window).height();
	hb_h = $(".header_block").height();
	if( w_w > 768){ //десктоп - новости скроллом
		new_height = w_h - hb_h - 200;
		$(".news-block").slimScroll({
	        height: new_height
	    });
	    if( $(".news-block").hasClass('slick-initialized') ) { $(".news-block").slick('unslick'); }
	    hbIsIndex = $(".header_block").hasClass("header_block__index");//проверка на индексную страницу
	    if( !hbIsIndex ){ $(".header_block").addClass("cloud-fon"); }
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
		$(".header_block").removeClass("cloud-fon");
	}

}

$(window).scroll(function(){
	//скролл соц.блока, блока в биографии
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
		if( $(window).width() < 768 ){ $(".header_name").toggle(); }
	});
	$(".find-block input").blur(function() {//открытие поиска
		$(".find-block").toggleClass("find-block__open");
		if( $(window).width() < 768 ){ $(".header_name").toggle(); }
	});

	$(".menu_opener").click(function() {//открытие меню
		hbIsIndex = $(".header_block").hasClass("header_block__index");//проверка на индексную страницу
		$(".menu-block").toggleClass("menu-block__open");
		$(".menu_opener").toggleClass("menu_opener__open");
		if( (!hbIsIndex) && ($(window).width() > 768) ){
			$(".header_block").toggleClass("cloud-fon");
		}
	});

	$('.document-block').slick({//слайдер с документами
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

	$('.respect-block').masonry({//благодарности плиткой
		// options
		columnWidth: '.respect-sizer',
		itemSelector: '.respect-item',
		percentPosition: true,
		gutter: 30,
	});



});

