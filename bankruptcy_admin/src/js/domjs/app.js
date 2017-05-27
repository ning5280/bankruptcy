$(function(){
	$(".sidebar-nav").on("click","li",function(){
		$(".sidebar-nav").find("li").find("a").removeClass("active")
		$(this).children("a").addClass("active");
		
		var href=$(this).find("a").attr("data-href");
		if(href){
			$("iframe").attr("src",href);
		}else{
			return false;
		}
		
	});
	// 侧边菜单开关


	function autoLeftNav() {
	    $('.tpl-header-switch-button').on('click', function() {
	        if ($('.left-sidebar').is('.active')) {
	            if ($(window).width() > 1024) {
	                $('.tpl-content-wrapper').removeClass('active');
	            }
	            $('.left-sidebar').removeClass('active');
	        } else {
	
	            $('.left-sidebar').addClass('active');
	            if ($(window).width() > 1024) {
	                $('.tpl-content-wrapper').addClass('active');
	            }
	        }
	    })
	
	    if ($(window).width() < 1024) {
		        $('.left-sidebar').addClass('active');
		 } else {
		        $('.left-sidebar').removeClass('active');
		}
	}
	
	
	// 侧边菜单
	$('.sidebar-nav-sub-title').on('click', function() {
	    $(this).siblings('.sidebar-nav-sub').slideToggle(80)
	        .end()
	        .find('.sidebar-nav-sub-ico').toggleClass('sidebar-nav-sub-ico-rotate');
	});
	//iframe
	function setIframeHeight(iframe) {
		if (iframe) {
			var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
			if (iframeWin.document.body) {
				iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
			}
		}
	};
	
		autoLeftNav();
		// 风格切换
	var saveSelectColor = {
	    'Name': 'SelcetColor',
	    'Color': 'theme-white'
	}
	
	
	
	// 判断用户是否已有自己选择的模板风格
	if (storageLoad('SelcetColor')) {
//		var topiframe=top.$('iframe[name="rightContent"]')[0].contentWindow;
//		$(topiframe).find("body").attr('class', storageLoad('SelcetColor').Color)
	    $('body').attr('class', storageLoad('SelcetColor').Color)
	} else {
	    storageSave(saveSelectColor);
	   
//		var topiframe=top.$('iframe[name="rightContent"]')[0].contentWindow;
//		$(topiframe).find("body").attr('class', 'theme-white')
//	     console.log(topiframe);
	    $('body').attr('class', 'theme-white')
	}
	
	

	$('.tpl-skiner-toggle').on('click', function() {
		
	    $('.tpl-skiner').toggleClass('active');
	})
		
	$('.tpl-skiner-content-bar').find('span').on('click', function() {
		var topiframe=top.$('iframe[name="rightContent"]')[0].contentWindow;
		console.log(topiframe.$("body").attr("class"));
		topiframe.$("body").attr('class', $(this).attr('data-color'));
	    $('body').attr('class', $(this).attr('data-color'));
	    saveSelectColor.Color = $(this).attr('data-color');
	    // 保存选择项
	    storageSave(saveSelectColor);
	
	})
		// 本地缓存
	function storageSave(objectData) {
	    localStorage.setItem(objectData.Name, JSON.stringify(objectData));
	}
	
	function storageLoad(objectName) {
	    if (localStorage.getItem(objectName)) {
	        return JSON.parse(localStorage.getItem(objectName))
	    } else {
	        return false
	    }
	}
	
})









