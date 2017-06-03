$(function(){
	//header中的全局搜索的图标效果
	$(document).on('focus','.d-header .d-g-search input',function(){
		$(this).siblings('.d-g-sear-icon').find('img').css('opacity','1');
	})
	
	$(document).on('blur','.d-header .d-g-search input',function(){
		$(this).siblings('.d-g-sear-icon').find('img').css('opacity','0.45');
	})
	
	
	
	//header中的一级导航切换
//	$(document).on('click','.d-header .d-nav li',function(){
//		$(this).siblings('li').removeClass('d-active');
//		$(this).addClass('d-active');
//	})
	//二级导航的切换
//	$(document).on('click','.d-content .d-ct-left li',function(){
//		$(this).siblings('li').removeClass('d-ct-active');
//		$(this).addClass('d-ct-active');
//	})
	
	//页面滚动后的导航效果
//	$(window).scroll(function(){
//		if($('.d-ct-content').offset().top-$(window).scrollTop()<=0){
//			$('.d-header').css({
//				'position':'fixed',
//				'top':'0',
//				'left':'0',
//				'z-index':'10'
//			})
////			$('.d-header').addClass('d-animation')
//		}else{
//			$('.d-header').css('position','initial');
//		}
//	})
//	
	//视图列表的内容的溢出隐藏
//	for(var i=0;i<$('.d-ct-view-list li p').length;i++){
//		var Dstr = $('.d-ct-view-list li p').eq(i).text();
//		if(Dstr.length>111){
//			Dstr = Dstr.substr(0,110);
//			$('.d-ct-view-list li p').eq(i).text(Dstr+'...');
//		}
//	}
	//详情页中的页面高度问题
	
//		var middleHeight = $('.d-ct-content').height();
//		var articleHeight = $('.d-ct-article').height();
//		var leftHeight = $('.d-ct-left').height();
//		console.log(middleHeight);
//		console.log(articleHeight)
//		if(middleHeight<articleHeight){
//			$('.d-ct-middle').height(articleHeight);
//		}
//	    if(middleHeight<articleHeight){
//			$('.d-ct-middle').height(articleHeight);
//		}

	//详情的悬浮
	$(document).on('mouseenter','.d-sidebar li .d-sideImg',function(){
		var imgArr = $(this).attr('src').split('/');
		var imgStr = imgArr[imgArr.length-1].substr(0,2);
		$(this).attr('src','../../images/'+imgStr+'_hover.png');
		if($(this).hasClass('d-side-code')){
			$('.d-sidebar li .d-code').css('display','block');
		}
	})
	$(document).on('mouseleave','.d-sidebar li .d-sideImg',function(){
		var imgArr = $(this).attr('src').split('/');
		var imgStr = imgArr[imgArr.length-1].substr(0,2);
		$(this).attr('src','../../images/'+imgStr+'.png');
		if($(this).hasClass('d-side-code')){
			$('.d-sidebar li .d-code').hide();
		}
	})
	//回到顶部
	$(document).on('click','.d-sidebar li .d-side-top',function(){
		$('body,html').animate({scrollTop:0},1000);
	})
	 $(window).scroll(function(){
        if ($(window).scrollTop()> $(window).height()){
            $(".d-sidebar li.d-top-show").fadeIn(500);
        }
        else
        {
            $(".d-sidebar li.d-top-show").fadeOut(500);
        }
    });
})
