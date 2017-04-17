	$(function(){
			$(".bottom-area nav a").bind('click',function(){
				$('.menu li span').removeClass('is-active');
				$(this).children().addClass('is-active');
			});

			var $li=$('.main-banner ul li');
			var i=0;
			var timer;

			function anim(){
				$li.eq(i).animate({opacity:'1'},1000).siblings().animate({opacity:'0'},1000);
				$('.main-banner>ol>li').eq(i).addClass('focus').siblings().removeClass('focus');
			}

			 window.onload=function(){
			 	anim();
			 	timer=setInterval(autoPlay,5000);

			 	//给予圆点点击事件
			 	$('.main-banner>ol>li').click(function(){
			 		i=$(this).index();
			 		anim();
			 	})
			 }
			 function autoPlay(){
			 	if(i<1){
			 		i++;
			 		anim();
			 	}else{
			 		i=0;
			 		anim();
			 	}
			 }
			 // 鼠标经过停止播放
			 $('.main-banner').mouseover(function(){
			 	clearInterval(timer);
			 })
			 // 鼠标离开自动播放
			 $('.main-banner').mouseout(function(){
			 	timer=setInterval(autoPlay,4000);
			 })
			 // 增加左按钮事件
			 $('.main-content .icon-prev').click(function(){
			 	clearInterval(timer);
			 	if(i==1){
			 		i=0;
			 		anim();
			 	}else{
			 		i=1;
			 		anim();
			 	}
			 })
			 // 增加右按钮事件
			 $('.main-content .icon-next').click(function(){
			 	if(i==0){
			 		i=1;
			 		anim();
			 	}else{
			 		i=0;
			 		anim();
			 	}
			 })
			 //回到顶部按钮
			 $(function(){
			 	$('.scroll-top-btn').click(function(){
				 	$('body,html').animate({scrollTop:0},1000);
				 	return false;
				 });
				 $(window).scroll(function(){
				 	if($(window).scrollTop()!=0){
				 		$('.nav-scroll').addClass('visible');
				 	}else{
				 		$('.nav-scroll').removeClass('visible');
				 	}
				 })

			 });


		})