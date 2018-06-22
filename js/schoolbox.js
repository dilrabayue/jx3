$(function(){
	console.log("hhhh");
	$('.school_ul li').click(function (){
//		console.log("click li");
		var index = $(this).index();
		console.log(index);
		$('.school_ul li span').removeClass('block2');		
		$(this).find('span').addClass('block2').animate({"width":"50px"});
		$('.school_ul li a').css({
			"color": "#444"
		});
		$(this).find('a').css({
			"color": "#e86656"
		});
		
		$(".school_box").eq(index).addClass("sch_active").siblings().removeClass("sch_active");
	});
	
});