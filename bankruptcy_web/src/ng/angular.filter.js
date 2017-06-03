myApp.filter('myFilter',function(){
	return function(val){
		return val+1111;
	}
})
myApp.filter('pic',function(){
	return function(id){
		if(id){
			return appConfig.serverPath+'fm/file/download?fileId='+id;
		}else{
			return '/images/nopic.jpg';
		}
	}
})
//关键字得筛选
myApp.filter('keyword',function(){
	var aa = Base.getUrlParam('keywords')?Base.getUrlParam('keywords'):'';

	return function(text){
		if(text){
			if(aa=='%'){

			}else{
				aa = decodeURIComponent(aa);
			}
			if(text.indexOf(aa)>-1){
				return text.replace(aa,("<span  class='d-ct-list-key-red'>" + aa + "</span>"));
//				var a = new RegExp(aa,"g");
//				text.replace(a,("<span  class='d-ct-list-key-red'>" + aa + "</span>"));
//				return text;
			}else{
				return text;
			}
		}
	}
})
//
//myApp.filter('trustAsHtml',function($sce){
//	return function (text) {
////		return text;
// 		 return $sce.trustAsHtml(text);
//	};
//});