/* 垂直文本 */
//var current = 1; 
//var height = $('.roles').height(); 
//var numberDivs = $('.roles').children().length; 
//var first = $('.roles div:nth-child(1)'); 
//setInterval(function() {
//  var number = current * -height;
//  first.css('margin-top', number + 'px');
//  if (current === numberDivs) {
//      first.css('margin-top', '0px');
//      current = 1;
//  } else current++;
//}, 2000);
/* 垂直文本 */



/* 滚动条 */
//$(document).ready(function () {
//	$("body").niceScroll({cursorcolor:'rgba(58, 58, 58, 0.5)',cursorborder:"0px",cursorborderradius:'0px'});//1px solid #424242
//	/*! jQuery Smooth Scroll Effect */
//	$("#nav a[href*=#]").click(function(){
//		if($(this).parent().attr("class")=="scrollable_navigation"||$(this).attr("href").indexOf("javascript")>-1){
//			return
//		}
//		var e=1500;
//		var g="swing";
//		var b=this.hash;
//		var a=window.location.href.replace(window.location.hash,"");
//		var c=this;
//		if(a+b==c){
//			var d=$(this.hash+", a[name="+this.hash.slice(1)+"]").offset().top;
//			if(d>$(document).height()-$(window).height()){
//				d=$(document).height()-$(window).height()
//			}
//			if($.browser.safari){
//				var f="body:not(:animated)";
//			}
//			else{
//				var f="html:not(:animated)";
//			}
//			$(f).animate({scrollTop:d},e,g,function(){
//				window.location.href=c;
//			});
//			return false;
//		}
//	});
//});

//(function(f){var l=false,o=false,r=5E3,s=2E3,t=function(){var e=document.getElementsByTagName("script"),e=e[e.length-1].src.split("?")[0];return e.split("/").length>0?e.split("/").slice(0,-1).join("/")+"/":""}(),m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||false,n=window.cancelRequestAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||
//window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||false,x=function(e,d){var b=this;this.version="2.9.0";this.name="nicescroll";this.me=d;this.opt={doc:f("body"),win:false,zindex:9E3,cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:40,touchbehavior:false,hwacceleration:true,usetransition:true,boxzoom:false,dblclickzoom:true,gesturezoom:true,grabcursorenabled:true,
//autohidemode:true,background:"",iframeautoresize:true,cursorminheight:20,preservenativescrolling:true,railoffset:false,bouncescroll:false,spacebarenabled:true};if(e)for(var h in b.opt)typeof e[h]!="undefined"&&(b.opt[h]=e[h]);this.iddoc=(this.doc=b.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/BODY|HTML/.test(b.opt.win?b.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=b.opt.win!==false;this.win=b.opt.win||(this.ispage?f(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?
//f(window):this.win;this.body=f("body");this.iframe=false;this.isiframe=this.doc[0].nodeName=="IFRAME"&&this.win[0].nodeName=="IFRAME";this.istextarea=this.win[0].nodeName=="TEXTAREA";this.page=this.view=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=false;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.scrollmom=false;do this.id="ascrail"+s++;while(document.getElementById(this.id));
//this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.cursorfreezed=this.cursor=this.rail=false;this.visibility=true;this.nativescrollingarea=this.locked=false;this.events=[];this.saved={};this.delaylist={};var i=document.createElement("DIV");this.isopera="opera"in window;this.isieold=(this.isie="all"in document&&"attachEvent"in i&&!this.isopera)&&!("msInterpolationMode"in i.style);this.isie7=this.isie&&!this.isieold&&(!("documentMode"in document)||document.documentMode==7);this.isie8=this.isie&&
//"documentMode"in document&&document.documentMode==8;this.isie9=this.isie&&"performance"in window&&document.documentMode>=9;this.ismozilla="MozAppearance"in i.style;this.ischrome="chrome"in window;this.isios4=(this.isios=(this.cantouch="ontouchstart"in document.documentElement)&&/iphone|ipad|ipod/i.test(navigator.platform))&&!("seal"in Object);if(b.opt.hwacceleration){if((this.trstyle=window.opera?"OTransform":document.all?"msTransform":i.style.webkitTransform!==void 0?"webkitTransform":i.style.MozTransform!==
//void 0?"MozTransform":false)&&typeof i.style[this.trstyle]=="undefined")this.trstyle=false;if(this.hastransform=this.trstyle!=false)i.style[this.trstyle]="translate3d(1px,2px,3px)",this.hastranslate3d=/translate3d/.test(i.style[this.trstyle]);this.transitionstyle=false;this.prefixstyle="";this.transitionend=false;var p="transition,webkitTransition,MozTransition,OTransition,msTransition,KhtmlTransition".split(","),k=",-webkit-,-moz-,-o-,-ms-,-khtml-".split(","),u="transitionEnd,webkitTransitionEnd,transitionend,oTransitionEnd,msTransitionEnd,KhtmlTransitionEnd".split(",");
//for(h=0;h<p.length;h++)if(p[h]in i.style){this.transitionstyle=p[h];this.prefixstyle=k[h];this.transitionend=u[h];break}this.hastransition=this.transitionstyle}else this.transitionend=this.hastransition=this.transitionstyle=this.hastranslate3d=this.hastransform=this.trstyle=false;this.cursorgrabvalue="";if(b.opt.grabcursorenabled&&b.opt.touchbehavior)this.cursorgrabvalue=function(){var c=["-moz-grab","-webkit-grab","grab"];if(b.ischrome||b.isie)c=[];for(var g=0;g<c.length;g++){var d=c[g];i.style.cursor=
//d;if(i.style.cursor==d)return d}return"url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}();i=null;this.ishwscroll=b.hastransform&&b.opt.hwacceleration&&b.haswrapper;this.delayed=function(c,g,d){var j=b.delaylist[c],e=(new Date).getTime();if(j&&j.tt)return false;if(j&&j.last+d>e&&!j.tt)b.delaylist[c]={last:e+d,tt:setTimeout(function(){b.delaylist[c].tt=0;g.call()},d)};else if(!j||!j.tt)b.delaylist[c]={last:e,tt:0},setTimeout(function(){g.call()},0)};this.css=function(c,g){for(var d in g)b.saved.css.push([c,
//d,c.css(d)]),c.css(d,g[d])};this.scrollTop=function(c){return typeof c=="undefined"?b.getScrollTop():b.setScrollTop(c)};BezierClass=function(b,g,d,j,e,v,f){this.st=b;this.ed=g;this.spd=d;this.p1=j||0;this.p2=e||1;this.p3=v||0;this.p4=f||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(b){return 3*b*b*(1-b)},B3:function(b){return 3*b*(1-b)*(1-b)},B4:function(b){return(1-b)*(1-b)*(1-b)},getNow:function(){var b=1-((new Date).getTime()-this.ts)/this.spd,g=this.B2(b)+
//this.B3(b)+this.B4(b);return b<0?this.ed:this.st+Math.round(this.df*g)},update:function(b,g){this.st=this.getNow();this.ed=b;this.spd=g;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};this.ishwscroll?(this.doc.translate={x:0,y:0},this.hastranslate3d&&this.doc.css(this.prefixstyle+"backface-visibility","hidden"),this.getScrollTop=function(c){return b.timerscroll&&!c?b.timerscroll.bz.getNow():b.doc.translate.y},this.notifyScrollEvent=document.createEvent?function(b){var g=document.createEvent("UIEvents");
//g.initUIEvent("scroll",false,true,window,1);b.dispatchEvent(g)}:document.fireEvent?function(b){var g=document.createEventObject();b.fireEvent("onscroll");g.cancelBubble=true}:function(){},this.setScrollTop=this.hastranslate3d?function(c,g){b.doc.css(b.trstyle,"translate3d(0px,"+c*-1+"px,0px)");b.doc.translate.y=c;g||b.notifyScrollEvent(b.win[0])}:function(c,g){b.doc.css(b.trstyle,"translate(0px,"+c*-1+"px)");b.doc.translate.y=c;g||b.notifyScrollEvent(b.win[0])}):(this.getScrollTop=function(){return b.docscroll.scrollTop()},
//this.setScrollTop=function(c){return b.docscroll.scrollTop(c)});this.getTarget=function(b){return!b?false:b.target?b.target:b.srcElement?b.srcElement:false};this.hasParent=function(b,g){if(!b)return false;for(var d=b.target||b.srcElement||b||false;d&&d.id!=g;)d=d.parentNode||false;return d!==false};this.updateScrollBar=function(c){if(b.ishwscroll)b.rail.css({height:b.win.innerHeight()});else{var g=b.win.offset();g.top+=2;var d=(b.win.outerWidth()-b.win.innerWidth())/2;g.left+=b.win.innerWidth()+d-
//b.rail.width-1;if(d=b.opt.railoffset)d.top&&(g.top+=d.top),d.left&&(g.left+=d.left);b.rail.css({top:g.top,left:g.left,height:c?c.h:b.win.innerHeight()});b.zoom&&b.zoom.css({top:g.top+1,left:g.left-20})}};b.hasanimationframe=m;b.hascancelanimationframe=n;b.hasanimationframe?b.hascancelanimationframe||(n=function(){b.cancelAnimationFrame=true}):(m=function(b){return setTimeout(b,1E3/60)},n=clearInterval);this.init=function(){b.saved.css=[];if(!b.ispage||!b.cantouch&&!b.isieold){var c=b.docscroll;b.ispage&&
//(c=b.haswrapper?b.win:b.doc);b.css(c,{"overflow-y":"hidden"});b.ispage&&b.isie7&&b.win[0].nodeName=="BODY"&&b.css(f("html"),{"overflow-y":"hidden"});var d=f(document.createElement("div"));d.css({position:"relative",top:0,"float":"right",width:b.opt.cursorwidth,height:"0px","background-color":b.opt.cursorcolor,border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});
//d.hborder=parseFloat(d.outerHeight()-d.innerHeight());b.cursor=d;c=f(document.createElement("div"));c.attr("id",b.id);c.width=1+Math.max(parseFloat(b.opt.cursorwidth),d.outerWidth());c.css({"padding-left":"0px","padding-right":"1px",width:c.width+"px",zIndex:b.ispage?b.opt.zindex:b.opt.zindex+2,background:b.opt.background});c.append(d);b.rail=c;d=b.rail.drag=false;if(b.opt.boxzoom&&!b.ispage&&!b.isieold&&(d=document.createElement("div"),b.bind(d,"click",b.doZoom),b.zoom=f(d),b.zoom.css({cursor:"pointer",
//"z-index":b.opt.zindex,backgroundImage:"url("+t+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),b.opt.dblclickzoom&&b.bind(b.win,"dblclick",b.doZoom),b.cantouch&&b.opt.gesturezoom))b.ongesturezoom=function(c){c.scale>1.5&&b.doZoomIn(c);c.scale<0.8&&b.doZoomOut(c);return b.cancelEvent(c)},b.bind(b.win,"gestureend",b.ongesturezoom);b.ispage?(c.css({position:"fixed",top:"0px",right:"0px",height:"100%"}),b.body.append(c)):(b.ishwscroll?(b.win.css("position")=="static"&&b.css(b.win,{position:"relative"}),
//d=b.win[0].nodeName=="HTML"?b.body:b.win,b.zoom&&(b.zoom.css({position:"absolute",top:1,right:0,"margin-right":c.width+4}),d.append(b.zoom)),c.css({position:"absolute",top:0,right:0}),d.append(c)):(c.css({position:"absolute"}),b.zoom&&b.zoom.css({position:"absolute"}),b.updateScrollBar(),b.body.append(c),b.zoom&&b.body.append(b.zoom)),b.isios&&b.css(b.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}));if(b.opt.autohidemode===false)b.autohidedom=false;else if(b.opt.autohidemode===
//true)b.autohidedom=b.rail;else if(b.opt.autohidemode=="cursor")b.autohidedom=b.cursor;b.cantouch||b.opt.touchbehavior?(b.scrollmom={y:new w(b)},b.onmousedown=function(c){if(!b.locked&&(b.cancelScroll(),b.rail.drag={x:c.screenX,y:c.screenY,sx:b.scroll.x,sy:b.scroll.y,st:b.getScrollTop()},b.hasmoving=false,b.lastmouseup=false,b.scrollmom.y.reset(c.screenY),!b.cantouch))return b.cancelEvent(c)},b.onmouseup=function(c){if(b.rail.drag&&(b.scrollmom.y.doMomentum(),b.rail.drag=false,b.hasmoving&&(b.hasmoving=
//false,b.lastmouseup=true,b.hideCursor(),!b.cantouch)))return b.cancelEvent(c)},b.onclick=b.isios?false:function(c){return b.lastmouseup?(b.lastmouseup=false,b.cancelEvent(c)):true},b.onmousemove=function(c){if(b.rail.drag){if(b.cantouch&&typeof c.original=="undefined")return true;b.hasmoving=true;var d=c.screenY,g=b.rail.drag.st-(c.screenY-b.rail.drag.y);if(b.ishwscroll)g<0?(g=Math.round(g/2),d=0):g>b.page.maxh&&(g=b.page.maxh+Math.round((g-b.page.maxh)/2),d=0);else if(g<0&&(g=0),g>b.page.maxh)g=
//b.page.maxh;b.prepareTransition&&b.prepareTransition(0);b.setScrollTop(g);b.showCursor(g);b.scrollmom.y.update(d);return b.cancelEvent(c)}},b.cursorgrabvalue&&(b.css(b.ispage?b.doc:b.win,{cursor:b.cursorgrabvalue}),b.css(b.rail,{cursor:b.cursorgrabvalue}))):(b.onmousedown=function(c){if(b.locked)return b.cancelEvent(c);b.cancelScroll();b.rail.drag={x:c.screenX,y:c.screenY,sx:b.scroll.x,sy:b.scroll.y};return b.cancelEvent(c)},b.onmouseup=function(c){if(b.rail.drag)return b.rail.drag=false,b.cancelEvent(c)},
//b.onmousemove=function(c){if(b.rail.drag){b.scroll.y=b.rail.drag.sy+(c.screenY-b.rail.drag.y);if(b.scroll.y<0)b.scroll.y=0;var d=b.scrollvaluemax;if(b.scroll.y>d)b.scroll.y=d;b.showCursor();b.cursorfreezed=true;b.doScroll(Math.round(b.scroll.y*b.scrollratio.y));return b.cancelEvent(c)}else b.checkarea=true});(b.cantouch||b.opt.touchbehavior)&&b.bind(b.win,"mousedown",b.onmousedown);b.bind(b.cursor,"mousedown",b.onmousedown);b.bind(b.cursor,"mouseup",function(c){b.rail.drag=false;b.hasmoving=false;
//b.hideCursor();return b.cancelEvent(c)});b.bind(document,"mouseup",b.onmouseup);b.bind(document,"mousemove",b.onmousemove);b.onclick&&b.bind(document,"click",b.onclick);b.cantouch||(b.rail.mouseenter(function(){b.showCursor();b.rail.active=true}),b.rail.mouseleave(function(){b.rail.active=false;b.rail.drag||b.hideCursor()}),b.isiframe||b.bind(b.isie&&b.ispage?document:b.docscroll,"mousewheel",b.onmousewheel),b.bind(b.rail,"mousewheel",b.onmousewheel));b.zoom&&(b.zoom.mouseenter(function(){b.showCursor();
//b.rail.active=true}),b.zoom.mouseleave(function(){b.rail.active=false;b.rail.drag||b.hideCursor()}));!b.ispage&&!b.cantouch&&!/HTML|BODY/.test(b.win[0].nodeName)&&(b.win.attr("tabindex")||b.win.attr({tabindex:r++}),b.win.focus(function(c){l=b.getTarget(c).id||true;b.hasfocus=true;b.noticeCursor()}),b.win.blur(function(){l=false;b.hasfocus=false}),b.win.mouseenter(function(c){o=b.getTarget(c).id||true;b.hasmousefocus=true;b.noticeCursor()}),b.win.mouseleave(function(){o=false;b.hasmousefocus=false}));
//b.onkeypress=function(c){if(b.locked&&b.page.maxh==0)return true;var c=c?c:window.e,d=b.getTarget(c);if(d&&/INPUT|TEXTAREA|SELECT|OPTION/.test(d.nodeName)&&(!d.getAttribute("type")&&!d.type||!/submit|button|cancel/i.tp))return true;if(b.hasfocus||b.hasmousefocus&&!l||b.ispage&&!l&&!o){d=c.keyCode;if(b.locked&&d!=27)return b.cancelEvent(c);var g=false;switch(d){case 38:case 63233:b.doScrollBy(72);g=true;break;case 40:case 63235:b.doScrollBy(-72);g=true;break;case 33:case 63276:b.doScrollBy(b.view.h);
//g=true;break;case 34:case 63277:b.doScrollBy(-b.view.h);g=true;break;case 36:case 63273:b.doScrollTo(0);g=true;break;case 35:case 63275:b.doScrollTo(b.page.maxh);g=true;break;case 32:b.opt.spacebarenabled&&(b.doScrollBy(-b.view.h),g=true);break;case 27:b.zoomactive&&(b.doZoom(),g=true)}if(g)return b.cancelEvent(c)}};b.bind(document,b.isopera?"keypress":"keydown",b.onkeypress);b.bind(window,"resize",b.resize);b.bind(window,"orientationchange",b.resize);b.bind(window,"load",b.resize);!b.ispage&&b.opt.boxzoom&&
//b.bind(window,"resize",b.resizeZoom);b.istextarea&&b.bind(b.win,"mouseup",b.resize);b.resize()}if(this.doc[0].nodeName=="IFRAME"){var e=function(){b.iframexd=false;try{var c="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(d){b.iframexd=true,c=false}if(b.iframexd)return true;if(b.isiframe)b.iframe={html:b.doc.contents().find("html")[0],body:b.doc.contents().find("body")[0]},b.docscroll=f(this.contentWindow);if(b.opt.iframeautoresize&&!b.isiframe){b.win.scrollTop(0);
//b.doc.height("");var g=Math.max(c.getElementsByTagName("html")[0].scrollHeight,c.body.scrollHeight);b.doc.height(g)}b.resize();b.isie7&&b.css(f(c).find("html"),{"overflow-y":"hidden"});b.css(f(c.body),{"overflow-y":"hidden"});"contentWindow"in this?b.bind(this.contentWindow,"scroll",b.onscroll):b.bind(c,"scroll",b.onscroll);b.bind(c,"mouseup",b.onmouseup);b.bind(c,"mousewheel",b.onmousewheel);b.bind(c,b.isopera?"keypress":"keydown",b.onkeypress);if(b.cantouch||b.opt.touchbehavior)b.bind(c,"mousedown",
//b.onmousedown),b.cursorgrabvalue&&b.css(f(c.body),{cursor:b.cursorgrabvalue});b.bind(c,"mousemove",b.onmousemove);b.zoom&&(b.opt.dblclickzoom&&b.bind(c,"dblclick",b.doZoom),b.ongesturezoom&&b.bind(c,"gestureend",b.ongesturezoom))};this.doc[0].readyState&&this.doc[0].readyState=="complete"&&setTimeout(function(){e.call(b.doc[0],false)},500);b.bind(this.doc,"load",e)}};this.showCursor=function(c){if(b.cursortimeout)clearTimeout(b.cursortimeout),b.cursortimeout=0;if(b.rail){b.autohidedom&&b.autohidedom.stop().css({opacity:b.opt.cursoropacitymax});
//if(typeof c!="undefined")b.scroll.y=Math.round(c*1/b.scrollratio.y);b.cursor.css({height:b.cursorheight,top:b.scroll.y});b.zoom&&b.zoom.stop().css({opacity:b.opt.cursoropacitymax})}};this.hideCursor=function(c){if(!b.cursortimeout&&b.rail&&b.autohidedom)b.cursortimeout=setTimeout(function(){b.rail.active||(b.autohidedom.stop().animate({opacity:b.opt.cursoropacitymin}),b.zoom&&b.zoom.stop().animate({opacity:b.opt.cursoropacitymin}));b.cursortimeout=0},c||400)};this.noticeCursor=function(c,d){b.showCursor(d);
//b.hideCursor(c)};this.getContentSize=function(){return b.ispage?{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}:b.haswrapper?{w:b.doc.outerWidth()+parseInt(b.win.css("paddingLeft"))+parseInt(b.win.css("paddingRight")),h:b.doc.outerHeight()+parseInt(b.win.css("paddingTop"))+parseInt(b.win.css("paddingBottom"))}:b.iframe?{w:Math.max(b.iframe.html.scrollWidth,b.iframe.body.scrollWidth),h:Math.max(b.iframe.html.scrollHeight,
//b.iframe.body.scrollHeight)}:{w:b.docscroll[0].scrollWidth,h:b.docscroll[0].scrollHeight}};this.resize=this.onResize=function(c,d){if(!b.haswrapper&&!b.ispage)if(b.win.css("display")!="none")b.show();else return b.visibility&&b.hide(),false;var e=b.page.maxh,f=b.page.maxw,h=b.view.w;b.view={w:b.ispage?b.win.width():b.win.innerWidth(),h:b.ispage?b.win.height():b.win.innerHeight()};b.page=d?d:b.getContentSize();b.page.maxh=Math.max(0,b.page.h-b.view.h);b.page.maxw=Math.max(0,b.page.w-b.view.w);if(b.page.maxh==
//e&&b.page.maxw==f&&b.view.w==h)if(b.ispage)return b;else{e=b.win.offset();if(b.lastposition&&(f=b.lastposition,f.top==e.top&&f.left==e.left))return b;b.lastposition=e}if(b.page.maxh==0)return b.hide(),b.scrollvaluemax=0,b.scroll.y=0,b.scrollratio={x:0,y:0},b.cursorheight=0,b.locked=true,b.setScrollTop(0),false;else b.visibility||b.show();b.locked=false;b.istextarea&&b.win.css("resize")&&b.win.css("resize")!="none"&&(b.view.h-=20);b.ispage||b.updateScrollBar(b.view);b.cursorheight=Math.min(b.view.h,
//Math.round(b.view.h*(b.view.h/b.page.h)));b.cursorheight=Math.max(b.opt.cursorminheight,b.cursorheight);b.scrollvaluemax=b.view.h-b.cursorheight-b.cursor.hborder;b.scrollratio={x:0,y:b.page.maxh/b.scrollvaluemax};b.getScrollTop()>b.page.maxh?b.doScroll(b.page.maxh):(b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y)),b.noticeCursor());return b};this._bind=function(c,d,e,f){b.events.push({e:c,n:d,f:e});c.addEventListener?c.addEventListener(d,e,f||false):c.attachEvent?c.attachEvent("on"+d,e):
//c["on"+d]=e};this.bind=function(c,d,e,f){var h="jquery"in c?c[0]:c;h.addEventListener?(b.cantouch&&/mouseup|mousedown|mousemove/.test(d)&&b._bind(h,d=="mousedown"?"touchstart":d=="mouseup"?"touchend":"touchmove",function(b){if(b.touches.length<2){var c=b.touches.length?b.touches[0]:b;c.original=b;e.call(this,c)}},f||false),b._bind(h,d,e,f||false),d=="mousewheel"&&b._bind(h,"DOMMouseScroll",e,f||false),b.cantouch&&d=="mouseup"&&b._bind(h,"touchcancel",e,f||false)):b._bind(h,d,function(c){if((c=c||
//window.event||false)&&c.srcElement)c.target=c.srcElement;return e.call(h,c)===false||f===false?b.cancelEvent(c):true})};this._unbind=function(b,d,e){b.removeEventListener?b.removeEventListener(d,e,false):b.detachEvent?b.detachEvent("on"+d,e):b["on"+d]=false};this.unbindAll=function(){for(var c=0;c<b.events.length;c++){var d=b.events[c];b._unbind(d.e,d.n,d.f)}};this.cancelEvent=function(c){c=b.cantouch?c.original?c.original:c||false:c?c:window.event||false;if(!c)return false;c.stopPropagation&&c.stopPropagation();
//c.preventDefault&&c.preventDefault();c.cancelBubble=true;c.cancel=true;return c.returnValue=false};this.show=function(){if(b.page.maxh!=0)b.visibility=true,b.rail.css("display","block");return b};this.hide=function(){b.visibility=false;b.rail.css("display","none");return b};this.remove=function(){b.doZoomOut();b.unbindAll();b.events=[];b.rail.remove();b.zoom&&b.zoom.remove();b.cursor=false;b.rail=false;b.zoom=false;for(var c=0;c<b.saved.css.length;c++){var d=b.saved.css[c];d[0].css(d[1],typeof d[2]==
//"undefined"?"":d[2])}b.saved=false;b.me.data("__nicescroll","");return b};this.isScrollable=function(b){for(b=b.target?b.target:b;b&&b.nodeName&&!/BODY|HTML/.test(b.nodeName);){var d=f(b);if(/scroll|auto/.test(d.css("overflowY")||d.css("overflow")||""))return b.clientHeight!=b.scrollHeight;b=b.parentNode?b.parentNode:false}return false};this.onmousewheel=function(c){if(b.locked&&b.page.maxh==0)return true;if(b.opt.preservenativescrolling&&b.checkarea)b.checkarea=false,b.nativescrollingarea=b.isScrollable(c);
//if(b.nativescrollingarea)return true;if(b.locked)return b.cancelEvent(c);if(b.rail.drag)return b.cancelEvent(c);var d=0;if(d=c.detail?c.detail*-1:c.wheelDelta/40)b.scrollmom&&b.scrollmom.y.stop(),b.doScrollBy(d*b.opt.mousescrollstep);return b.cancelEvent(c)};this.stop=function(){b.cancelScroll();b.scrollmon&&b.scrollmon.stop();b.cursorfreezed=false;b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.noticeCursor();return b};b.ishwscroll&&b.hastransition&&b.opt.usetransition?(this.prepareTransition=
//function(c){var d=Math.round(b.opt.scrollspeed*10),c=Math.min(d,Math.round(c/20*b.opt.scrollspeed)),d=c>20?b.prefixstyle+"transform "+c+"ms ease-out 0s":"";if(!b.lasttransitionstyle||b.lasttransitionstyle!=d)b.lasttransitionstyle=d,b.doc.css(b.transitionstyle,d);return c},this.doScroll=function(c,d){var e=b.getScrollTop();if(c<0&&e<=0)return b.noticeCursor();else if(c>b.page.maxh&&e>=b.page.maxh)return b.checkContentSize(),b.noticeCursor();b.newscrolly=c;b.newscrollspeed=d||false;if(b.timer)return false;
//if(!b.scrollendtrapped)b.scrollendtrapped=true,b.bind(b.doc,b.transitionend,b.onScrollEnd,false);b.timer=setTimeout(function(){var c=b.getScrollTop(),c=b.newscrollspeed?b.newscrollspeed:Math.abs(c-b.newscrolly),d=b.prepareTransition(c);b.timer=setTimeout(function(){if(b.newscrolly<0&&!b.opt.bouncescroll)b.newscrolly=0;else if(b.newscrolly>b.page.maxh&&!b.opt.bouncescroll)b.newscrolly=b.page.maxh;if(b.newscrolly==b.getScrollTop())b.timer=0,b.onScrollEnd();else{var c=b.getScrollTop();b.timerscroll&&
//b.timerscroll.tm&&clearInterval(b.timerscroll.tm);if(d>0&&(b.timerscroll={ts:(new Date).getTime(),s:b.getScrollTop(),e:b.newscrolly,sp:d,bz:new BezierClass(c,b.newscrolly,d,0,1,0,1)},!b.cursorfreezed))b.timerscroll.tm=setInterval(function(){b.showCursor(b.getScrollTop())},60);b.setScrollTop(b.newscrolly);b.timer=0}},15)},b.opt.scrollspeed)},this.cancelScroll=function(){if(!b.scrollendtrapped)return true;var c=b.getScrollTop();b.scrollendtrapped=false;b._unbind(b.doc,b.transitionend,b.onScrollEnd);
//b.prepareTransition(0);b.setScrollTop(c);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=false;b.cursorfreezed=false;b.noticeCursor(false,c);return b},this.onScrollEnd=function(){b.scrollendtrapped=false;b._unbind(b.doc,b.transitionend,b.onScrollEnd);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=false;b.cursorfreezed=false;var c=b.getScrollTop();b.setScrollTop(c);b.noticeCursor(false,c);c<0?b.doScroll(0,60):c>b.page.maxh&&b.doScroll(b.page.maxh,
//60)}):(this.doScroll=function(c){function d(){if(b.cancelAnimationFrame)return true;if(h=1-h)return b.timer=m(d)||1;var c=b.getScrollTop(),e=b.bzscroll?b.bzscroll.getNow():b.newscrolly,c=e-c;if(c<0&&e<b.newscrolly||c>0&&e>b.newscrolly)e=b.newscrolly;b.setScrollTop(e);e==b.newscrolly?(b.timer=0,b.cursorfreezed=false,b.bzscroll=false,e<0?b.doScroll(0):e>b.page.maxh&&b.doScroll(b.page.maxh)):b.timer=m(d)||1}var e=b.getScrollTop();b.newscrolly=c;if(!b.bouncescroll)if(b.newscrolly<0){if(b.newspeedy)b.newspeedy.x=
//0;b.newscrolly=0}else if(b.newscrolly>b.page.maxh){if(b.newspeedy)b.newspeedy.x=b.page.maxh;b.newscrolly=b.page.maxh}var f=Math.floor(Math.abs(c-e)/40);f>0?(f=Math.min(10,f)*100,b.bzscroll=b.bzscroll?b.bzscroll.update(c,f):new BezierClass(e,c,f,0,1,0,1)):b.bzscroll=false;if(!b.timer){e==b.page.maxh&&c>=b.page.maxh&&b.checkContentSize();var h=1;b.cancelAnimationFrame=false;b.timer=1;d();e==b.page.maxh&&c>=e&&b.checkContentSize();b.noticeCursor()}},this.cancelScroll=function(){b.timer&&n(b.timer);b.timer=
//0;b.bzscroll=false;return b});this.doScrollBy=function(c,d){var e=0,e=d?Math.floor((b.scroll.y-c)*b.scrollratio.y):(b.timer?b.newscrolly:b.getScrollTop(true))-c;if(b.bouncescroll){var f=Math.round(b.view.h/2);e<-f?e=-f:e>b.page.maxh+f&&(e=b.page.maxh+f)}b.cursorfreezed=false;b.doScroll(e)};this.doScrollTo=function(c,d){d&&Math.round(c*b.scrollratio.y);b.cursorfreezed=false;b.doScroll(c)};this.checkContentSize=function(){var c=b.getContentSize();c.h!=b.page.h&&b.resize(false,c)};b.onscroll=function(){b.rail.drag||
//b.cursorfreezed||b.delayed("onscroll",function(){b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.noticeCursor()},30)};b.bind(b.docscroll,"scroll",b.onscroll);this.doZoomIn=function(c){if(!b.zoomactive){b.zoomactive=true;b.zoomrestore={style:{}};var d="position,top,left,zIndex,backgroundColor,marginTop,marginBottom,marginLeft,marginRight".split(","),e=b.win[0].style,h;for(h in d){var i=d[h];b.zoomrestore.style[i]=typeof e[i]!="undefined"?e[i]:""}b.zoomrestore.style.width=b.win.css("width");
//b.zoomrestore.style.height=b.win.css("height");b.zoomrestore.padding={w:b.win.outerWidth()-b.win.width(),h:b.win.outerHeight()-b.win.height()};if(b.isios4)b.zoomrestore.scrollTop=f(window).scrollTop(),f(window).scrollTop(0);b.win.css({position:b.isios4?"absolute":"fixed",top:0,left:0,"z-index":b.opt.zindex+100,margin:"0px"});d=b.win.css("backgroundColor");(d==""||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(d))&&b.win.css("backgroundColor","#fff");b.rail.css({"z-index":b.opt.zindex+110});
//b.zoom.css({"z-index":b.opt.zindex+112});b.zoom.css("backgroundPosition","0px -18px");b.resizeZoom();return b.cancelEvent(c)}};this.doZoomOut=function(c){if(b.zoomactive)return b.zoomactive=false,b.win.css("margin",""),b.win.css(b.zoomrestore.style),b.isios4&&f(window).scrollTop(b.zoomrestore.scrollTop),b.rail.css({"z-index":b.ispage?b.opt.zindex:b.opt.zindex+2}),b.zoom.css({"z-index":b.opt.zindex}),b.zoomrestore=false,b.zoom.css("backgroundPosition","0px 0px"),b.onResize(),b.cancelEvent(c)};this.doZoom=
//function(c){return b.zoomactive?b.doZoomOut(c):b.doZoomIn(c)};this.resizeZoom=function(){if(b.zoomactive){var c=b.getScrollTop();b.win.css({width:f(window).width()-b.zoomrestore.padding.w+"px",height:f(window).height()-b.zoomrestore.padding.h+"px"});b.onResize();b.setScrollTop(Math.min(b.page.maxh,c))}};this.init()},w=function(e){var d=this;this.nc=e;this.lasttime=this.speedy=this.lasty=0;this.snapy=false;this.timer=this.demuly=0;this.time=function(){return(new Date).getTime()};this.reset=function(b){d.stop();
//d.lasttime=d.time();d.speedy=0;d.lasty=b};this.update=function(b){d.lasttime=d.time();var f=b-d.lasty,i=e.getScrollTop()+f;d.snapy=i<0||i>d.nc.page.maxh;d.speedy=f;d.lasty=b};this.stop=function(){if(d.timer)clearTimeout(d.timer),d.timer=0};this.doSnapy=function(b){b<0?d.nc.doScroll(0,60):b>d.nc.page.maxh&&d.nc.doScroll(d.nc.page.maxh,60)};this.doMomentum=function(){var b=d.lasttime,e=d.time();d.speedy=Math.min(60,d.speedy);if(d.speedy&&b&&e-b<=50&&d.speedy){var f=e-b,k=d.nc.page.maxh;d.demuly=0;var l=
//function(){var b=Math.floor(d.nc.getScrollTop()-d.speedy*(1-d.demuly));d.demuly+=b<0||b>k?0.08:0.01;d.nc.setScrollTop(b);d.nc.showCursor(b);d.demuly<1?d.timer=setTimeout(l,f):(d.timer=0,d.nc.hideCursor(),d.doSnapy(b))};l()}else d.snapy&&d.doSnapy(d.nc.getScrollTop())}},k=f.fn.scrollTop;f.cssHooks.scrollTop={get:function(e){var d=f.data(e,"__nicescroll")||false;return d&&d.ishwscroll?d.getScrollTop():k.call(e)},set:function(e,d){var b=f.data(e,"__nicescroll")||false;b&&b.ishwscroll?b.setScrollTop(parseInt(d)):
//k.call(e,d);return this}};f.fn.scrollTop=function(e){if(typeof e=="undefined"){var d=this[0]?f.data(this[0],"__nicescroll")||false:false;return d&&d.ishwscroll?d.getScrollTop():k.call(this)}else return this.each(function(){var b=f.data(this,"__nicescroll")||false;b&&b.ishwscroll?b.setScrollTop(parseInt(e)):k.call(f(this),e)})};var q=function(e){var d=this;this.length=0;this.name="nicescrollarray";this.each=function(b){for(var e=0;e<d.length;e++)b.call(d[e]);return d};this.push=function(b){d[d.length]=
//b;d.length++};this.eq=function(b){return d[b]};if(e)for(a=0;a<e.length;a++){var b=f.data(e[a],"__nicescroll")||false;b&&(this[this.length]=b,this.length++)}return this};(function(e,d,b){for(var f=0;f<d.length;f++)b(e,d[f])})(q.prototype,"show,hide,onResize,resize,remove,stop".split(","),function(e,d){e[d]=function(){return this.each(function(){this[d].call()})}});f.fn.getNiceScroll=function(e){return typeof e=="undefined"?new q(this):f.data(this[e],"__nicescroll")||false};f.extend(f.expr[":"],{nicescroll:function(e){return f.data(e,
//"__nicescroll")?true:false}});f.fn.niceScroll=function(e,d){typeof d=="undefined"&&typeof e=="object"&&!("jquery"in e)&&(d=e,e=false);var b=new q;typeof d=="undefined"&&(d={});if(e)d.doc=f(e),d.win=f(this);var h=!("doc"in d);if(!h&&!("win"in d))d.win=f(this);this.each(function(){var e=f(this).data("__nicescroll")||false;if(!e)d.doc=h?f(this):d.doc,e=new x(d,f(this)),f(this).data("__nicescroll",e);b.push(e)});return b.length==1?b[0]:b};window.NiceScroll={getjQuery:function(){return f}}})(jQuery);
/* 滚动条 */


/* 平滑滚动 */
//$(function() {
//	$('a[href*=#]:not([href=#])').click(function() {
//		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//			var target = $(this.hash);
//			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//			if (target.length) {
//				$('html,body').animate({
//					scrollTop: target.offset().top
//				}, 800);
//				return false;
//			}
//		}
//	});
//});
/* 平滑滚动 */



/* 定位导航 */
//$(document).ready(function () {
//	var top = $('#navs, #screen_02').offset().top - parseFloat($('#navs, #screen_02').css('marginTop').replace(/auto/, 100));
//	$(window).scroll(function (event) {
//		var y = $(this).scrollTop();
//		if (y >= top) {
//			$('#navs, #screen_02').addClass('fixed');
//		}
//		else {
//			$('#navs, #screen_02').removeClass('fixed');
//		}
//	});
//});
/* 定位导航 */



/* 导航跳转 */
//$(document).ready(function () {
//  $(document).on("scroll", onScroll);
//});
//function onScroll(event){
//	var scrollPos = $(document).scrollTop();
//	$('#menu-left a').each(function () {
//		var currLink = $(this);
//		var refElement = $(currLink.attr("href"));
//		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//			$('#menu-left ul li a').removeClass("active");
//			currLink.addClass("active");
//		}
//		else{
//			currLink.removeClass("active");
//		}
//	});
//}
/* 导航跳转 */



/* flex 滑块 */
//var $ = jQuery.noConflict();
//$(window).load(function() {
//	$('.flexslider').flexslider({
//		animation: "fade"
//	});
//});

//(function(a){a.flexslider=function(c,b){var d=c;d.init=function(){d.vars=a.extend({},a.flexslider.defaults,b);d.data("flexslider",true);d.container=a(".slides",d);d.slides=a(".slides > li",d);d.count=d.slides.length;d.animating=false;d.currentSlide=d.vars.slideToStart;d.animatingTo=d.currentSlide;d.atEnd=(d.currentSlide==0)?true:false;d.eventType=("ontouchstart" in document.documentElement)?"touchstart":"click";d.cloneCount=0;d.cloneOffset=0;if(d.vars.controlsContainer!=""){d.controlsContainer=a(d.vars.controlsContainer).eq(a(".slides").index(d.container));d.containerExists=d.controlsContainer.length>0}if(d.vars.manualControls!=""){d.manualControls=a(d.vars.manualControls,((d.containerExists)?d.controlsContainer:d));d.manualExists=d.manualControls.length>0}if(d.vars.randomize){d.slides.sort(function(){return(Math.round(Math.random())-0.5)});d.container.empty().append(d.slides)}if(d.vars.animation.toLowerCase()=="slide"){d.css({overflow:"hidden"});if(d.vars.animationLoop){d.cloneCount=2;d.cloneOffset=1;d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"))}d.container.width(((d.count+d.cloneCount)*d.width())+2000);d.newSlides=a(".slides > li",d);setTimeout(function(){d.newSlides.width(d.width()).css({"float":"left"}).show()},100);d.container.css({marginLeft:(-1*(d.currentSlide+d.cloneOffset))*d.width()+"px"})}else{d.slides.css({width:"100%","float":"left",marginRight:"-100%"}).eq(d.currentSlide).fadeIn(400)}if(d.vars.controlNav){if(d.manualExists){d.controlNav=d.manualControls}else{var g=a('<ol class="flex-control-nav"></ol>');var k=1;for(var l=0;l<d.count;l++){g.append("<li><a>"+k+"</a></li>");k++}if(d.containerExists){a(d.controlsContainer).append(g);d.controlNav=a(".flex-control-nav li a",d.controlsContainer)}else{d.append(g);d.controlNav=a(".flex-control-nav li a",d)}}d.controlNav.eq(d.currentSlide).addClass("active");d.controlNav.bind(d.eventType,function(i){i.preventDefault();if(!a(this).hasClass("active")){d.flexAnimate(d.controlNav.index(a(this)),d.vars.pauseOnAction)}})}if(d.vars.directionNav){var f=a('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+d.vars.prevText+'</a></li><li><a class="next" href="#">'+d.vars.nextText+"</a></li></ul>");if(d.containerExists){a(d.controlsContainer).append(f);d.directionNav=a(".flex-direction-nav li a",d.controlsContainer)}else{d.append(f);d.directionNav=a(".flex-direction-nav li a",d)}if(!d.vars.animationLoop){if(d.currentSlide==0){d.directionNav.filter(".prev").addClass("disabled")}else{if(d.currentSlide==d.count-1){d.directionNav.filter(".next").addClass("disabled")}}}d.directionNav.bind(d.eventType,function(i){i.preventDefault();var j=(a(this).hasClass("next"))?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}})}if(d.vars.keyboardNav&&a("ul.slides").length==1){a(document).keyup(function(i){if(d.animating){return}else{if(i.keyCode!=39&&i.keyCode!=37){return}else{if(i.keyCode==39){var j=d.getTarget("next")}else{if(i.keyCode==37){var j=d.getTarget("prev")}}if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}}}})}if(d.vars.slideshow){if(d.vars.pauseOnHover&&d.vars.slideshow){d.hover(function(){d.pause()},function(){d.resume()})}d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed)}if(d.vars.pausePlay){var e=a('<div class="flex-pauseplay"><span></span></div>');if(d.containerExists){d.controlsContainer.append(e);d.pausePlay=a(".flex-pauseplay span",d.controlsContainer)}else{d.append(e);d.pausePlay=a(".flex-pauseplay span",d)}var h=(d.vars.slideshow)?"pause":"play";d.pausePlay.addClass(h).text((h=="pause")?d.vars.pauseText:d.vars.playText);d.pausePlay.click(function(i){i.preventDefault();(a(this).hasClass("pause"))?d.pause():d.resume()})}if(d.vars.touchSwipe&&"ontouchstart" in document.documentElement){d.each(function(){var i,j=20;isMoving=false;function o(){this.removeEventListener("touchmove",m);i=null;isMoving=false}function m(s){if(isMoving){var p=s.touches[0].pageX,q=i-p;if(Math.abs(q)>=j){o();var r=(q>0)?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(r)){d.flexAnimate(r,d.vars.pauseOnAction)}}}}function n(p){if(p.touches.length==1){i=p.touches[0].pageX;isMoving=true;this.addEventListener("touchmove",m,false)}}if("ontouchstart" in document.documentElement){this.addEventListener("touchstart",n,false)}})}if(d.vars.animation.toLowerCase()=="slide"){d.sliderTimer;a(window).resize(function(){d.newSlides.width(d.width());d.container.width(((d.count+d.cloneCount)*d.width())+2000);clearTimeout(d.sliderTimer);d.sliderTimer=setTimeout(function(){d.flexAnimate(d.currentSlide)},300)})}d.vars.start(d)};d.flexAnimate=function(f,e){if(!d.animating){d.animating=true;d.animatingTo=f;d.vars.before(d);if(e){d.pause()}if(d.vars.controlNav){d.controlNav.removeClass("active").eq(f).addClass("active")}d.atEnd=(f==0||f==d.count-1)?true:false;if(!d.vars.animationLoop&&d.vars.directionNav){if(f==0){d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled")}else{if(f==d.count-1){d.directionNav.removeClass("disabled").filter(".next").addClass("disabled")}else{d.directionNav.removeClass("disabled")}}}if(!d.vars.animationLoop&&f==d.count-1){d.pause();d.vars.end(d)}if(d.vars.animation.toLowerCase()=="slide"){if(d.currentSlide==0&&f==d.count-1&&d.vars.animationLoop&&d.direction!="next"){d.slideString="0px"}else{if(d.currentSlide==d.count-1&&f==0&&d.vars.animationLoop&&d.direction!="prev"){d.slideString=(-1*(d.count+1))*d.slides.filter(":first").width()+"px"}else{d.slideString=(-1*(f+d.cloneOffset))*d.slides.filter(":first").width()+"px"}}d.container.animate({marginLeft:d.slideString},d.vars.animationDuration,function(){if(d.currentSlide==0&&f==d.count-1&&d.vars.animationLoop){d.container.css({marginLeft:(-1*d.count)*d.slides.filter(":first").width()+"px"})}else{if(d.currentSlide==d.count-1&&f==0&&d.vars.animationLoop){d.container.css({marginLeft:-1*d.slides.filter(":first").width()+"px"})}}d.animating=false;d.currentSlide=f;d.vars.after(d)})}else{d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration);d.slides.eq(f).fadeIn(d.vars.animationDuration,function(){d.animating=false;d.currentSlide=f;d.vars.after(d)})}}};d.animateSlides=function(){if(!d.animating){var e=(d.currentSlide==d.count-1)?0:d.currentSlide+1;d.flexAnimate(e)}};d.pause=function(){clearInterval(d.animatedSlides);if(d.vars.pausePlay){d.pausePlay.removeClass("pause").addClass("play").text(d.vars.playText)}};d.resume=function(){d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed);if(d.vars.pausePlay){d.pausePlay.removeClass("play").addClass("pause").text(d.vars.pauseText)}};d.canAdvance=function(e){if(!d.vars.animationLoop&&d.atEnd){if(d.currentSlide==0&&e==d.count-1&&d.direction!="next"){return false}else{if(d.currentSlide==d.count-1&&e==0&&d.direction=="next"){return false}else{return true}}}else{return true}};d.getTarget=function(e){d.direction=e;if(e=="next"){return(d.currentSlide==d.count-1)?0:d.currentSlide+1}else{return(d.currentSlide==0)?d.count-1:d.currentSlide-1}};d.init()};a.flexslider.defaults={animation:"fade",slideshow:true,slideshowSpeed:7000,animationDuration:600,directionNav:true,controlNav:true,keyboardNav:true,touchSwipe:true,prevText:"Previous",nextText:"Next",pausePlay:false,pauseText:"Pause",playText:"Play",randomize:false,slideToStart:0,animationLoop:true,pauseOnAction:true,pauseOnHover:false,controlsContainer:"",manualControls:"",start:function(){},before:function(){},after:function(){},end:function(){}};a.fn.flexslider=function(b){return this.each(function(){if(a(this).find(".slides li").length==1){a(this).find(".slides li").fadeIn(400)}else{if(a(this).data("flexslider")!=true){new a.flexslider(a(this),b)}}})}})(jQuery);
/*  flex 滑块 */




/* nice form 效果 */
//var checkboxHeight = "25";
//var radioHeight = "25";
//var selectWidth = "190";
//document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: ' + selectWidth + 'px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>');
//
//var Custom = {
//	init: function() {
//		var inputs = document.getElementsByTagName("input"), span = Array(), textnode, option, active;
//		for(a = 0; a < inputs.length; a++) {
//			if((inputs[a].type == "checkbox" || inputs[a].type == "radio") && inputs[a].className == "styled") {
//				span[a] = document.createElement("span");
//				span[a].className = inputs[a].type;
//
//				if(inputs[a].checked == true) {
//					if(inputs[a].type == "checkbox") {
//						position = "0 -" + (checkboxHeight*2) + "px";
//						span[a].style.backgroundPosition = position;
//					} else {
//						position = "0 -" + (radioHeight*2) + "px";
//						span[a].style.backgroundPosition = position;
//					}
//				}
//				inputs[a].parentNode.insertBefore(span[a], inputs[a]);
//				inputs[a].onchange = Custom.clear;
//				if(!inputs[a].getAttribute("disabled")) {
//					span[a].onmousedown = Custom.pushed;
//					span[a].onmouseup = Custom.check;
//				} else {
//					span[a].className = span[a].className += " disabled";
//				}
//			}
//		}
//		inputs = document.getElementsByTagName("select");
//		for(a = 0; a < inputs.length; a++) {
//			if(inputs[a].className == "styled") {
//				option = inputs[a].getElementsByTagName("option");
//				active = option[0].childNodes[0].nodeValue;
//				textnode = document.createTextNode(active);
//				for(b = 0; b < option.length; b++) {
//					if(option[b].selected == true) {
//						textnode = document.createTextNode(option[b].childNodes[0].nodeValue);
//					}
//				}
//				span[a] = document.createElement("span");
//				span[a].className = "select";
//				span[a].id = "select" + inputs[a].name;
//				span[a].appendChild(textnode);
//				inputs[a].parentNode.insertBefore(span[a], inputs[a]);
//				if(!inputs[a].getAttribute("disabled")) {
//					inputs[a].onchange = Custom.choose;
//				} else {
//					inputs[a].previousSibling.className = inputs[a].previousSibling.className += " disabled";
//				}
//			}
//		}
//		document.onmouseup = Custom.clear;
//	},
//	pushed: function() {
//		element = this.nextSibling;
//		if(element.checked == true && element.type == "checkbox") {
//			this.style.backgroundPosition = "0 -" + checkboxHeight*3 + "px";
//		} else if(element.checked == true && element.type == "radio") {
//			this.style.backgroundPosition = "0 -" + radioHeight*3 + "px";
//		} else if(element.checked != true && element.type == "checkbox") {
//			this.style.backgroundPosition = "0 -" + checkboxHeight + "px";
//		} else {
//			this.style.backgroundPosition = "0 -" + radioHeight + "px";
//		}
//	},
//	check: function() {
//		element = this.nextSibling;
//		if(element.checked == true && element.type == "checkbox") {
//			this.style.backgroundPosition = "0 0";
//			element.checked = false;
//		} else {
//			if(element.type == "checkbox") {
//				this.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
//			} else {
//				this.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
//				group = this.nextSibling.name;
//				inputs = document.getElementsByTagName("input");
//				for(a = 0; a < inputs.length; a++) {
//					if(inputs[a].name == group && inputs[a] != this.nextSibling) {
//						inputs[a].previousSibling.style.backgroundPosition = "0 0";
//					}
//				}
//			}
//			element.checked = true;
//		}
//	},
//	clear: function() {
//		inputs = document.getElementsByTagName("input");
//		for(var b = 0; b < inputs.length; b++) {
//			if(inputs[b].type == "checkbox" && inputs[b].checked == true && inputs[b].className == "styled") {
//				inputs[b].previousSibling.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
//			} else if(inputs[b].type == "checkbox" && inputs[b].className == "styled") {
//				inputs[b].previousSibling.style.backgroundPosition = "0 0";
//			} else if(inputs[b].type == "radio" && inputs[b].checked == true && inputs[b].className == "styled") {
//				inputs[b].previousSibling.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
//			} else if(inputs[b].type == "radio" && inputs[b].className == "styled") {
//				inputs[b].previousSibling.style.backgroundPosition = "0 0";
//			}
//		}
//	},
//	choose: function() {
//		option = this.getElementsByTagName("option");
//		for(d = 0; d < option.length; d++) {
//			if(option[d].selected == true) {
//				document.getElementById("select" + this.name).childNodes[0].nodeValue = option[d].childNodes[0].nodeValue;
//			}
//		}
//	}
//}
//window.onload = Custom.init;
/* nice form 效果 */





/* ipad 滚动 */
//(function ($) {
//  "use strict";
//  $(".add_scroll").each(function () {
//      $(this).bind('inview', function (event, visible) {
//          var $delay = "";
//          var $this = $(this),
//              $animation = ($this.data("animation") !== undefined) ? $this.data("animation") : "slideUp";
//          $delay = ($this.data("delay") !== undefined) ? $this.data("delay") : 300;
//
//          if (visible === true) {
//              setTimeout(function () {
//                  $this.addClass($animation);
//              }, $delay);
//          } else {
//              setTimeout(function () {
//                  $this.removeClass($animation);
//              }, $delay);
//          }
//      });
//  });
//
//})(jQuery);
//(function ($) {
//  function getViewportHeight() {
//      var height = window.innerHeight; // Safari, Opera
//      var mode = document.compatMode;
//
//      if ( (mode || !$.support.boxModel) ) { // IE, Gecko
//          height = (mode == 'CSS1Compat') ?
//          document.documentElement.clientHeight : // Standards
//          document.body.clientHeight; // Quirks
//      }
//
//      return height;
//  }
//
//  $(window).scroll(function () {
//      var vpH = getViewportHeight(),
//          scrolltop = (document.documentElement.scrollTop ?
//              document.documentElement.scrollTop :
//              document.body.scrollTop),
//          elems = [];
//      $.each($.cache, function () {
//          if (this.events && this.events.inview) {
//              elems.push(this.handle.elem);
//          }
//      });
//
//      if (elems.length) {
//          $(elems).each(function () {
//              var $el = $(this),
//                  top = $el.offset().top,
//                  height = $el.height(),
//                  inview = $el.data('inview') || false;
//
//              if (scrolltop > (top + height) || scrolltop + vpH < top) {
//                  if (inview) {
//                      $el.data('inview', false);
//                      $el.trigger('inview', [ false ]);                        
//                  }
//              } else if (scrolltop < (top + height)) {
//                  if (!inview) {
//                      $el.data('inview', true);
//                      $el.trigger('inview', [ true ]);
//                  }
//              }
//          });
//      }
//  });
//  $(function () {
//      $(window).scroll();
//  });
//})(jQuery);
/* ipad 滚动 */

/*视差滚动*/
(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);

(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);
(function($) {

    $.fn.parallax = function(options) {

        var windowHeight = $(window).height();

        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);

        // Iterate over each object in collection
        return this.each( function() {

        // Save a reference to the element
        var $this = $(this);

        // Set up Scroll Handler
        $(document).scroll(function(){

    var scrollTop = $(window).scrollTop();
            var offset = $this.offset().top;
            var height = $this.outerHeight();

    // Check if above or below viewport
if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
return;
}

var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

                // Apply the Y Background Position to Set the Parallax Effect
    $this.css('background-position', 'center ' + yBgPosition + 'px');
                
        });
        });
    }
}(jQuery));
/*视差滚动*/



/* mobile 导航 */
//$(".mob_nav").click(function(){
//	$("nav > #menu-left").animate({left:'0px', opacity:'1',},"slow");
//});
//
//$(".hide_nav").click(function(){
//	$("nav > #menu-left").animate({left:'1000px', opacity:'.1',},"slow");
//});
//
//$(document).ready(function(){
//	$(".mob_nav").click(function(){
//		$(".nav-container").addClass("active");
//	});
//});
//$(document).ready(function(){
//	$(".hide_nav").click(function(){
//		$(".nav-container").removeClass("active");
//	});
//});
///* mobile 导航 */
//
///* portfolio, team, services 滑块 */
//$(window).resize(function(){
//	if ($(window).width() < 650){
//		$("#screen_06 #new_add").addClass("flexslider");
//	}
//}).trigger('resize');
//
//$(window).resize(function(){
//	if ($(window).width() < 550){
//		$("#screen_10 #new_add").addClass("flexslider");
//		$(".slides").removeClass( "port_item");
//	}
//}).trigger('resize');
//
//$(window).resize(function(){
//	if ($(window).width() < 550){
//		$("#portfolio #new_add").addClass("flexslider");
//		$(".slides").removeClass( "team_item");
//	}
//}).trigger('resize');
///* portfolio, team, services 滑块 */
//
//
//
///* banner */
//
//var _bannerList=$('#banner_list .banner_box'),
//	_status=$('#status span'),
//	_listLength=_bannerList.length-1,
//	_gbTime=1,
//	_time=null,
//	_noclick=false;
//	
//	/*Loading Delay*/
//	function loadDelay(){
//		_time=setInterval('fnTime()',5000);	
//		_bannerList.eq(0).removeClass('on_delay');
//	}
//	var n = new Image();
//	n.onload = function(){
//		loadDelay();
//	}
//	n.src = "images/banner/01/bg1_1.png";
//	
//	/*Click Event*/
//		_status.bind('click',function(){
//			var _index=$(this).index();
//			if($(this).hasClass('on')||_noclick==true){
//				return false;
//			}else{
//				clearInterval(_time);
//				fnFocusAct(_index);			
//			}
//		})
//	
///*Focus Image Play*/
//function fnFocusAct(actNum){
//		clearInterval(_time);
//		_noclick=true;
//		var _toHide=$('#banner_list').find('.on'),
//			_statusAct=_status.eq(actNum),
//			_toAct=_bannerList.eq(actNum);
//		
//		_statusAct.siblings().removeClass('on');
//		_statusAct.addClass('on');
//		
//		_toAct.addClass('on2');
//		_toHide.fadeTo(600,0,function(){
//			_toHide.removeClass('on');
//			_toAct.removeClass('on2');
//			_toAct.siblings().css('opacity','1');
//			_toAct.addClass('on');
//			_noclick=false;
//		})
//		_gbTime=actNum;
//		if(_gbTime==_listLength){
//			_gbTime=0;
//		}else{
//			_gbTime++;	
//		}
//		_time=setInterval('fnTime()',5000)
//}
//
//function fnTime(){
//	fnFocusAct(_gbTime);		
//}
//
///* banner */	
//
//
//
///* 滚动页面元素动画 */
//!function(a, b, c) {
//	a.fn.smoove = function(b) {
//		return a.fn.smoove.init(this, a.extend({}, a.fn.smoove.defaults, b)), this
//	}, a.fn.smoove.items = [], a.fn.smoove.loaded = !1, a.fn.smoove.defaults = {
//		offset: 150,
//		opacity: 0,
//		transition: "all 1s ease, opacity 1.5s ease",
//		transformStyle: "preserve-3d",
//		transformOrigin: !1,
//		perspective: 1e3
//	}, a.fn.smoove.init = function(d, e) {
//		function f(a, b, c) {
//			function d(a) {
//				return a.charAt(0).toUpperCase() + a.slice(1)
//			}
//			for (var e = ["webkit", "moz", "ms", "o"], f = {}, g = 0; g < e.length; g++) c && (b = b.replace(c, "-" + e[g] + "-" + c)), f[d(e[g]) + d(a)] = b;
//			return f[a] = b, f
//		}
//		function g(c) {
//			for (var d = 0; d < a.fn.smoove.items.length; d++) {
//				var e = a.fn.smoove.items[d],
//					g = e.params,
//					h = a(b).height(),
//					i = !c || "down" === c && "1" === e.css("opacity") ? 0 : g.offset,
//					j = a(b).scrollTop() + h - e.data("top");
//				if ("string" == typeof i && i.indexOf("%") && (i = parseInt(i) / 750 * h), i > j) {
//					g.opacity !== !1 && e.css({
//						opacity: g.opacity
//					});
//					for (var k = [], l = ["move", "move3D", "moveX", "moveY", "moveZ", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "skew", "skewX", "skewY"], m = 0; m < l.length; m++)"undefined" != typeof g[l[m]] && (k[l[m]] = g[l[m]]);
//					var n = "";
//					for (var o in k) n += o.replace("move", "translate") + "(" + k[o] + ") ";
//					n && (e.css(f("transform", n)), e.parent().css(f("perspective", g.perspective)), g.transformOrigin && e.css(f("transformOrigin", g.transformOrigin)))
//				} else e.css("opacity", 1).css(f("transform", ""))
//			}
//		}
//		if (d.each(function() {
//			var b = a(this),
//				c = b.params = a.extend({}, e, b.data());
//			b.params.opacity = b.params.opacity / 100, b.data("top", b.offset().top), c.transition = f("transition", c.transition, "transform"), b.css(c.transition), a.fn.smoove.items.push(b)
//		}), !a.fn.smoove.loaded) {
//			a.fn.smoove.loaded = !0;
//			var h, i = !1,
//				j = 0,
//				k = a(b).height(),
//				l = a(b).width(),
//				m = a(c).height();
//			a("body").width() === a(b).width() && a("body").css("overflow-x", "hidden"), a(b).resize(function() {
//				clearTimeout(h), h = setTimeout(function() {
//					var d = a(b).height(),
//						e = a(b).width(),
//						h = k > d ? h = "up" : "down",
//						i = a.fn.smoove.items;
//					if (k = d, l !== e) {
//						for (var j = 0; j < i.length; j++) i[j].css(f("transform", "")).css(f("transition", ""));
//						var n = setInterval(function() {
//							var d = a(c).height();
//							if (d === m) {
//								b.clearInterval(n);
//								for (var e = 0; e < i.length; e++) i[e].data("top", i[e].offset().top), i[e].css(i[e].params.transition);
//								g(h)
//							}
//							m = d
//						}, 500)
//					} else g(h);
//					l = e
//				}, 500)
//			}), a(b).on("load", function() {
//				g(), a(b).scroll(function() {
//					i = !0
//				}), setInterval(function() {
//					if (i) {
//						i = !1;
//						var c = a(b).scrollTop(),
//							d = j > c ? d = "up" : "down";
//						j = c, g(d)
//					}
//				}, 250)
//			})
//		}
//	}
//}(jQuery, window, document);
//
//
//		$('.block').smoove({offset:'50%'});
//
///* 滚动页面元素动画 */
//
// $(function(){
//     $(".hover_li a,a.cd-modal-close").bind("click",function(){
//              if($(".cd-modal").hasClass("cd-modal-z")){
//            $(".cd-modal").removeClass("cd-modal-z");
//            }else{
//              $(".cd-modal").addClass("cd-modal-z");
//             }
//            })
//       })


