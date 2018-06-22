$(function(){
//	计算滑动的时间
	var clearTime = null;
//	即将显示的页面
	var $index = 0;
//	当前显示的页面
	var $qiandex = 0;
	
//	当鼠标指针位于元素上方时，会发生 mouseover 事件
	$(".new li").mouseover(function(){
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
			
			if($index > 3){
				$index = 0;
//				$qiandex = 7;
			}
//			开始滑动
			scrollPlay();
			
			$qiandex = $index;
		},1000);
	}
	
	function scrollPlay(){
//		console.log("suhsiska");
		$(".new li").eq($index).addClass("thistab").siblings().removeClass("thistab");
//		向左移动

		if($index > $qiandex){
			$(".news_box_focus div").eq($qiandex).stop(true, true).animate({
				"left" : "-590px"
			});
			
			$(".news_box_focus div").eq($index).css("left","590px").stop(true, true).animate({
				"left" : "0"
			});
		}else if($index < $qiandex){
			$(".news_box_focus div").eq($qiandex).stop(true, true).animate({
				"left" : "590px"
			});
			
			$(".news_box_focus div").eq($index).css("left","-590px").stop(true, true).animate({
				"left" : "0"
			});
		}	
	}
});