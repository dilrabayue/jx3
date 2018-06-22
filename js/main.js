$(function(){
//	计算滑动的时间
	var clearTime = null;
//	即将显示的页面
	var $index = 0;
//	当前显示的页面
	var $qiandex = 0;
	
//	当鼠标指针位于元素上方时，会发生 mouseover 事件
	$(".pagination li").mouseover(function(){
		clearInterval(clearTime);
		$index = $(this).index();
		
//		开始滑动
		scrollPlay();
//		把当前的赋值给下一次的前一个序列号
		$qiandex = $index;
	}).mouseout(function(){
//		当鼠标移开，继续轮播
		autoPlay();
	});
//	开始轮播
	autoPlay();
	//	第一次加载,强制计算下标
//	$(".select").eq($index).addClass("hover");
	
	function autoPlay(){
//		设置时间
		clearTime = setInterval(function(){
//			每次序列号+1
			$index++;
			
			if($index > 5){
				$index = 0;
//				$qiandex = 7;
			}
//			开始滑动
			scrollPlay();
			
			$qiandex = $index;
		},2000);
	}
	
	function scrollPlay(){
//		console.log("suhsiska");
		$(".pagination li").eq($index).addClass("current").siblings().removeClass("current");
//		向左移动

		if($index > $qiandex){
			$(".slides_control img").eq($qiandex).stop(true, true).animate({
				"left" : "-590px"
			});
			
			$(".slides_control img").eq($index).css("left","590px").stop(true, true).animate({
				"left" : "0"
			});
		}else if($index < $qiandex){
			$(".slides_control img").eq($qiandex).stop(true, true).animate({
				"left" : "590px"
			});
			
			$(".slides_control img").eq($index).css("left","-590px").stop(true, true).animate({
				"left" : "0"
			});
		}	
	}
});