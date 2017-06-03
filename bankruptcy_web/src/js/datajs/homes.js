$(function(){
	//首页搜索
	$(".indexSearchNam").on("click",function(){
		var texts=$(this).prev().val();
		if(texts!=''){
			location.href="../searchList/list.html?keywords="+encodeURIComponent(encodeURIComponent(texts));
		}else{
			Base.alert("请输入搜索关键字！")
		}
		
	})
	$(".indexSearchInputNam").on("keydown",function(e){
		if(e.keyCode==13){
			var texts=$(this).val();
			if(texts!=''){
				location.href="../searchList/list.html?keywords="+encodeURIComponent(encodeURIComponent(texts));
			}else{
				Base.alert("请输入搜索关键字！")
			}
			
		}
	})
	//第一个轮播
    var mySwiperss = new Swiper('.swiper-container-nam',{//首页第一屏轮播
			loop:true,
			autoplay : 5000,
			speed:0,
//			direction: 'vertial',
//			virtualTranslate : true,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',	
			autoplayDisableOnInteraction: false,
			paginationClickable :true,
			pagination: '.swiper-pagination-nam',
			onSlideChangeStart: function(swiper){

			$(".swiper-container-nam .swiper-slide .swiper-titlem").removeClass("fadeInUp").css("opacity","0");
			$(".swiper-container-nam .swiper-slide .swiper-text-nam").removeClass("fadeInUp").css("opacity","0");
			$(".swiper-container-nam .swiper-slide .swiper-view-nam").removeClass("fadeInUp").css("opacity","0");
			$(".swiper-container-nam .swiper-slide .swiper-title-nam").removeClass("fadeOutDown");
			$(".swiper-container-nam .swiper-slide .swiper-text-nam").removeClass("fadeOutDown");
			$(".swiper-container-nam .swiper-slide .swiper-view-nam").removeClass("fadeOutDown");
			$(".swiper-container-nam .swiper-slide .ImgBook img").removeClass("aa").css("opacity","0");
			  $(".swiper-container-nam .swiper-slide").eq(swiper.activeIndex).find(".swiper-title-nam").addClass("fadeInUp"); 
			  
			  setTimeout(function(){
				  $(".swiper-container-nam .swiper-slide").eq(swiper.activeIndex).find(".swiper-text-nam").addClass("fadeInUp");

			  },300);
			  setTimeout(function(){
				  $(".swiper-container-nam .swiper-slide").eq(swiper.activeIndex).find(".swiper-view-nam").addClass("fadeInUp");
			  },500);
			  $(".swiper-container-nam .swiper-slide").eq(swiper.activeIndex).find(".ImgBook img").addClass("aa");
		   }

		});
        $(".swiper-container-nam .swiper-slide").eq(0).find(".swiper-title-nam").addClass("fadeInUp"); 
	
		  setTimeout(function(){
			  $(".swiper-container-nam .swiper-slide").eq(0).find(".swiper-text-nam").addClass("fadeInUp");

		  },300);
		  setTimeout(function(){
			  $(".swiper-container-nam .swiper-slide").eq(0).find(".swiper-view-nam").addClass("fadeInUp");
		  },500);
		   $(".swiper-container-nam .swiper-slide").eq(0).find(".ImgBook img").addClass("aa");

		//第四版块
		$(".subcontentHoverBefor").css("height",$(".y-fourthSection").height()-166+"px")
		$(".subcontentHoverBefor").hover(function(){//.addClass("movedown2").removeClass("moveup2")
			$(this).find(".resultImgNam").addClass("moveup").removeClass("movedown");
			$(this).find(".resultContentNam").css("opacity","0").addClass("moveupcontent").removeClass("movedowncontent");
			var that = $(this);
			$(this).find(".resultTitleNam").addClass("movetitledown").removeClass("movetitleup");
			that.find(".resultMoreNam").css("opacity","0").addClass("movemoreup").removeClass("movemoredown");
		},function(){
			$(this).find(".resultImgNam").addClass("movedown").removeClass("moveup");
			$(this).find(".resultMoreNam").addClass("movemoredown").removeClass("movemoreup").css("opacity","0");
			var that = $(this);
			that.find(".resultTitleNam").show().addClass("movetitleup").removeClass("movetitledown");
			that.find(".resultContentNam").addClass("movedowncontent").removeClass("moveupcontent").css("opacity","0");
			
		});
		//第四版结束
		
		//第五版hover
		$(document).on("mouseenter",".img-list",function(){
//			alert(1)
			$(this).find(".squares").addClass("inzoom").removeClass("outzoom");
			$(this).find(".newMoreNam").addClass("moveup3").removeClass("movedown3");
		});
		$(document).on("mouseleave",".img-list",function(){
			$(this).find(".squares").addClass("outzoom").removeClass("inzoom");
			$(this).find(".newMoreNam").addClass("movedown3").removeClass("moveup3");
		});

		// $('.d-nav li').each(function(index){
		// 	// console.log(swiperIndex);
		// 	// $($('.d-nav li')[swiperIndex]).siblings().removeClass('d-active');
		// 	// $($('.d-nav li')[swiperIndex]).addClass('d-active');
		// 	$(this).click(function(){
		// 		// console.log(index);
		// 		swiper.slideTo(index+1,1000,true);
		// 		$(this).siblings().removeClass('d-active');
		// 		$(this).addClass('d-active');	
		// 	});
		// });	

		
		//回到顶部
		$('.backTop').click(function(){
			
			$('body,html').animate({scrollTop:0},500);
		});
		$('.arrow').addClass('movedown4');
	
		$('.arrow').css('color','#979797');
		// var swiper = new Swiper('.swiper-container', {//整个swiper
		// 	// pagination: '.swiper-container-v',
		// 	direction: 'vertical',
		// 	slidesPerView: 1,
		// 	paginationClickable: true,
		// 	spaceBetween: 30,
		// 	mousewheelControl: true,
		// 	onSlideChangeStart:function(swiper){
		// 		$('.back').on('click',function(){
		// 			$(this).addClass('backHover');
		// 			swiper.slideTo(0,500);
		// 		});
				
		// 		var swiperIndex=swiper.activeIndex;
				
		// 		$(".d-nav li:not('.d-nav li:last-child')").each(function(index){
					
		// 			$($('.d-nav li')[swiperIndex-1]).siblings().removeClass('d-active');
		// 			$($('.d-nav li')[swiperIndex-1]).addClass('d-active');
		// 			$(this).click(function(){					
		// 			});
		// 		});		
		// 		switch(swiperIndex){
		// 			case 0:
		// 			$('.arrow').css('color','#979797');
		// 			$('.back').find('i').css('color','#e71111');
		// 			$('.y-secondSection .arrow').addClass('movedown4');
		// 			$('.back').hide();
					
		// 			break;
		// 			case 1:
		// 			$('.back').show();
		// 			$('.arrow').css('color','#979797');
		// 			$('.back').find('i').css('color','#e71111');
		// 			$('.y-thirdSection .arrow').addClass('movedown4');
					
		// 			break;
		// 			case 2:
		// 			$('.back').show();
		// 			$('.arrow').css('color','#fff');
		// 			$('.back').find('i').css('color','#fff');
		// 			$('.y-fourthSection .arrow').addClass('movedown4');
		// 			break;
					
		// 			case 3:
		// 			$('.back').show();
		// 			$('.arrow').css('color','#979797');
		// 			$('.back').find('i').css('color','#e71111');
		// 			$('.y-fifthSection .arrow').addClass('movedown4');
					
		// 			setTimeout(function(){
		// 				$('.y-fifthSection .content .content-lt ul li').eq(0).find('span').addClass("fadeInLeft");
		// 			},150);
		// 			setTimeout(function(){
		// 				$('.y-fifthSection .content .content-lt ul li').eq(1).find('span').addClass("fadeInLeft");
		// 			},300);
		// 			setTimeout(function(){
		// 				$('.y-fifthSection .content .content-lt ul li').eq(2).find('span').addClass("fadeInLeft");
		// 			},450);
		// 			setTimeout(function(){
		// 				$('.y-fifthSection .content .content-lt ul li').eq(3).find('span').addClass("fadeInLeft");
		// 			},600);
		// 			setTimeout(function() {
		// 				$('.y-fifthSection .content .content-rt .imgList .img-list').eq(0).addClass('fadeInRight');
		// 			},150);
		// 			setTimeout(function() {
		// 				$('.y-fifthSection .content .content-rt .imgList .img-list').eq(1).addClass('fadeInRight');
		// 			},300);
		// 			setTimeout(function() {
		// 				$('.y-fifthSection .content .content-rt .imgList .img-list').eq(2).addClass('fadeInRight');
		// 			},450);
		// 			setTimeout(function(){
		// 				$('.y-fifthSection .content .content-rt .text .textImg').addClass('fadeInUp');
		// 			},150);
		// 			setTimeout(function(){
		// 				$('.y-fifthSection .content .content-rt .text h4').addClass('fadeInUp');
		// 			},300);
		// 			setTimeout(function(){
		// 				$('.y-fifthSection .content .content-rt .text p').addClass('fadeInUp');
		// 			},450);
		// 			setTimeout(function(){
		// 				$('.y-fifthSection .content .content-rt .text a').addClass('fadeInUp');
		// 			},300);
		// 			setTimeout(function() {
		// 				$('.y-sixSection').stop(true, false)
		// 			},500);
					
		// 			break;
		// 			case 4:
		// 			$('.arrow').css('color','#979797');
		// 			$('.back').show();
		// 			$('.back').find('i').css('color','#e71111');
		// 			$('.y-sixSection .arrow').addClass('movedown4');
		// 			//清除第四瓶动画
					
		// 			// $('.y-fifthSection .content .content-lt ul li span').removeClass("fadeInLeft");
		// 			// $('.y-fifthSection .content .content-rt .imgList .img-list').removeClass('fadeInRight');
		// 			// $('.y-fifthSection .content .content-rt .text').find().removeClass('fadeInUp');
				
		// 			$('.y-sixSection .content .subcontent').eq(0).addClass('fadeInLeft');
		// 			$('.y-sixSection .content .subcontent').eq(1).addClass('fadeInRight');

		// 			break;
					
		// 			// $('.y-sixSection .content .subcontent').eq(0).removeClass('fadeInLeft');
		// 			// $('.y-sixSection .content .subcontent').eq(1).removeClass('fadeInRight');//清除第五瓶动画
		// 			case 5:
		// 			$('.back').show();
		// 			$('.arrow').css('color','#fff');
		// 			$('.back').find('i').css('color','#fff');
		// 			$('.y-sevenSection .arrow').addClass('movedown4');
		// 			break;
		// 			case 6:
		// 			$('.back').show();
		// 			$('.arrow').css('color','#979797');
		// 			$('.back').find('i').css('color','#e71111');
		// 			$('.y-eighthSection .arrow').hide();
		// 			break;
		// 		};
		// 		switch(swiper.previousIndex){
		// 			case 0:
		// 			$('.y-secondSection .arrow').removeClass('movedown4');
		// 			break;
		// 			case 1:
		// 			$('.y-thirdSection .arrow').removeClass('movedown4');
		// 			break;
		// 			case 2:
		// 			$('.y-fourthSection .arrow').removeClass('movedown4');
		// 			break;
		// 			case 3:
		// 			$('.y-fifthSection .arrow').removeClass('movedown4');
		// 			$('.y-fifthSection .content .content-lt ul li span').removeClass("fadeInLeft");
		// 			$('.y-fifthSection .content .content-rt .imgList .img-list').removeClass('fadeInRight');
		// 			$('.y-fifthSection .content .content-rt .text').find('h4').removeClass('fadeInUp');
		// 			$('.y-fifthSection .content .content-rt .text').find('p').removeClass('fadeInUp');
		// 			$('.y-fifthSection .content .content-rt .text').find('.textImg').removeClass('fadeInUp');
		// 			$('.y-fifthSection .content .content-rt .text').find('a').removeClass('fadeInUp');
		// 			break;
		// 			case 4:
		// 			$('.y-sixSection .arrow').removeClass('movedown4');
		// 			$('.y-sixSection .content .subcontent').eq(0).removeClass('fadeInLeft');
		// 			$('.y-sixSection .content .subcontent').eq(1).removeClass('fadeInRight');
		// 			break;
		// 			case 5:
		// 			$('.y-sevenSection .arrow').removeClass('movedown4');
		// 			break;
		// 			case 6:
		// 			$('.y-eighthSection .arrow').removeClass('movedown4');
		// 			break;
		// 		};		
		// 	}
		// });
// 		$('.common').each(function(index){
// //			console.log(index);
// 			$(this).find('.arrow').click(function(){
// 				swiper.slideTo(index+1,500);
// 			});
// 		});
		
		//第一屏伸缩
		$(".subcontent:not(.nohovernam)").hover(function(){
			$(this).find(".sub").css({
//				"opacity":"0.5",
				"animation":"shen2 0.3s forwards"
				});
			$(this).find(".subcontent-rt").css("animation","suo 0.3s forwards");
		},function(){
			$(this).find(".sub").css({
//				"opacity":"1",
				"animation":"suo2 0.3s forwards"
			});
			$(this).find(".subcontent-rt").css("animation","shen 0.3s forwards");
		});
		//法律文本伸缩
		$('.y-sevenSection .subSlide .content .subContent:not(.nohovers)').hover(function(){
			$(this).find('.more').css("animation","suo 0.5s forwards");
			$(this).find('.moreLinkNam').addClass("fadeinNam").removeClass("fadeOutNam");
			$(this).find('.content-lt').css("background",'rgba(231,17,17,0.71)');
		},function(){
			$(this).find('.more').css("animation","shen 0.5s forwards");
			$(this).find('.moreLinkNam').addClass("fadeOutNam").removeClass("fadeinNam");
			$(this).find('.content-lt').css("background",'none');
		});

	$('.y-fifthSection').on("mouseenter",".content .content-lt ul li",function(){
		var indexs=$(this).index();
		var that=$(this);
		$('.y-fifthSection .content .content-lt ul li').each(function(index){
			if($(this).attr("data-nam-id")==0){
				$(this).find("span").addClass("leftmovenam").removeClass("rightmovenam").removeClass("fadeInLeft").css("opacity","1");
				$(this).find("a").addClass("shenleftnam").removeClass("shenrightnam");
			}else if($(this).attr("data-nam-id")==1){
				if(index==indexs){
					$(this).find("span").addClass("leftmovenam").removeClass("rightmovenam").removeClass("fadeInLeft").css("opacity","1");
					$(this).find("a").addClass("shenleftnam").removeClass("shenrightnam").css("opacity","1");
				}else{
					$(this).find("span").removeClass("leftmovenam").removeClass("rightmovenam");
					$(this).find("a").removeClass("shenleftnam").removeClass("shenrightnam");	
				}
			}
//			else{
////				alert(2)
//				that.parent().find("span").removeClass("leftmovenam").removeClass("rightmovenam");
//				that.parent().find("a").removeClass("shenleftnam").removeClass("shenrightnam");
//				
//				that.find("span").addClass("leftmovenam").removeClass("fadeInLeft").css("opacity","1");
//				that.find("a").addClass("shenleftnam");
//			}
		})
		
	})
	$('.y-fifthSection').on("mouseleave",".content .content-lt ul li",function(){
		var indexs=$(this).index();
		var that=$(this);
		$('.y-fifthSection .content .content-lt ul li').each(function(index){
			if($(this).attr("data-nam-id")==0){
				$(this).find("span").addClass("leftmovenam").removeClass("rightmovenam").removeClass("fadeInLeft").css("opacity","1");
				$(this).find("a").addClass("shenleftnam").removeClass("shenrightnam");
			}else if($(this).attr("data-nam-id")==1){
				if(index==indexs){
					$(this).find("span").addClass("rightmovenam").removeClass("leftmovenam");
					$(this).find("a").addClass("shenrightnam").removeClass("shenleftnam");
				}else{
					$(this).find("span").removeClass("leftmovenam").removeClass("rightmovenam");
					$(this).find("a").removeClass("shenleftnam").removeClass("shenrightnam");	
				}
			}
//			else{
//				that.parent().find("span").removeClass("rightmovenam").removeClass("leftmovenam");
//				that.find("span").addClass("rightmovenam");
//				that.parent().find("a").removeClass("shenrightnam").removeClass("shenleftnam");
//				that.find("a").addClass("shenrightnam");
//			}
		})
		
	})

		var $a=$(".buttons a");
			var $s=$(".buttons span");
			var cArr=["p7","p6","p5","p4","p3","p2","p1"];
			var index=0; 
			$(".next").click(
				function(){
				nextimg();
				}
			)
			$(".prev").click(
				function(){
				previmg();
				}
			)
			//上一张
			
			function previmg(){
				
				cArr.unshift(cArr[6]);
				cArr.pop();
				//i是元素的索引，从0开始
				//e为当前处理的元素
				//each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
				// $(".content-carousel li").hide();
				$(".content-carousel li").each(function(i,e){
					$(e).removeClass().addClass(cArr[i]);
				})
				index--;
				if (index<0) {
					index=6;
				}
				show();
			}

			//下一张
			function nextimg(){
				
				cArr.push(cArr[0]);
				cArr.shift();
				$(".content-carousel li").each(function(i,e){
					$(e).removeClass().addClass(cArr[i]);
				})
				index++;
				if (index>6) {
					index=0;
				}
				show();
			}

			//通过底下按钮点击切换
			$a.each(function(){
				$(this).click(function(){
					var myindex=$(this).index();
					var b=myindex-index;
					if(b==0){
						return;
					}
					else if(b>0) {
						/*
						 * splice(0,b)的意思是从索引0开始,取出数量为b的数组
						 * 因为每次点击之后数组都被改变了,所以当前显示的这个照片的索引才是0
						 * 所以取出从索引0到b的数组,就是从原本的这个照片到需要点击的照片的数组
						 * 这时候原本的数组也将这部分数组进行移除了
						 * 再把移除的数组添加的原本的数组的后面
						 */
						var newarr=cArr.splice(0,b);
						cArr=$.merge(cArr,newarr);
						$(".content-carousel li").each(function(i,e){
						$(e).removeClass().addClass(cArr[i]);
						})
						index=myindex;
						show();
					}
					else if(b<0){
						/*
						 * 因为b<0,所以取数组的时候是倒序来取的,也就是说我们可以先把数组的顺序颠倒一下
						 * 而b现在是负值,所以取出索引0到-b即为需要取出的数组
						 * 也就是从原本的照片到需要点击的照片的数组
						 * 然后将原本的数组跟取出的数组进行拼接
						 * 再次倒序,使原本的倒序变为正序
						 */
						cArr.reverse();
						var oldarr=cArr.splice(0,-b)
						cArr=$.merge(cArr,oldarr);
						cArr.reverse();
						$(".content-carousel li").each(function(i,e){
						$(e).removeClass().addClass(cArr[i]);
						})
						index=myindex;
						show();
					}
				})
			})

			//改变底下按钮的背景色
			function show(){
					$($s).eq(index).addClass("blue").parent().siblings().children().removeClass("blue");
			}

			//点击class为p2的元素触发上一张照片的函数
			$(document).on("click",".p2",function(){
				previmg();
				return false;//返回一个false值，让a标签不跳转
			});

			//点击class为p4的元素触发下一张照片的函数
			$(document).on("click",".p4",function(){
				nextimg();
				return false;
			});

//			鼠标移入box时清除定时器
			$(".box").mouseover(function(){
				clearInterval(timer);
			})

//			鼠标移出box时开始定时器
			$(".box").mouseleave(function(){
				timer=setInterval(nextimg,4000);
			})

//			进入页面自动开始定时器
			timer=setInterval(nextimg,4000);


//新闻资讯内容切换
$('.y-fifthSection .content .content-lt ul li').each(function(index){
//	console.log($(this));
	$('.y-fifthSection .content .content-rt').hide();
	$('.y-fifthSection .content .content-rt').eq(0).show();
	$(this).on('click',function(){
		$('.y-fifthSection .content .content-rt').hide();
		$('.y-fifthSection .content .content-rt').eq(index).show();
		$(this).attr("data-nam-id","0").siblings().attr("data-nam-id","1");
		$('.y-fifthSection .content .content-rt .img-list').removeClass('fadeInRight');
		$('.y-fifthSection .content .content-rt .text .textImg').removeClass('fadeInUp');
		$('.y-fifthSection .content .content-rt .text h4').removeClass('fadeInUp');
		$('.y-fifthSection .content .content-rt .text p').removeClass('fadeInUp');
		$('.y-fifthSection .content .content-rt .text a').removeClass('fadeInUp');
		setTimeout(function(){
			$('.y-fifthSection .content .content-rt .text .textImg').addClass('fadeInUp');
		},150);
		setTimeout(function(){
			$('.y-fifthSection .content .content-rt .text h4').addClass('fadeInUp');
		},300);
		setTimeout(function(){
			$('.y-fifthSection .content .content-rt .text p').addClass('fadeInUp');
		},450);
		setTimeout(function(){
			$('.y-fifthSection .content .content-rt .text a').addClass('fadeInUp');
		},300);
		setTimeout(function(){
			$('.y-fifthSection .content .content-rt').eq(index).find('.img-list:eq(0)').addClass('fadeInRight');
		},150);
		setTimeout(function(){
			$('.y-fifthSection .content .content-rt').eq(index).find('.img-list:eq(1)').addClass('fadeInRight');
		},300);
		setTimeout(function(){
			$('.y-fifthSection .content .content-rt').eq(index).find('.img-list:eq(2)').addClass('fadeInRight');
		},450);
//		$('.y-fifthSection .content .content-rt').hide();
//		$('.y-fifthSection .content .content-rt').eq(index).show();
//		$(this).find('span').removeClass('bindClick');
//		$(this).find('span').stop(true, true).animate({left:'32%'},300);
//		$(this).find('span').next().css("animation","suo 0.3s forwards");
		
		// $(this).find('span').unbind('hover');
		// $(this).find('span').next().unbind('hover');
		$(this).parent().find("span").removeClass("rightmovenam").removeClass("leftmovenam");
		$(this).parent().find("a").removeClass("shenleftnam").removeClass("shenrightnam");
		$(this).find("a").addClass("shenleftnam");
		$(this).find("span").addClass("leftmovenam").removeClass("fadeInLeft").css("opacity","1");
	})
});


$('.d-header .d-wrapp .d-nav li').click(function(e){
	$(this).siblings().removeClass('d-active');
	$(this).addClass('d-active');
});
//导航敬请期待禁用
$('.d-header .d-wrapp .d-nav li:last-child').find('a').click(function(e){
	return false;
	e.preventDefault();
});
	$(window).scroll(function(){

		// console.log($(window).scrollTop());
		var fifheightTop = $('.y-fifthSection .title').offset().top-650;	
		var fifheightBottom = $('.y-sixSection .title').offset().top-300;	

		if($(window).scrollTop()>fifheightTop){
			//新闻咨询动画
//			setTimeout(function(){
//				$('.y-fifthSection .content .content-lt ul li').eq(0).find('span').addClass("fadeInLeft");
//			},150);
			setTimeout(function(){
				$('.y-fifthSection .content .content-lt ul li').eq(1).find('span').addClass("fadeInLeft");
			},150);
			setTimeout(function(){
				$('.y-fifthSection .content .content-lt ul li').eq(2).find('span').addClass("fadeInLeft");
			},300);
			setTimeout(function(){
				$('.y-fifthSection .content .content-lt ul li').eq(3).find('span').addClass("fadeInLeft");
			},600);
			setTimeout(function() {
				$('.y-fifthSection .content .content-rt .imgList .img-list').eq(0).addClass('fadeInRight');
			},150);
			setTimeout(function() {
				$('.y-fifthSection .content .content-rt .imgList .img-list').eq(1).addClass('fadeInRight');
			},300);
			setTimeout(function() {
				$('.y-fifthSection .content .content-rt .imgList .img-list').eq(2).addClass('fadeInRight');
			},450);
			setTimeout(function(){
				$('.y-fifthSection .content .content-rt .text .textImg').addClass('fadeInUp');
			},150);
			setTimeout(function(){
				$('.y-fifthSection .content .content-rt .text h4').addClass('fadeInUp');
			},300);
			setTimeout(function(){
				$('.y-fifthSection .content .content-rt .text p').addClass('fadeInUp');
			},450);
			setTimeout(function(){
				$('.y-fifthSection .content .content-rt .text a').addClass('fadeInUp');
			},300);
			setTimeout(function() {
				$('.y-sixSection').stop(true, false)
			},500);
			
		}
		var sixheightTop = $('.y-sixSection .title').offset().top-400;
		var sixheightBottom = $('.y-sevenSection .title').offset().top-300;
		if($(window).scrollTop()>2600){
			$('.y-sixSection .content .subcontent').eq(0).addClass('fadeInLeft');
			$('.y-sixSection .content .subcontent').eq(1).addClass('fadeInRight');
		}


		// $('.d-header .d-wrapp .d-nav li').each(function(){
			$('.arrow').show();
			$('.backTop').hide();
			// $('.d-header .d-wrapp .d-nav li').removeClass('d-active');
			if($(window).scrollTop()>thirdHeight-10&&$(window).scrollTop()<fourHeight){
				$('.backTop').show();
				$('.d-header .d-wrapp .d-nav li').removeClass('d-active');		
				$('.d-header .d-wrapp .d-nav li').eq(0).addClass('d-active');
			}else if($(window).scrollTop()>fourHeight-10&&$(window).scrollTop()<fifHeight){
				$('.backTop').show();
				$('.d-header .d-wrapp .d-nav li').removeClass('d-active');
				$('.d-header .d-wrapp .d-nav li').eq(1).addClass('d-active');
			}else if($(window).scrollTop()>fifHeight-10&&$(window).scrollTop()<sixHeight){
				$('.backTop').show();
				$('.d-header .d-wrapp .d-nav li').removeClass('d-active');
				$('.d-header .d-wrapp .d-nav li').eq(2).addClass('d-active');
			}else if($(window).scrollTop()>sixHeight-10&&$(window).scrollTop()<sevenHeight){
				$('.backTop').show();
				$('.d-header .d-wrapp .d-nav li').removeClass('d-active');
				$('.d-header .d-wrapp .d-nav li').eq(3).addClass('d-active');
			}else if($(window).scrollTop()>sevenHeight-10&&$(window).scrollTop()<eightHeight){
				$('.backTop').show();
				$('.d-header .d-wrapp .d-nav li').removeClass('d-active');
				
				$('.d-header .d-wrapp .d-nav li').eq(4).addClass('d-active');
			}else if($(window).scrollTop()>eightHeight-100){
				$('.backTop').show();
				$('.d-header .d-wrapp .d-nav li').removeClass('d-active');
				$('.arrow').hide();
				$('.d-header .d-wrapp .d-nav li').eq(5).addClass('d-active');
			}	
	});
		var twoHeight = 0;
			//头部导航
		// var thirdHeight = $('.y-thirdSection .title').offset().top-300;//730
		var thirdHeight = 700;
		// var fourHeight = $('.y-fourthSection .title').offset().top-300;//1465
		var fourHeight = 1427;
		// var fifHeight = $('.y-fifthSection .title').offset().top-100;//2200
		var fifHeight = 2147;
		// var sixHeight = $('.y-sixSection .title').offset().top-100;//2990
		var sixHeight = 2947;
		var sixHeight2 = 3097;
		
		// var sevenHeight = $('.y-sevenSection .title').offset().top-400;//3812
		var sevenHeight = 3837;
		// var eightHeight = $('.y-eighthSection .title').offset().top-500;//4300
		var eightHeight = 4447;
		var arr = [thirdHeight,fourHeight,fifHeight,sixHeight,sevenHeight,eightHeight];
		var arr2 = [thirdHeight,1427,2147,sixHeight,3840,4447];
		// console.log(arr);
		var maxArr = [];
		$(".d-header").on("click",".d-nav li",function(){
			var index=$(this).index();
			$('body,html').animate({'scrollTop':arr2[index]},300);
		});
		$('.arrow').click(function(){
			// console.log(43243);
			var winHeight = $(window).scrollTop();
			for(var item in arr){
				if(arr[item]-winHeight>100){		
					maxArr=arr[item];		
					$('body,html').animate({'scrollTop':maxArr},300);
					return false;
				}
			}
			// $('.d-header .d-wrapp .d-nav li').each(function(){
			// $(this).siblings().removeClass('d-active');
			if(maxArr>thirdHeight&&maxArr<fourHeight){
						
				$('.d-header .d-wrapp .d-nav li').eq(0).addClass('d-active');
			}else if(maxArr>fourHeight&&maxArr<fifHeight){
				
				$('.d-header .d-wrapp .d-nav li').eq(1).addClass('d-active');
			}else if(maxArr>fifHeight&&maxArr<sixHeight){
				
				$('.d-header .d-wrapp .d-nav li').eq(2).addClass('d-active');
			}else if(maxArr>sixHeight&&maxArr<sevenHeight){
				
				$('.d-header .d-wrapp .d-nav li').eq(3).addClass('d-active');
			}else if(maxArr>sevenHeight&&maxArr<eightHeight){
				
				$('.d-header .d-wrapp .d-nav li').eq(4).addClass('d-active');
			}else if(maxArr>eightHeight-300){
				
				$('.arrow').hide();
				$('.d-header .d-wrapp .d-nav li').eq(5).addClass('d-active');
			}
		// });
			
		});
		//视觉差
		    //视觉差
//  var agent = navigator.userAgent;
//  var $num=0;
//	if (/.*Firefox.*/.test(agent)) {
//	    document.addEventListener("DOMMouseScroll", function(e) {
//	        e = e || window.event;
//	        var detail = e.detail;
//	        if (detail > 0) {
//	        	$num-=18;
////	            console.log("鼠标向下滚动");
//	           $(".y-sixSection").css({"background-position":"center "+$num+"px","transition":"all 0.5s"});
//	        } else {
//	        	$num+=18;
////	            console.warn("鼠标向上滚动");
//	            $(".y-sixSection").css({"background-position":"center "+$num+"px","transition":"all 0.5s"});
//	        }
//	    });
//	} else {
//	    document.onmousewheel = function(e) {
//	        e = e || window.event;
//	        var wheelDelta = e.wheelDelta;
//	        if (wheelDelta > 0) {
//	            $num-=18;
////	            console.log("鼠标向下滚动");
//	            $(".y-sixSection").css({"background-position":"center "+$num+"px","transition":"all 0.5s"});
//	        } else {
//	            $num+=18;
////	            console.warn("鼠标向上滚动");
//	            $(".y-sixSection").css({"background-position":"center "+$num+"px","transition":"all 0.5s"});
//	        }
//	    }
//	};
})